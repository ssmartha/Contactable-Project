import { listContacts } from "./src/services/contacts-service.js";

async function addFavoriteContacts() {
  const contacts = await listContacts();
  //this.contacts = contacts;
  //this.favorite = contacts.filter((contact) => contact.favorite);
  this.favorites = contacts.filter( (element) => element.favorite == true);
}

const STORE = {
  user: null,
  contacts: [],
  favorites: [],
  currentContact: null,
  addFavoriteContacts,
  // fetchContacts,
  // currentContacts,
  // deleteContact,
};

export default STORE;
