import React from "react"; // Import React

import "../stylesheets/rightSidebar.css"; // Import styles for the right sidebar

function NoConvo() {
  return (
    <div className="no-chat-background"> {/* Render a div with a specific class for styling */}
      <h2 style={{ margin: "5rem" }}>Welcome to the Chat App !!!</h2> {/* Display a welcome message with styling */}
    </div>
  );
}

export default NoConvo; // Export the NoConvo component
