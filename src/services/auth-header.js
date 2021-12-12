/*
Checks Local Storage for user item. If there is a logged in user with accessToken (JWT), 
return HTTP Authorization header. Otherwise, return an empty object.
*/
export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user.accessToken ? { 'x-access-token': user.accessToken } : {};
}