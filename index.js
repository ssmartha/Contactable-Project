import {login, logout } from "./src/services/sessions-service.js"

// console.log(login)

const credentials = {
  email: "loquequieras@gmail.com",
  password: "123456"
}

async function test() {
  try {
    //const user = await login(credentials);
    //console.log(user);

    const data = await logout();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

test();

// login(credentials)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
