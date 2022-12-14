import apiFetch from "./api-fetch.js";
import { tokenKey } from "../../config.js";

export const listContacts = () => {
	return apiFetch("/contacts", {
		method: "GET",
		headers: {
			Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
		},
	});
};

export async function createContact(
  newContact = { name, email, number, relation, favorite:false }
) {
  	return await apiFetch("contacts", { body: newContact });
}

export async function editContact(newBody = { name, number, email, relation }, id) {
  return await apiFetch (`contacts/${id}`,{ method: "PATCH", body: newBody});
}

export async function favoriteContact(newBody = { favorite }, id) {
	return await apiFetch (`contacts/${id}`,{ method: "PATCH", body: newBody});
}


export async function deleteContact(id) {
  return await apiFetch(`contacts/${id}`, { method: "DELETE" });
}
