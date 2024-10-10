package main

import (
	"log"

	"Calories.com/TestAPI/config"
	"Calories.com/TestAPI/database"
	"Calories.com/TestAPI/handlers"
	"Calories.com/TestAPI/middleware"
	"Calories.com/TestAPI/smsAuth"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	// Initialize the database
	cfg := config.GetConfig()
	database.InitDB(cfg)

	// Set up Gin router
	router := gin.Default()

	// Public routes
	router.POST("/login", handlers.Login)
	router.POST("/signup", handlers.Signup)
	router.POST("/request-password-reset", handlers.SendPasswordResetEmail)
	router.POST("/send-verification-code", smsAuth.SendVerificationCode)
	// Protected routes
	protected := router.Group("/").Use(middleware.JWTAuthMiddleware())
	{
		protected.GET("/user", handlers.GetUserProfile) // Profile route
	}

	router.Run(":4000")

}
