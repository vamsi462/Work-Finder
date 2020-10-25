import {API} from '../config'

export const signup = (user) => {
   console.log(user)
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};


export const isAuthenticated = () => {

  if (typeof window === 'undefined') {
    return false;
  }

  if (localStorage.getItem('jwt')) {

    return JSON.parse(localStorage.getItem('jwt'))
  } else {
    return false
  }
}