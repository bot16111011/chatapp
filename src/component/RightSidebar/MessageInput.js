import React, { useEffect, useState } from "react"; 
import { Row, Col } from "react-bootstrap"; // Import Row and Col components from react-bootstrap

function MessageInput(props) {
  const { newMessageHandler } = props; // Destructure the newMessageHandler function from props
  const [message, setMessage] = useState(""); // Define state for the message input

  useEffect(() => {
    // Reset the input value when the contact component changes
    setMessage("");
  }, [setMessage, props]);

  // function to handle input change
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value); // Update the message state with the input value
  };

  // function to handle form submission
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message); // Call the newMessageHandler function with the message
    } else {
      alert("Type some message text before submitting"); // Display an alert if no message text is provided
    }
    setMessage(""); // Clear the message input field
    
  };

  return (
    <>
      <Row className="message-input">
        <Col xs={5} lg={5}>
          <input
            type="text"
            placeholder="Send message"
            value={message}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={3} lg={4}>
          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput; // Export the MessageInput component 
