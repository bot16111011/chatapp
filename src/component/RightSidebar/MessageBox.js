import React, { useEffect, useState } from "react"; 

import LeftChatBubble from "./LeftChatBubble"; // Import the LeftChatBubble component
import { useDispatch } from "react-redux"; // Import the useDispatch hook from React Redux
import RightChatBubble from "./RightChatBubble"; // Import the RightChatBubble component
import MessageInput from "./MessageInput"; // Import the MessageInput component
import { addNewMessage } from "../../action/contact"; // Import the addNewMessage action creator
import ProfileHeader from "../LeftSidebar/ProfileHeader"; // Import the ProfileHeader component
import profileImage from '../../images/profile.svg';
import profileImage1 from '../../images/Arvind.jpg';
function MessageBox(props) {
  const [chat, setChat] = useState([]); // Define state for chat messages
  const [length, setLength] = useState(); // Define state for message length
  const dispatch = useDispatch(); // Get the dispatch function from React Redux

  // Use the useEffect hook to set chat data and message length when props change
  useEffect(() => {
    setChat(props.user.chatlog); // Set chat messages from user prop
    setLength(props.user.chatlog.length); // Set message length from user prop
  }, [props]);

  var time;
  var hours;
  var minutes;

  // Define a function to get the current time and format it
  function currentTime() {
    var currentDate = new Date();
    hours = currentDate.getHours();
    hours = hours % 12 || 12;
    hours = appendZero(hours);

    minutes = appendZero(currentDate.getMinutes());
    var seconds = appendZero(currentDate.getSeconds());
    const am = "AM";
    const pm = "PM";
    const timeZone = hours <= 12 ? am : pm;

    time = `${hours}:${minutes}:${seconds} ${timeZone}`;
  }

  // Define a function to append a zero to single-digit times
  function appendZero(time) {
    if (time < 10 && time.toString().length !== 2) {
      return "0" + time;
    }
    return time;
  }

  // Set the current time interval to update the time
  setInterval(currentTime, 1000);

  // Define a function to update chat messages and length
  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: time,
      sender: "me",
      message_id: length + 1,
    };

    dispatch(addNewMessage(object, props.user.id)); // Dispatch the addNewMessage action
    setLength(object.message_id); // Update message length
    setChat([...chat, object]); // Update chat messages
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} /> {/* Render the ProfileHeader component */}
        </div>
        {chat.length === 0 && (
          <p className="no-message-alert">NO MESSAGES FOUND</p> // Display a message when there are no messages
        )}
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"Rajarshi Verma"}
                  image={profileImage}
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        )}

        <MessageInput newMessageHandler={updateMesssages} user={props.user} /> {/* Render the MessageInput component */}
      </div>
    </>
  );
}

export default MessageBox; // Export the MessageBox component
