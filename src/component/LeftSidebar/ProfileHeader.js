import React from "react"; 

// ProfileHeader component for displaying the user's profile information
function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
        {/* Display the user's profile picture with the specified image source (URL) */}
        <img className="avatar" src={user.image} alt="profile-pic" />
        {/* Display the user's name */}
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader; // Export the ProfileHeader component
