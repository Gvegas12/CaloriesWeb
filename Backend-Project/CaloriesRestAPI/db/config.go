package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

type Config struct {
	DBName   string
	User     string
	Password string
	Host     string
	Port     string
}

func NewConfig() *Config {
	return &Config{
		DBName:   os.Getenv("DB_NAME"),
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASSWORD"),
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
	}
}

const (
	host     = "Localhost"
	port     = 5432
	user     = "postgres"
	password = "secret"
	dbname   = "test"
)

var db *sql.DB
var usageCount int

const usageLimit = 5 // Limit to 5 uses before resetting

// OpenConnection opens a new connection if it's not already open or usage limit reached
func OpenConnection() (*sql.DB, error) {
	if db != nil && usageCount < usageLimit {
		usageCount++
		return db, nil
	}

	// Close old connection if usage limit is reached
	if db != nil {
		err := db.Close()
		if err != nil {
			return nil, fmt.Errorf("failed to close connection: %v", err)
		}
		db = nil
	}

	psqlconn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	newDb, err := sql.Open("postgres", psqlconn)
	if err != nil {
		return nil, fmt.Errorf("failed to open new connection: %v", err)
	}

	// Reset usage count for new connection
	usageCount = 1
	db = newDb
	return db, nil
}

// UseDatabase handles the actual database operations
func UseDatabase() error {
	db, err := OpenConnection()
	if err != nil {
		return fmt.Errorf("error connecting to the database: %v", err)
	}

	// Example insert statement
	insertStmt := `insert into "Employee" ("Name", "EmpID") values ('Panda', 24)`
	_, err = db.Exec(insertStmt)
	if err != nil {
		return fmt.Errorf("error executing insert statement: %v", err)
	}

	// Another dynamic insert statement
	insertDynStmt := `insert into "Employee" ("Name", "EmpID") values ($1, $2)`
	_, err = db.Exec(insertDynStmt, "Erish", 3)
	if err != nil {
		return fmt.Errorf("error executing dynamic insert statement: %v", err)
	}

	return nil
}

// CloseConnection closes the database connection if it's open
func CloseConnection() error {
	if db != nil {
		return db.Close()
	}
	return nil
}

func CheckError(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
