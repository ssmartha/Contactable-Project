import apiFetch from "./api-fetch.js";
import { tokenKey } from "../../config.js";

// const BASE_URI = "https://contactable-api.herokuapp.com";
// const tokenKey = "contactable_token";

// const BASE_URI = "https://contactable-api.herokuapp.com";
// const tokenKey = "contactable_token";

// export async function login(credentials = { email, password }) {
//   const response = await fetch(`${BASE_URI}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials)
//   })

//   let data;
//   try {
//     data = await response.json();
//     console.log()
//   } catch (error) {
//     data = response.statusText;
//   }

//   if (!response.ok) {
//     console.log(response)
//     throw new Error(data.errors);
//   }

//   sessionStorage.setItem(tokenKey, data.token)
//   return data;
// }

export async function login(credentials = { email, password }) {
  const {token, ...user} = await apiFetch("login", {body: credentials});
  sessionStorage.setItem(tokenKey, token);

  return user;
}

export async function logout() {
  const data = await apiFetch("logout", {method: "DELETE"});
  sessionStorage.removeItem(tokenKey);

  return data;
}



