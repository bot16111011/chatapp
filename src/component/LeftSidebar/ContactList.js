import React from "react"; 
import ContactTab from "./ContactTab"; // Import the ContactTab component

function ContactList({ contacts }) {
  // Render a list of contacts using the ContactTab component
  return (
    <>
      <div style={styles.contactList} className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}

// Inline styles for the wrapping div element
const styles = {
  contactList: {
    overflowY: "scroll", 
    height: "80vh",      
    zIndex: "2",         
    backgroundColor: "black", 
  },
};

export default ContactList; // Export the ContactList component
