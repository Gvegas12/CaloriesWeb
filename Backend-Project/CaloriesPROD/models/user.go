package models

import (
	"time"

	"gorm.io/gorm"
)

// User represents a user in the system
type User struct {
	gorm.Model
	Email            string     `json:"email" binding:"required,email" gorm:"unique"`
	Password         string     `json:"password" binding:"required"`
	ResetToken       string     `json:"reset_token" gorm:"default:null"`
	ResetTokenExpiry *time.Time `json:"reset_token_expiry" gorm:"default:null"`
}
