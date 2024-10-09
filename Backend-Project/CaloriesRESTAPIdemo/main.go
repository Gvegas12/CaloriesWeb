package main

import (
	"Calories/buildAPI/models"
	"Calories/buildAPI/utils"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {

	server := gin.Default()

	server.GET("/registration", GetUserInfo) // GET, POST, PUT, PATCH, DELETE
	server.POST("/signup", signup)
	server.POST("/login", login)

	server.Run(":3000")

	// dbConn, err := db.DBConnect()
	// db.CheckError(err)
	// defer dbConn.Close()

	// // Insert a new employee using a static query
	// insertStmt := `INSERT INTO "Employee"("Name", "EmpID") VALUES ('Rohit', 21)`
	// _, err = dbConn.Exec(insertStmt)
	// db.CheckError(err)

	// // Insert a new employee using a dynamic query
	// dynStmt := `INSERT INTO "Employee"("Name", "EmpID") VALUES ($1, $2)`
	// _, err = dbConn.Exec(dynStmt, "Krish", 03)
	// db.CheckError(err)

	fmt.Println("Insert successful")

}

func GetUserInfo(context *gin.Context) {

	context.JSON(http.StatusOK, gin.H{"message": "Hello"})
}

func signup(context *gin.Context) {
	var user models.User

	err := context.ShouldBindJSON(&user)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data."})
		return
	}

	err = user.Save()

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not save user."})
		return
	}

	context.JSON(http.StatusCreated, gin.H{"message": "User created successfully"})
}

func login(context *gin.Context) {
	var user models.User

	err := context.ShouldBindJSON(&user)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data."})
		return
	}

	err = user.ValidateCredentials(user.Password)

	if err != nil {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Could not authenticate user."})
		return
	}

	token, err := utils.GenerateToken(user.Email, user.ID)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not authenticate user"})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Login successful!", "token": token})
}
