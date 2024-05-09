import React from "react"; 
import { useParams } from "react-router"; // Import useParams from react-router
import "../stylesheets/rightSidebar.css"; // Import CSS styles for the right sidebar
import MessageBox from "./MessageBox"; // Import the MessageBox component

function ConversationList(props) {
  const { contacts } = props; // Destructure the "contacts" prop from the component's props
  const { id } = useParams(); // Get the "id" parameter from the route using useParams
  const userId = parseInt(id); // Parse the "id" parameter to an integer
  const user = contacts.find((contact) => contact.id === userId); // Find the contact with a matching ID

  return <>{user && <MessageBox user={user} />}</>;
}

export default ConversationList; // Export the ConversationList component 
