import { combineReducers } from "redux"; // Import the combineReducers function from Redux
import contacts from "./contact"; // Import the contacts reducer
import user from "./user"; // Import the user reducer

// Combine the reducers into a single root reducer using combineReducers
export default combineReducers({ contacts, user });

