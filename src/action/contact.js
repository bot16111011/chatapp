import { FETCH_CONTACTS, ADD_MESSAGE } from "./actionTypes"; // Import action type constants

// Action creator for updating contacts
export function updateContacts(contacts) {
  return {
    type: FETCH_CONTACTS,    // Dispatch action for FETCH_CONTACTS
    contacts: contacts,     // Include the contacts data with the action
  };
}

// Action creator for adding a new message to a conversation
export function addNewMessage(message, userId) {
  return {
    type: ADD_MESSAGE,      // Dispatch action for ADD_MESSAGE
    message,                // Include the message with the action
    userId,                 // Include the user ID with the action
  };
}
