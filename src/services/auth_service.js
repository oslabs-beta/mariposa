/*
Make asynchronous HTTP requests
*/
import axios from 'axios';

const API_URL = '/mariposa/auth/';

//available authService functions - definitions below  
export const authService = {
  register,
  login,
  logout,
};

export const register = (firstname, lastname, username, email, password) => {
  //make a post request to the server
  console.log(firstname)  
  return axios.post(API_URL + 'signup', {firstname, lastname, username, email, password});
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'signin', {username, password})
    .then((response) => {
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
