import React from "react"; 
import profileImage from '../../images/Arvind.jpg';

function RightChatBubble({ message, name, image }) {
  return (
    <>
      <div className="message-bubble mbr">
        <img src={image} style={styles.avatar} alt={profileImage} />{" "}
        {/* Display the sender's avatar image with the specified style */}
        <div className="right-bubble ">
          <div className="text-message">
            <p className="name">{name}</p> {/* Display the sender's name */}
            <p className="message">{message.text}</p> {/* Display the message text */}
            <span className="message-timestamp">{message.timestamp}</span> {/* Display the message timestamp */}
          </div>
          <div className="bubble-arrow bubble-arrow-alt"></div> {/* Display a chat bubble arrow for styling (right-aligned) */}
        </div>
      </div>
    </>
  );
}

// Inline styles for the sender's avatar image
const styles = {
  avatar: {
    width: "49px", 
    height: "49px", 
    borderRadius: "50%", 
    margin: "0 10px", 
  },
};

export default RightChatBubble; // Export the RightChatBubble component
