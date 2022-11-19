import DOMHandler from "../../dom-handler.js";
import { input } from "../components/input.js";
import { createContact } from "../services/contacts-service.js";
import HomePage from "./home-page.js";

function renderAdd(){
  return `
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
  
 
  <button type="submit" class="button button--primary">Save</button>
</form>
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


const AddContactPage = {
  toString() {
    return renderAdd()
  },
  addListeners() {
    listenSubmit()
  }
}

export default AddContactPage