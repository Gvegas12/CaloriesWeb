package models

import (
	"Calories/buildAPI/db"
	"Calories/buildAPI/utils"
	"database/sql"
	"fmt"
	"log"

	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID       uint
	Name     string `binding:"required"`
	Email    string `binding:"required"`
	Password string `binding:"required"`
}

// Save inserts a new user into the database
func (u *User) Save() error { // Changed to pointer receiver for modifying User
	// Prepare the SQL statement
	query := "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING id"

	// Get a database connection
	database, err := db.DBConnect() // Ensure db.DBConnect handles errors correctly
	if err != nil {
		log.Printf("Failed to connect to the database: %v", err) // Log the error
		return err                                               // Return the error if there's an issue
	}
	defer database.Close() // Close the database connection when done

	stmt, err := database.Prepare(query)
	if err != nil {
		log.Printf("Failed to prepare statement: %v", err) // Log the error
		return err                                         // Return the error
	}
	defer stmt.Close() // Ensure the statement is closed after execution

	// Hash the password
	hashedPassword, err := utils.HashPassword(u.Password)
	if err != nil {
		log.Printf("Failed to hash password: %v", err) // Log the error
		return err                                     // Return the error if hashing fails
	}

	// Execute the statement
	err = stmt.QueryRow(u.Name, u.Email, hashedPassword).Scan(&u.ID)
	if err != nil {
		log.Printf("Failed to execute query: %v", err) // Log the error
		return err                                     // Return the error if the query fails
	}

	return nil // Return nil if no error
}

// // creating Valudation method

func (u User) ValidateCredentials(password string) error {
	// SQL query to get the hashed password for the provided email
	query := "SELECT id,password FROM users WHERE email = $1"

	// Get a database connection
	database, err := db.DBConnect() // Make sure to capture both values
	if err != nil {
		return fmt.Errorf("failed to connect to the database: %v", err) // Handle connection error
	}
	defer database.Close() // Ensure the connection is closed after use

	// Execute the query
	var retrievedPassword string
	err = database.QueryRow(query, u.Email).Scan(&u.ID, &retrievedPassword)
	if err != nil {
		if err == sql.ErrNoRows {
			return fmt.Errorf("no user found with the provided email") // No user found
		}
		return fmt.Errorf("error querying password: %v", err) // Handle other query errors
	}

	// Compare the hashed password with the provided password
	err = bcrypt.CompareHashAndPassword([]byte(retrievedPassword), []byte(password))
	if err != nil {
		return fmt.Errorf("invalid credentials: %v", err) // Password does not match
	}

	return nil // Return nil if validation succeeds
}
