/*
Make asynchronous HTTP requests
*/
import axios from 'axios';

const API_URL = '/mariposa/auth/';



export const register = (firstname, lastname, username, email, password) => {
  //make a post request to the server
  return axios.post(API_URL + 'signup', {firstname, lastname, username, email, password});
};

export const login = (username, password) => {
  return axios
    .post(API_URL + 'signin', {username, password})
    .then((response) => {
      console.log(response.data)
      if (response.data.accessToken) {
        //set local storage key/value pair


        localStorage.setItem('user', JSON.stringify(response.data));

      }

      return response.data;
    })
    .catch(error => {
      return error.message;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

//available authService functions - definitions below  
export const authService = {
  register,
  login,
  logout,
};
