import React from 'react';

const SearchBar = props => (
  <form onSubmit={props.handleClick}>
    <input
      type="text"
      name="search"
      onChange={props.handleChange}
    />
    <input type="submit" value="Search" />
  </form>
);

export default SearchBar;