import axios from "axios";

export default {

  // Gets a specific city by its id
  getAllCities: function(id) {
    return axios.get("/api/city/");
  },
  getCity: function(id) {
    return axios.get("/api/city/" + id);
  },
  // Adds a place to a city
  addPlace: function() {
    return axios.post("/api/city/");
  },
  // Adds a city
  addCity: function() {
    return axios.post("/api/city");
  }
  
};