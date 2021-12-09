/*
Make asynchronous HTTP requests
*/
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

//available authService functions - definitions below  
export const authService = {
  register,
  login,
  logout,
};

const register = (
  firstname, 
  lastname, 
  username, 
  email, 
  password
  ) => {
  //make a post request to the server  
  return axios.post(API_URL + 'signup', {
    firstname,
    lastname,
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'signin', {
      username, //maybe email?
      password,
    })
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
