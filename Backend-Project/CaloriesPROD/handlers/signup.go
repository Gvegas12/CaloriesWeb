package handlers

import (
	"net/http"

	"Calories.com/TestAPI/database"
	"Calories.com/TestAPI/models"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// Singup handler
func Signup(c *gin.Context) {
	var input models.User

	// Parse the JSON request body into the 'input' variable
	if err := c.ShouldBindJSON(&input); err != nil {
		// if there is an error return 400 bad Request Response
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	// Hash the password provided by the user
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		// If hashing fails, return a 500 internal server error
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	// Replace the plain-text with password
	input.Password = string(hashedPassword)

	// Save the user record
	if err := database.DB.Create(&input).Error; err != nil {
		// If saving the user fails
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	// If everything is successful, return a 200 OK
	c.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}
