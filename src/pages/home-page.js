import DOMHandler from "../../dom-handler.js";
import AddContactPage from "./add-contact-page.js";
import { logout } from "../services/sessions-service.js";
import LoginPage from "./login-page.js";
import { listContacts } from "../services/contacts-service.js";
import ShowContact from "./show_contact.js";
import STORE from "../../store.js";
import { favoriteContact } from "../services/contacts-service.js"

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
          <icon data-id="${contact.id}" class="ri-star-line js-favorite-icon ${contact.favorite === true ? "js-favorite-icon-yellow" : "js-favorite-icon-black"}"></icon>
      </li>`;
}

async function addContacts() {
  const contacts = await listContacts();

  STORE.contacts = contacts;

  const contactList = document.querySelector(".js-contacts-list");
  const numberContacts = document.querySelector(".number_contacts")
  contactList.innerHTML = contacts
    .map((contact) => addContact(contact))
    .join(" ");
    numberContacts.innerHTML= contacts.length;
  const contactsElements = contactList.querySelectorAll(".js-contact");

  contactsElements.forEach((contact) => {
    contact.addEventListener("click", (event) => {
      if (event.target.classList.contains("js-favorite-icon")) return;
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

async function listenFavorite() {
  await addContacts();
  const favorite = document.querySelector(".js-contacts-list");
  favorite.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("js-favorite-icon")) return;

    const contact = STORE.contacts.filter(
      (element) => element.id == event.target.dataset.id
    );

    try {

      if (contact[0].favorite === true) {
        contact[0].favorite = false
      } else {
        contact[0].favorite = true
      }

      const newDataForContact = {
        favorite: contact[0].favorite
      }

      const updatedContact = await favoriteContact(newDataForContact, event.target.dataset.id);
      STORE.contacts = await listContacts();
      STORE.favorites = STORE.contacts.filter( (element) => element.favorite == true);
      DOMHandler.load(HomePage);
      // DOMHandler.load(ShowContact(this.id))
    } catch (error) {
      console.log(error);
    }    

    console.log(contact[0].favorite)
    console.log(STORE.favorites)
    // DOMHandler.load(AddContactPage);
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
    return render();
  },
  addListeners() {
    listenContact();
    listenLogout();
    listenFavorite();
  },
};

export default HomePage;
