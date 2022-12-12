package server

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func DefineRouter() *mux.Router {
	// Instantiate the mux server
	router := mux.NewRouter()
	router.StrictSlash(true)

	// Subrouter with prefix
	api := router.PathPrefix("/api").Subrouter()
	api.HandleFunc("/signup", func(w http.ResponseWriter, r *http.Request) {
		//user := new(store.User)
		log.Printf("%+v", r)
	})

	return router
}
