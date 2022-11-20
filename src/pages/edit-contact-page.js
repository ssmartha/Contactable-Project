import DOMHandler from "../../dom-handler.js";
import STORE from "../../store.js";
import { input } from "../components/input.js";
import { editContact } from "../services/contacts-service.js"
import ShowContact from "./show_contact.js";
import { listContacts } from "../services/contacts-service.js";

function render() {
  const contact = STORE.contacts.find((contact) => contact.id == this.id);

  return `
      <main class="section">
        <section class="conteiner">
          <form class="flex flex-column gap-4 mb-4 js-update-contact-form">
            ${input({
              id: "name",
              value: `${contact.name}`,
              placeholder: "Name",
              name: "name",
              required: true,
            })}
            ${input({
              id: "number",
              value: `${contact.number}`,
              placeholder: "Number",
              name: "number",
              required: true,
            })}
            ${input({
              id: "email",
              value: `${contact.email}`,
              name: "email",
              placeholder: "Email",
              type: "email",
              required: true,
            })}
            <select class="form-select" aria-label="Default select example" name="relation" id="relation">
              <option value="Family" id="relation" ${contact.relation === "Family" ? "selected" : ""}>Family</option>
              <option value="Friends" id="relation" ${contact.relation === "Family" ? "selected" : ""}>Friends</option>
              <option value="Work" id="relation" ${contact.relation === "Family" ? "selected" : ""}>Work</option>
              <option value="Acquaintance" id="relation" ${contact.relation === "Family" ? "selected" : ""}>Acquaintance</option>
            </select>
            <div class="flex conteiner">
              <button type="submit" class="button button--primary">Save</button>
              <p class="js-cancel block text-center js-cancel">Cancel</p>
            </div>
          </form>
        </section>
      </main>
        `;
      }


function listenSubmitForm() {
  const form = document.querySelector(".js-update-contact-form")

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const { name, number, email, relation } = event.target.elements;

      const newDataForContact = {
        name: name.value,
        number: number.value,
        email: email.value,
        relation: relation.value,
      }

      const updatedContact = await editContact(newDataForContact, id);
      STORE.contacts = await listContacts();
      // DOMHandler.load(ShowContact(this.id))
    } catch (error) {
      console.log(error);
    }
  })
}

function listenCancelEdit() {
  const cancel = this.parent.querySelector(".js-cancel")

  cancel.addEventListener("click", async (event) => {
    event.preventDefault();

    // DOMHandler.load(ShowContact(this.id))
  })
}

// const execRender = render.then(response.)
const EditContactPage = {
  // localStorage.getItem("id")
  id : null || 1296,
  toString() {
    return render();
  },
  addListeners() {
    listenSubmitForm();
    listenCancelEdit()
  }
}

export default EditContactPage;