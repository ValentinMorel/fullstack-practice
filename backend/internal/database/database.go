package main

import (
	"context"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	username string
	password string
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	username = os.Getenv("USER")
	password = os.Getenv("PASSWORD")
	MongoUri := "mongodb+srv://" + username + ":" + password + "@cluster0.eciacig.mongodb.net/?retryWrites=true&w=majority"

	var collection *mongo.Collection
	var ctx = context.Background()

	clientOptions := options.Client().ApplyURI(MongoUri)
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	collection = client.Database("fullstackApp").Collection("Users")
	log.Printf("%+v", collection)

}
