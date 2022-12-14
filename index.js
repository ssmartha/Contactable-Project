//import {login, logout } from "./src/services/sessions-service.js"
//
//// console.log(login)
//
//const credentials = {
//  email: "loquequieras@gmail.com",
//  password: "123456"
//}
//
//async function test() {
//  try {
//    //const user = await login(credentials);
//    //console.log(user);
//
//    const data = await logout();
//    console.log(data);
//  } catch (error) {
//    console.log(error);
//  }
//}
//
//test();

// login(credentials)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

import DOMHandler from "./dom-handler.js";
import LoginPage from "./src/pages/login-page.js";
import HomePage from "./src/pages/home-page.js";
import { tokenKey } from "./config.js";
import STORE from "./store.js"
//import { login } from "./src/services/sessions-service.js"

//DOMHandler.load(LoginPage);

async function init(){
    try {
        const token = sessionStorage.getItem(tokenKey)
        if(!token) throw new Error();

        await STORE.addFavoriteContacts();
        DOMHandler.load(HomePage)
    } catch (error) {
        sessionStorage.removeItem(tokenKey)
        DOMHandler.load(LoginPage)
    }
}

init();
// sessionStorage.setItem(tokenKey, "invalid")
//login({
//   email: "tita@mail.com",
//   password: "123456",
//}).then(() => init());
