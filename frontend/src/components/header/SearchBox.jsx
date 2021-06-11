import React, { useEffect, useState } from "react";
import search_logo from "../../resources/icons/search_logo.png";

const SearchBox = () => {
  

  return (
    <>
      <div className={"search_box"}>
        <input
          style={{
            flexGrow: 1,
            outline: "none",
            border: "none",
            fontFamily: "Montserrat",
          }}
          placeholder={"Search for products, brands and more"}
        ></input>
        <img src={search_logo} alt="search logo" />
      </div>
    </>
  );
};

export default SearchBox;
