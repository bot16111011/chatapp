import React from "react"; 

// SearchBar component for rendering a search input field
function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input} 
        className="mb-3"
        placeholder="search name" 
        onChange={searchChange} // Call the function passed as a prop when the input value changes
      ></input>
    </>
  );
}

// Inline styles for the input element
const styles = {
  input: {
    borderRadius: "18px", 
    width: "100%", 
    backgroundColor: "#fff", 
    outline: "none", 
    margin: "auto", 
    padding: "5px", 
    border: "1px solid #cccccc", 
  },
};

export default SearchBar; // Export the SearchBar component
