import React from "react";

const SearchBar = props => (
  <form onSubmit={props.onSubmit}>
    <input type="text" name="search" onChange={props.onChange} />
    <input type="submit" value="Search" />
  </form>
);

export default SearchBar;
