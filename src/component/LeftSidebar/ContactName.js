import React from "react"; 

// ContactName component for displaying a contact's name
function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}

// Inline styles for the paragraph element
const styles = {
  contactText: {
    fontSize: "16px",      
    color: "#000",         
    marginBottom: "3px",  
  },
};

export default ContactName; // Export the ContactName component 
