// export default ContactAvatar; // Export the ContactAvatar component
import React from "react";
import profileImage from '../../images/profile.svg';

// ContactAvatar component that displays a contact's avatar image
function ContactAvatar({ image }) {
  return (
    <div>
      {/* Display the contact's avatar image with a specified source (URL) */}
      <img src={image} alt={profileImage} className="avatar" />
    </div>
  );
}

export default ContactAvatar; // Export the ContactAvatar component
