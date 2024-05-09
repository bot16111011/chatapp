import React from "react"; 
import ContactAvatar from "./ContactAvatar"; // Import the ContactAvatar component
import ContactLastMessage from "./ContactLastMessage"; // Import the ContactLastMessage component
import ContactName from "./ContactName"; // Import the ContactName component
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

function ContactTab(props) {
  // Destructure contact data from props
  const { image, name, chatlog, id } = props.contact;

  // Determine the length of the chatlog
  let length = chatlog.length;

  // Define a default message when there are no messages
  const noMessage = {
    text: " 0 message Conversation not initiated",
  };

  // Render a link to the conversation with the contact
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="contact-tab">
        <div>
          <ContactAvatar image={image} /> {/* Render the ContactAvatar component with the image prop */}
        </div>

        <div style={{ marginLeft: "16px" }}>
          <ContactName name={name} /> {/* Render the ContactName component with the name prop */}

          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage} // Render the ContactLastMessage component with the last message in the chatlog or a default message if there are no messages
          />
        </div>
      </div>
    </Link>
  );
}

export default ContactTab; // Export the ContactTab component 
