import axios from "axios";

export default {

  // Gets a specific city by its id
  getAllCities: function(id) {
    return axios.get("/api/city/");
  },
  getCity: function(id) {
    return axios.get("/api/city/id/" + id);
  },
  signIn: function(userData) {
    return axios.post("/auth/signin", userData);
  },
  // Adds a place to a city
  addPlace: function() {
    return axios.post("/api/city/");
  },
  editPlace: function(placeType, id, editedPlaceData){
    return axios.post("/api/places/"+ placeType +"/"+id, editedPlaceData);
  },
  // Adds a city
  addCity: function() {
    return axios.post("/api/city");
  }
  
};