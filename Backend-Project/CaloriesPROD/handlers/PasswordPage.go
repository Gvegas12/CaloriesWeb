package handlers

import (
	"net/http"
	"time"

	"Calories.com/TestAPI/database"
	"Calories.com/TestAPI/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

// RequestPasswordReset handler
func RequestPasswordReset(c *gin.Context) {
	var input struct {
		Email string `json:"email" binding:"required,email"`
	}

	// Validate input
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	var user models.User
	// Check if the user exists
	if err := database.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Generate a unique reset token
	resetToken := uuid.New().String()
	user.ResetToken = resetToken
	expiryTime := time.Now().Add(1 * time.Hour) // Store the value in a variable
	user.ResetTokenExpiry = &expiryTime         // Take the address of the expiryTime variable

	// Save the user with the reset token
	if err := database.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not save reset token"})
		return
	}

	// TODO: Send email with reset link (e.g., http://yourapp.com/reset?token=<resetToken>)
	// Here, you should implement an email sending function to notify the user with the reset link.

	c.JSON(http.StatusOK, gin.H{"message": "Password reset link sent"})
}
