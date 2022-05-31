import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        className="buscar"
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  placeholder: "Buscar",
  onChange: null,
};

export default SearchBar;
