package smsAuth

import (
	"fmt"
	"os"

	"github.com/twilio/twilio-go"
	openapi "github.com/twilio/twilio-go/rest/api/v2010"
)

func SendSMS(to string, code string) error {
	client := twilio.NewRestClient()

	params := &openapi.CreateMessageParams{}
	params.SetTo(to)
	params.SetFrom(os.Getenv("TWILIO_PHONE_NUMBER"))
	params.SetBody(fmt.Sprintf("  Hello from CaloriesWebAPP ! Your verification code : %s", code))

	_, err := client.Api.CreateMessage(params)
	return err
}
