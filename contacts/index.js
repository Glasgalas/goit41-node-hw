import { addContact } from "./addContact.js";
import { getContactById } from "./getContactById.js";
import { removeContact } from "./removeContact.js";
import { listContacts } from "./listContacts.js";

const contactsOperations = {
  addContact,
  getContactById,
  removeContact,
  listContacts,
};

export default contactsOperations;
