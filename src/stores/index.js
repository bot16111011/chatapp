import { applyMiddleware, createStore } from "redux"; 
import logger from "redux-logger"; // Import the Redux logger middleware
import thunk from "redux-thunk"; // Import the Redux thunk middleware
import rootreducer from "../reducers"; // Import the root reducer for the application

// Declare a variable to hold the Redux store
let store;

// function to configure and create the Redux store
export function configureStore() {
  // Create the Redux store by passing the root reducer and applying middleware
  store = createStore(rootreducer, applyMiddleware(thunk, logger));

  // Return the configured store
  return store;
}
