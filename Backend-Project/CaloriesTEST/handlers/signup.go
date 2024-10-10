package handlers

import (
	"net/http"
	"strings"

	"Calories.com/TestAPI/database"
	"Calories.com/TestAPI/models"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func Signup(c *gin.Context) {
	var input models.User

	// Parse the JSON request body into the 'input' variable
	if err := c.ShouldBindJSON(&input); err != nil {
		// Return a detailed error message
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Hash the password provided by the user
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		// If hashing fails, return a 500 internal server error
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	// Replace the plain-text password with the hashed password
	input.Password = string(hashedPassword)

	// Save the user record (check for unique email and phone number)
	if err := database.DB.Create(&input).Error; err != nil {
		if strings.Contains(err.Error(), "duplicate key value") {
			if strings.Contains(err.Error(), "email") {
				c.JSON(http.StatusConflict, gin.H{"error": "Email already exists"})
			} else if strings.Contains(err.Error(), "phone_number") {
				c.JSON(http.StatusConflict, gin.H{"error": "Phone number already exists"})
			} else {
				c.JSON(http.StatusConflict, gin.H{"error": "Duplicate value exists"})
			}
			return
		}
		// If saving the user fails for any other reason
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	// If everything is successful, return a 200 OK
	c.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}
