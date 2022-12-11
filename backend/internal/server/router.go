package server

import (
	"net/http"

	"github.com/gorilla/mux"
)

func DefineRouter() *mux.Router {
	// Instantiate the mux server
	router := mux.NewRouter()
	router.StrictSlash(true)

	// Subrouter with prefix
	api := router.PathPrefix("/api").Subrouter()
	api.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"msg":"hello"}`))
	})

	return router
}
