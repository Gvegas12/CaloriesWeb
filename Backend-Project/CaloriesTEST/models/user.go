package models

import (
	"time"

	"gorm.io/gorm"
)

// User represents a user in the system
type User struct {
	gorm.Model
	Email              string     `json:"email" binding:"required,email" gorm:"unique"`
	Password           string     `json:"password" binding:"required"`
	PhoneNumber        string     `json:"phone_number" gorm:"unique"`
	ResetToken         string     `json:"reset_token" gorm:"default:null"`
	ResetTokenExpiry   *time.Time `json:"reset_token_expiry" gorm:"default:null"`
	VerificationCode   string     `json:"verification_code" gorm:"default:null"`
	VerificationExpiry *time.Time `json:"verification_expiry" gorm:"default:null"`
}
