import React from "react";

function LeftChatBubble({ message, name, image }) {
  return (
    <>
      <div className="message-bubble mbl">
        {/* Display the sender's avatar image with the specified style */}
        <img src={image} style={styles.avatar} alt="../../images/profile.svg" />{" "}
        <div className="left-bubble ">
          <div className="text-message">
            <p className="name">{name}</p> {/* Display the sender's name */}
            <p className="message">{message.text}</p> {/* Display the message text */}
            <span className="message-timestamp">{message.timestamp}</span> {/* Display the message timestamp */}
          </div>
          <div className="bubble-arrow "></div> {/* Display a chat bubble arrow for styling */}
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
    margin: "0 15px", 
  },
};

export default LeftChatBubble; // Export the LeftChatBubble component 
