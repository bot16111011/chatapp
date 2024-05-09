import React from "react";

// ContactLastMessage component for displaying the last message in a chat log
function ContactLastMessage(props) {
  return (
    <div className="contactText">
      {/* Render the last message text from the chat log data provided as a prop */}
      <p>{props.chatlog.text}</p>
    </div>
  );
}

export default ContactLastMessage; // Export the ContactLastMessage component
