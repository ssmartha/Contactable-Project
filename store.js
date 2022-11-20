import { listContacts } from "./src/services/contacts-service.js";

async function fetchContacts() {
  const contacts = await listContacts();

  //this.contacts = contacts;
  //this.favorite = contacts.filter((contact) => contact.favorite);
  this.favorite = contacts.filter( element => element.favorite);

}

function currentContacts() {
  return this[this.currentTab];
}

const STORE = {
  user: null,
  contacts: [],
  currentContact: null,
  // fetchContacts,
  // currentContacts,
  // deleteContact,
};

export default STORE;
