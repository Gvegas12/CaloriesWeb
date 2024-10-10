package smsAuth

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"Calories.com/TestAPI/database"
	"Calories.com/TestAPI/models"
	"github.com/gin-gonic/gin"
)

type VerificationRequest struct {
	PhoneNumber string `json:"phone_number" binding:"required"`
}

func generateVerificationCode() string {
	rand.Seed(time.Now().UnixNano())
	return fmt.Sprintf("%06d", rand.Intn(1000000))
}

func SendVerificationCode(c *gin.Context) {
	var req VerificationRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		log.Printf("Error binding JSON: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Phone number is required"})
		return
	}

	log.Printf("Received phone number: %s", req.PhoneNumber)

	db := database.GetDB()
	var user models.User
	if err := db.Where("phone_number = ?", req.PhoneNumber).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	code := generateVerificationCode()
	expiry := time.Now().Add(10 * time.Minute)

	user.VerificationCode = code
	user.VerificationExpiry = &expiry

	if err := db.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save verification code"})
		return
	}

	if err := SendSMS(user.PhoneNumber, code); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to send SMS"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Verification code sent"})
}
