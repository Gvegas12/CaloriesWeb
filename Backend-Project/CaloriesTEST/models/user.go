package models

import (
	"time"

	"gorm.io/gorm"
)

// User represents a user in the system
type User struct {
	gorm.Model
	Email            string    `json:"email" binding:"required,email" gorm:"unique"` // Added email format validation
	Password         string    `json:"password" binding:"required"`                  // Required field
	ResentToken      string    `json:"reset_token" gorm:"type:varchar(255);`
	ResetTokenExpiry time.Time `json:"reset_token_expiry"`
}
