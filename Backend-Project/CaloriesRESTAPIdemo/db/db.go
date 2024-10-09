package db

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

var db *sql.DB

// Define the constants for the DB connection.
const (
	host     = "Localhost"
	port     = 5432
	user     = "postgres"
	password = "secret"
	dbname   = "test"
)

// DBConnect establishes the connection to the PostgreSQL database.
func DBConnect() (*sql.DB, error) {
	psqlConn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlConn)
	if err != nil {
		return nil, err
	}
	return db, nil
}

// CheckError handles errors.
func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}
