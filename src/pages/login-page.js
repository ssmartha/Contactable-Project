import { input } from "../components/input.js";
import DOMHandler from "../../dom-handler.js";
import HomePage from "./home-page.js";
import SignUpPage from "./singup-page.js";
import { login } from "../services/sessions-service.js";

function render() {
    return `
    <main class="section">
        <section class="conteiner">
            <h1 class="heading heading--lg text-center mb-4">Login</h1>
            <form class="flex flex-column gap-4 mb-4 js-login-form">
                ${input({
                    id: "email",
                    label: "email",
                    placeholder: "john@example.com",
                    type: "email",
                    required: true,
                    name: "email",
                    value: "loquequieras@gmail.com",
                })}

                ${input({
                    label: "password",
                    id: "password",
                    name: "password",
                    placeholder: "********",
                    type: "password",
                    required: true,
                    value: "123456",
                })}

                <button type="submit" class="button button--primary">Login</button>
            </form>
            <a href="#" class="block text-center js-signup-link">Signup</a>
        </section>
    </main>
  `;
}


function listenSubmitForm() {
    const form = document.querySelector(".js-login-form");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const { email, password } = event.target;

      const credentials = {
        email: email.value,
        password: password.value
      };

      const user = await login(credentials);
      DOMHandler.load(HomePage);
    });

  }

function listenSignUp() {
    const form = document.querySelector(".js-signup-link");

    form.addEventListener("click", async (event) => {
      event.preventDefault();

      DOMHandler.load(SignUpPage);
    });
}

const LoginPage = {
    toString() {
        return render();
    },
    addListeners() {
        listenSubmitForm();
        listenSignUp();
    }
}

export default LoginPage
