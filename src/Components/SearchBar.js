import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by artist"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="form-control mb-4"
    />
  );
};

export default SearchBar;