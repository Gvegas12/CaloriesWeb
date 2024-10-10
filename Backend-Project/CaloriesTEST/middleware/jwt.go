package middleware

import (
	"net/http"
	"strings"

	"Calories.com/TestAPI/handlers" // Update the import path according to your project structure
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// JWTAuthMiddleware is a middleware for verifying JWT tokens
func JWTAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Get the Authorization header
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header missing"})
			c.Abort()
			return
		}

		// Extract the token from the Bearer string
		parts := strings.Split(authHeader, "Bearer ")
		if len(parts) != 2 {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization format is invalid"})
			c.Abort()
			return
		}
		tokenString := parts[1]

		// Parse and validate the token
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			// Validate the signing algorithm
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.NewValidationError("invalid signing method", jwt.ValidationErrorSignatureInvalid)
			}

			// Return the JWT secret key
			return []byte(handlers.JWT_SECRET), nil
		})

		// Check if an error occurred or the token is invalid
		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired token"})
			c.Abort()
			return
		}

		// Extract user ID from the token claims
		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			userId := claims["user_id"].(float64) // Assuming user_id is stored as a float64
			c.Set("user_id", uint(userId))        // Set user_id in the context
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token claims"})
			c.Abort()
			return
		}

		// If valid, proceed with the request
		c.Next()
	}
}
