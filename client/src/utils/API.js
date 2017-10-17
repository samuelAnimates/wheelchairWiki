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
  register: function(userData) {
    return axios.post("/auth/register", userData);
  },
  //Route to test that JWT authentication is working
  testAuth: function(body, config) {
    return axios.post("/auth/test", body, config);
  },
  editPlace: function(placeType, id, editedPlaceData, config){
    return axios.post("/api/places/"+ placeType +"/"+id, editedPlaceData, config);
  },
  getPlace: function(placeType, id){
    return axios.get("/api/places/"+ placeType +"/"+id);
  }
  
};