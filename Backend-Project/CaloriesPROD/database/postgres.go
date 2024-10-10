package database

// STEP 2

import (
	"fmt"
	"log"

	"Calories.com/TestAPI/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB(cfg config.Config) {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		cfg.DBHost, cfg.DBUser, cfg.DBPassword, cfg.DBName, cfg.DBPort)

	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to the databaseL %v", err)
	}

	log.Println("Database connection established")
}

// GetDB returns the database instance
func GetDB() *gorm.DB {
	return DB
}
