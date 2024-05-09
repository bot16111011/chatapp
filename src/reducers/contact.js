import { FETCH_CONTACTS, ADD_MESSAGE } from "../action/actionTypes"; // Import action type constants

const initialState = {
  contacts: [], // Initial state with an empty array for contacts
};

export default function contacts(state = initialState, action) {
  // Define a reducer function that takes state and an action as parameters
  switch (action.type) {
    case FETCH_CONTACTS:
      // Handle the FETCH_CONTACTS action type
      return {
        ...state,
        contacts: action.contacts, // Replace the contacts in state with the new contacts data
      };
    case ADD_MESSAGE:
      // Handle the ADD_MESSAGE action type
      const updatedcontacts = [...state.contacts]; // Create a copy of the existing contacts array

      const user = updatedcontacts.find(
        (contact) => contact.id === action.userId
      ); // Find the user in the contacts based on the userId from the action
      user.chatlog.push(action.message); // Add the new message to the user's chatlog

      return {
        ...state,
        contacts: [...updatedcontacts], // Update the state with the modified contacts array
      };
    default:
      // Handle any other action type
      return state; // Return the current state if the action type is not recognized
  }
}
