import React from "react"; 
import ContactTab from "./ContactTab"; // Import the ContactTab component

function NewConversationTab({ contacts, showNewConvoTab }) {
  //click event handler to close the new conversation tab
  let handleClose = () => {
    showNewConvoTab(false); // Call the function passed as a prop to close the new conversation tab
  };

  return (
    <>
      <div className="new-convo-tab">
        <div className="nct-header">
          <p>Select Contact</p> {/* Display text "Select Contact" in the tab header */}
          <span onClick={handleClose}>
            <i className="fa fa-2x fa-times-circle"></i> {/* Display a close icon that triggers the handleClose function on click */}
          </span>
        </div>
        <div className="nct-list" onClick={handleClose}>
          {/* Render a list of contacts using the ContactTab component */}
          {contacts.map((contact, index) => (
            <ContactTab contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewConversationTab; // Export the NewConversationTab component 
