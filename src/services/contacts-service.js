import apiFetch from "./api-fetch.js";



export async function createContact(
  newContact = { name, email, number, relation, favorite:false }
) {
  return await apiFetch("contacts", { body: newContact });
  
}

export async function deleteContact(id) {
  return await apiFetch(`contacts/${id}`, { method: "DELETE" });
}
