package handlers

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"Calories.com/TestAPI/database"
	"Calories.com/TestAPI/models"
	"github.com/gin-gonic/gin"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

// Function to send the reset email using SendGrid
func sendResetEmail(to string, resetToken string) error {
	from := mail.NewEmail("CaloriesWebAPP", "pgvegass@gmail.com") // Use your verified sender email here
	subject := "Password Reset Request"
	toEmail := mail.NewEmail("User", to)
	resetLink := "http://yourapp.com/reset?token=" + resetToken
	plainTextContent := fmt.Sprintf("Click the link to reset your password: %s", resetLink)
	htmlContent := fmt.Sprintf("<p>Click the link to reset your password: <a href=\"%s\">Reset Password</a></p>", resetLink)

	message := mail.NewSingleEmail(from, subject, toEmail, plainTextContent, htmlContent)

	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY")) // Ensure your API key is stored in environment variables
	response, err := client.Send(message)
	if err != nil {
		log.Printf("Error sending email: %v", err)
		return err
	}
	log.Printf("Email sent with status code: %d", response.StatusCode)
	return nil
}

// SendPasswordResetEmail handles the request to send a password reset email
func SendPasswordResetEmail(c *gin.Context) {
	var input struct {
		Email string `json:"email" binding:"required,email"`
	}

	// Bind the input
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// Look up the user in the database
	var user models.User
	if err := database.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Generate the reset token
	resetToken, err := GenerateResetToken(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate reset token"})
		return
	}

	// Set token and expiry
	user.ResetToken = resetToken
	expiryTime := time.Now().Add(1 * time.Hour) // Set expiration time
	user.ResetTokenExpiry = &expiryTime         // Set expiry in the database

	// Save the token and expiry in the database
	if err := database.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not save reset token"})
		return
	}

	// Send the password reset email asynchronously
	go func() {
		if err := sendResetEmail(user.Email, resetToken); err != nil {
			log.Printf("Failed to send password reset email to %s: %v", user.Email, err)
		}
	}()

	// Respond to the client
	c.JSON(http.StatusOK, gin.H{"message": "Password reset email sent"})
}
