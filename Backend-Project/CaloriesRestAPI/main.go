package main

import (
	//"database/sql"

	"github.com/Khasan/caloriesrestapi/db"
	//_ "github.com/lib/pq"
)

// const (
// 	host     = "Localhost"
// 	port     = 5432
// 	user     = "postgres"
// 	password = "secret"
// 	dbname   = "test"
// )

// var db *sql.DB

// Server router
func main() {

	// psqlconn := fmt.Sprintf("host= %s port= %d user= %s password =%s dbname = %s sslmode=disable", host, port, user, password, dbname)
	// // server := gin.Default()

	// db, err := sql.Open("postgres", psqlconn)
	// if err != nil {
	// 	return
	// }

	// defer db.Close()

	// insertStmt := `insert into "Employee" ("Name","EmpID") values ('Panda',24)`
	// _, e := db.Exec(insertStmt)
	// CheckError(e)

	// insertDynStmt := `insert into "Employee" ("Name","EmpID") values ($1,$2)`
	// _, e = db.Exec(insertDynStmt, "erish", 03)
	// CheckError(e)

	// // GET, POST, PUT, PATCH, DELETE
	// server.GET("/registration", getUserInfo)
	// server.POST("/registration", createUserInfo)

	// server.Run(":3000") //localhost:3000

	// Example of using the connection
	for i := 0; i < 10; i++ { // Simulate 10 database operations
		db.useDatabase()
	}

	// Close connection at the end of the program
	if db != nil {
		db.Close()
	}

}

// func CheckError(err error) {
// 	if err != nil {
// 		panic(err)
// 	}
// }

// func getUserInfo(context *gin.Context) {
// 	users := models.GetAllUsers()
// 	context.JSON(http.StatusOK, users)

// }

// func createUserInfo(context *gin.Context) {
// 	var user models.User
// 	err := context.ShouldBindJSON(&user)

// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data."})
// 		return
// 	}

// 	user.ID = 1

// 	user.Save()

// 	context.JSON(http.StatusCreated, gin.H{"message": "UserInfo created!", "user": user})

// }

// func connectDB() (*sql.DB, error) {
// 	cfg := db.NewConfig()
// 	connStr := fmt.Sprintf("postgres://%s:%s@%s:%s/%s",
// 		cfg.User, cfg.Password, cfg.Host, cfg.Port, cfg.DBName)
// 	db, err := sql.Open("postgres", connStr)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return db, nil
// }
