// console.log("HOLA MUNDO")
import {login} from "./src/services/sessions-service.js"

console.log(login)

const credentials = {
  email: "jjin@mail.com",
  password: "123456"
}

login(credentials)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
