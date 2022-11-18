import apiFetch from "./api-fetch.js";
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
  return await apiFetch("login", {body: credentials});
}

export async function logout() {
  return await apiFetch("login", {body: credentials});
}



