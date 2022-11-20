import DOMHandler from "../../dom-handler.js";
import HomePage from "./home-page.js";
import LoginPage from "./login-page.js";
import EditContactPage from "./edit-contact-page.js";
import { deleteContact } from "../services/contacts-service.js";

export default function ShowContact(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render: function (contact) {
      const html = `
      <div  class="show-profile">
          <div class="show-profile-header">
            <h2 class="show-profile-header__title">Contact Detail</h2>
            <a class="text-center block mb-8 js-logout">Logout</a>
          </div>
          <div class="show-profile-body">
            <img src="./css/assets/user.png" />
            <h3>${contact.name}</h3>
            <p>${contact.relation}</p>
            <ul class="show-profile__info">
              <li><span>Number:</span> ${contact.number} </li>
              <li><span>Email:</span> ${contact.email} </li>
            </ul>
          </div>
          <div class="show-profile-footer">
            <a href="#back" class="js-btn-back">Back</a>
            <a data-id="${contact.id}" href="#delete" class="js-btn-delete-contact">Delete</a>
            <a data-id="${contact.id}" href="#edit" class="js-btn-edit-contact">Edit</a>
          </div>
        </div>`;
      this.parent.innerHTML = html;
      this.addBackListener();
      this.logoutListener();
      this.addDeleteContact();
      this.addEditContact();
      localStorage.setItem("id", contact.id);
    },
    addBackListener: function () {
      const btnBack = this.parent.querySelector(".js-btn-back");
      btnBack.addEventListener("click", (e) => {
        e.preventDefault();
        DOMHandler.load(HomePage);
      });
    },
    logoutListener: function () {
      const logout = document.querySelector(".js-logout");
      logout.addEventListener("click", (event) => {
        event.preventDefault();
        DOMHandler.load(LoginPage);
      });
    },
    addDeleteContact: function () {
      const btnDelete = this.parent.querySelector(".js-btn-delete-contact");
      btnDelete.addEventListener("click", async (e) => {
        e.preventDefault();
        deleteContact(localStorage.getItem("id"));
        DOMHandler.load(HomePage);
      });
    },
    addEditContact: function () {
      const btnEdit = this.parent.querySelector(".js-btn-edit-contact");
      btnEdit.addEventListener("click", (e) => {
        e.preventDefault();
        DOMHandler.load(EditContactPage);
      });
    },

  };
}
















