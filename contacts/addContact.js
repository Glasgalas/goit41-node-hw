import { listContacts } from "./listContacts.js";
import { v4 } from "uuid";
import { updateContacts } from "./updateContacts.js";

export const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  updateContacts(contacts);
  return newContact;
};
