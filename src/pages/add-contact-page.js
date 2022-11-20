import DOMHandler from "../../dom-handler.js";
import { input } from "../components/input.js";
import { createContact } from "../services/contacts-service.js";
import HomePage from "./home-page.js";


function renderAdd(){
  return `
  <main class="section">
        <section class="conteiner">
        <div class="show-profile-header">
          <h1 class="show-profile-header__title">Create new contact</h1>
          <a class="text-center block mb-8 js-logout">Logout</a>
        </div>
          <form class="flex flex-column gap-4 mb-4 js-NewContact-form">
          ${input({
            id: "name",
            placeholder: "Name",
            name: "name",
            type: "text"
          })}
          ${input({
            id: "email",
            placeholder: "john@example.com",
            type: "email",
            required: true,
            name: "email",
          })}
          ${input({
            id: "number",
            placeholder: "Number",
            name: "number",
            type: "number"
          })}
          <select name="relation" id="relation">
          <option disabled selected hidden>Relations</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Work">Work</option>
          <option value="Acquaintance">Acquaintance</option>
          </select>
          
          </section>
          <div class="flex conteiner">
            <p class="js-cancel block text-center js-cancel">Cancel</p>
            <button type="submit" class="button button--primary">Save</button>
          </div>
          </form>
  </main>
`;
}

function listenSubmit() {
  const form = document.querySelector(".js-NewContact-form");
  console.log(form)
  form.addEventListener("submit", async event => {
    event.preventDefault();

    const { email, name, number,relation } = event.target;

    const data = {
      name: name.value,
      email: email.value,
      number: number.value,
      relation: relation.value,
    };
    console.log(data)
    //console.log(user)
    const user = await createContact(data);
    DOMHandler.load(HomePage)

    // try {
    //   const user = await updateUser(data);

    //   STORE.user = user;
    //   STORE.currentTab = "expense";
    //   DOMHandler.reload();
    // } catch (error) {
    //   Profile.state.formError = error.message;
    //   DOMHandler.reload();
    // }
  });
}
  function listenCancelCreate() {
  const cancel = document.querySelector(".js-cancel")

  cancel.addEventListener("click", async (event) => {
    event.preventDefault();

    DOMHandler(HomePage);
    // DOMHandler.load(ShowContact(this.id))
  })
}

const AddContactPage = {
  toString() {
    return renderAdd()
  },
  addListeners() {
    listenSubmit()
    HomePage.addListeners()
    listenCancelCreate()

  }
}

export default AddContactPage