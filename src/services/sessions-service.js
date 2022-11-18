const BASE_URI = "https://contactable-api.herokuapp.com";
const tokenKey = "contactable_token";

export async function login(credentials = { email, password }) {
  const response = await fetch(`${BASE_URI}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials)
  })

  console.log(response)

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.errors);
  }

  const data = await response.json()
  sessionStorage.setItem(tokenKey, data.token)

  return data;
}

// login();
