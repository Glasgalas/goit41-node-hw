import { listContacts } from "./listContacts.js";

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((el) => el.id === contactId);
  if (!contact) {
    return null;
  }
  return contact;
};
