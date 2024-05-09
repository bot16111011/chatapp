// Import necessary libraries and CSS files
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


// Import the main App component and other dependencies
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

// Import the Redux store configuration
import { configureStore } from "./stores";

// Create a Redux store
const store = configureStore();

// Render the application to the DOM
ReactDOM.render(
  <React.StrictMode>
    {/* Set up routing for the application */}
    <Router>
      {/* Provide the Redux store to the entire app */}
      <Provider store={store}>
        {/* The main App component, the root of the application */}
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  // Attach the app to the HTML element with the id "root"
  document.getElementById("root")
);


