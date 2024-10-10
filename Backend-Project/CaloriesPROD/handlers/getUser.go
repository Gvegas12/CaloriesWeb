package handlers

import (
	"net/http"

	"Calories.com/TestAPI/database"
	"Calories.com/TestAPI/models"
	"github.com/gin-gonic/gin"
)

// GetUserProfile retrieves the user's profile information
func GetUserProfile(c *gin.Context) {
	userId, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User ID not found in context"})
		return
	}

	var user models.User
	// Retrieve user information from the database
	if err := database.DB.First(&user, userId).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Respond with user information (excluding password)
	c.JSON(http.StatusOK, gin.H{
		"id":         user.ID,
		"email":      user.Email,
		"created_at": user.CreatedAt,
		"updated_at": user.UpdatedAt,
	})
}
