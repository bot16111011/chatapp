import React from "react"; 

function NewConversation(props) {
  //click event handler for the "New Conversation" button
  let handleClick = () => {
    props.showNewConvoTab(true); // Call the function passed in as a prop to show the new conversation tab
  };

  return (
    <div className="new-convo">
      <p>New Conversation</p> {/* Display text "New Conversation" */}
      <span onClick={handleClick}>
        <i className="fa fa-plus"></i> {/* Display a plus icon that triggers the handleClick function on click */}
      </span>
    </div>
  );
}

export default NewConversation; // Export the NewConversation component
