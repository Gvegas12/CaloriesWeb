package utils

import (
	"errors"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const secretKey = "supersecret"

func GenerateToken(email string, userid uint) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email":  email,
		"userid": userid,
		"exp":    time.Now().Add(time.Hour * 2).Unix(), // token expire after a certain time
	})

	return token.SignedString([]byte(secretKey))
}

// func VerifyToken(token string) {
// 	parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
// 		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
// 			return nil, errors.New("unexpected signing method")
// 		}
// 		return secretKey, nil
// 	})

// 	if err != nil {
// 		return errors.New("could not parse token")
// 	}

// 	if !parsedToken.Valid {
// 		return errors.New("invalid token")
// 	}

// 	return nil

// If token is valid and no error occurred

// if err != nil {
// 	return errors.New("Could not parse token.")
// }

// tokenIsValid := parsedToken.Valid

// if !tokenIsValid {
// 	return errors.New("Invalid token!")
// }

// if err != nil {
// 	return errors.New("could not parse token")
// }

// if !parsedToken.Valid {
// 	return errors.New("invalid token")
// }

// return nil // If token is valid and no error occurred

// // claims, ok := parsedToken.Claims.(jwt.MapClaims)

// // if !ok {
// // 	return errors.New("Invalid token claims.")
// // }

// // email := claims["email"].(string)
// // userId := claims["userId"].(uint)

// return nil
// }

func VerifyToken(token string) error {
	parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return []byte(secretKey), nil
	})

	if err != nil {
		return errors.New("could not parse token")
	}

	if !parsedToken.Valid {
		return errors.New("invalid token")
	}

	// email := claims["email"].(string)
	//userId := claims["userId"].(uint)

	return nil // Return nil if no error occurred and token is valid
}
