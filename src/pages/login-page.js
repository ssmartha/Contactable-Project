import { input } from "../components/input.js";
import DOMHandler from "../../dom-handler.js";
import HomePage from "./home-page.js";
import { login } from "../services/sessions-service.js";
// import EditContact from "./edit_contact.js"
import EditContactPage from "./edit-contact-page.js";

function render() {
    return `
    <main class="section">
        <section class="conteiner">
            <h1 class="heading heading--lg text-center mb-4">login</h1>
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
            <a href="#" class="block text-center js-singup-link">Create account</a>
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
        // DOMHandler.load(HomePage);
      DOMHandler.load(EditContactPage);
    });
  }


const LoginPage = {
    toString() {
        return render();
    },
    addListeners() {
        listenSubmitForm();
    }
}

export default LoginPage
