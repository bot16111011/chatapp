import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import user data and Redux action
import { data } from "./Data/users";
import { updateContacts } from "./action/contact";

// Import CSS files for styling
import "./component/stylesheets/App.css";
import "./component/stylesheets/leftSidebar.css";

// Import various components
import SearchBar from "./component/LeftSidebar/SearchBar";
import 'font-awesome/css/font-awesome.min.css'; // Import font-awesome styles
import ContactList from "./component/LeftSidebar/ContactList";
import ConversationList from "./component/RightSidebar/ConversationList";
import NoConvo from "./component/RightSidebar/NoConvo";
import ProfileHeader from "./component/LeftSidebar/ProfileHeader";
import NewConversation from "./component/LeftSidebar/NewConversation";
import NewConversationTab from "./component/LeftSidebar/NewConversationTab";

function App() {
  // State variables
  const [contacts, setContacts] = useState([]); // Initialize state for contacts
  const [searchfield, setSearchField] = useState(""); // Initialize state for search input
  const [newConvoTab, showNewConvoTab] = useState(false); // Initialize state for a new conversation tab

  // Redux state and actions
  const user = useSelector((state) => state.user); // Get user data from Redux state
  const stateContacts = useSelector((state) => state.contacts); // Get contacts data from Redux state
  const dispatch = useDispatch(); // Create a Redux dispatch function

  // Use effect to update contacts when the component mounts or stateContacts change
  useEffect(() => {
    // Dispatch an action to update contacts from the user data
    dispatch(updateContacts(data.profile.contacts));
    // Set the contacts in the component's state
    setContacts(stateContacts.contacts);
  }, [dispatch, stateContacts.contacts]);

  // Function to handle changes in the search input
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  // Filter contacts based on the search input
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <>
      <Container fluid>
        <Row>
          {/* Left Sidebar */}
          <Col className="left-sidebar" xs={6} sm={5} md={4} lg={5} xl={4}>
            <Row className="left-sidebar-header">
              <Row className="d-flex align-items-center">
                <Col>
                  {/* Profile Header component */}
                  <ProfileHeader user={user} />
                </Col>
                <Col>
                  {/* New Conversation button */}
                  <NewConversation showNewConvoTab={showNewConvoTab} />
                </Col>
              </Row>
              <Row style={{ margin: "auto", paddingTop: "px" }}>
                {/* SearchBar component for searching contacts */}
                <SearchBar searchChange={onSearchChange} />
              </Row>
            </Row>
            <Row>
              {/* ContactList component to display filtered contacts */}
              <ContactList contacts={filteredContacts} />
            </Row>
          </Col>

          {/* Right Sidebar */}
          <Col className="right-sidebar" xs={6} sm={7} md={8} lg={7} xl={8}>
            <Routes>
              <Route
                path="/conversations/:id"
                element={<ConversationList contacts={contacts} />}
              />
              <Route index element={<NoConvo />} />
            </Routes>
            {newConvoTab && (
              <NewConversationTab
                contacts={contacts}
                showNewConvoTab={showNewConvoTab}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
