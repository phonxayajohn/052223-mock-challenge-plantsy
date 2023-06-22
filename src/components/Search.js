import React from "react";

function Search({ setSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)} // on change, run setSearchTerm function with the e.target.value (or the form's input)
      />
    </div>
  );
}

export default Search;
