import DOMHandler from "../../dom-handler.js";
import AddContactPage from "./add-contact-page.js";
import { logout } from "../services/sessions-service.js";
import LoginPage from "./login-page.js";
import { listContacts } from "../services/contacts-service.js";
import ShowContact from "./show_contact.js";
import STORE from "../../store.js";

function render() {

  return `
    <main class="section">
      <section class="container">
            <h1 class="heading heading--lg text-center mb-2">Contactable</h1>
            <a class="text-center block mb-8 js-logout">Logout</a>
            <div class="js-contact-list">
            <section class="contacts">
                <div class="js-contacts">
                    <h4>CONTACTS(<span class= "number_contacts"></span>)</h4>

                </div>
                <ul class="js-contacts-list">
                </ul>
            </section>
        </div>
            <div class= "add">
              <i class="ri-add-fill"></i>
            </div>
        </section>
      </main>
    `;
}

function addContact(contact) {
  return `
      <li class="js-contact" data-id="${contact.id}">
          <div class="js-contact-info">
              <img src="./css/assets/user.png">
              <p>${contact.name}</p>
          </div>
          <icon data-id="${contact.id}" class="ri-star-line js-favorite-icon"></icon>
      </li>`;
}

async function addContacts() {
  const contacts = await listContacts();

  STORE.contacts = contacts;
  console.log(STORE);

  const contactList = document.querySelector(".js-contacts-list");
  const numberContacts = document.querySelector(".number_contacts")
  contactList.innerHTML = contacts
    .map((contact) => addContact(contact))
    .join(" ");
    numberContacts.innerHTML= contacts.length;
  const contactsElements = contactList.querySelectorAll(".js-contact");

  contactsElements.forEach((contact) => {
    contact.addEventListener("click", () => {
      const filterContact = contacts.filter(
        (e) => e.id === +contact.dataset.id
      );
      const contactDetail = ShowContact("#root");
      contactDetail.render(filterContact[0]);
    });
  });
}

async function listenContact() {
  await addContacts();
  const add = document.querySelector(".add");
  add.addEventListener("click", (event) => {
    event.preventDefault();
    DOMHandler.load(AddContactPage);
  });

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
    return render();
  },
  addListeners() {
    listenContact();
    listenLogout();
  },
};

export default HomePage;
