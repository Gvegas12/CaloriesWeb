package models

import (
	"time"
)

type User struct {
	ID        uint
	Name      string `binding:"required"`
	Email     string `binding:"required"`
	Password  string `binding:"required"`
	UpdatedAt time.Time
}

// // store slice of events
var users = []User{}

func (u User) Save() {
	// later: add it to a database
	users = append(users, u)
}

// get all users

func GetAllUsers() []User {
	return users
}
