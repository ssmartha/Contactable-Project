import DOMHandler from "../../dom-handler.js";
import AddContactPage from "./add-contact-page.js";
import { logout } from "../services/sessions-service.js";
import LoginPage from "./login-page.js";

function render(){
    return `
    <main class="section">
      <section class="container">
            <h1 class="heading heading--lg text-center mb-2">Contactable</h1>
            <a class="text-center block mb-8 js-logout">Logout</a>



            <div class= "add">
            <i class="ri-add-fill"></i>
            </div>
        </section>
      </main>
    `
}

function listenContact(){
    const add = document.querySelector(".add")
    
    add.addEventListener("click", (event) => {
        event.preventDefault();
        DOMHandler.load(AddContactPage)
    }) 
}

function listenLogout() {
    const a = document.querySelector(".js-logout");
  
    a.addEventListener("click", async (event) => {
      event.preventDefault();
  
      try {
        await logout();
        DOMHandler.load(LoginPage);
      } catch (error) {
        console.log(error);
      }
    });
  }

const HomePage = {
    toString() {
        return render()
    },
    addListeners() {
        listenContact();
        listenLogout()
    }
}



export default HomePage