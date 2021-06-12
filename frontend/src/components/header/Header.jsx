import React, { useState } from "react";
import company_logo from "../../resources/icons/company_logo.png";
import cart_logo from "../../resources/icons/cart_logo.png";
import user_logo from "../../resources/icons/user_logo.png";
import menu_logo from "../../resources/icons/menu_logo.png";
import "./header.css";
import SearchBox from "./SearchBox";
import SubHeader from "./SubHeader";
import SideBar from "./SideBar";
import { openSideBar, closeSideBar } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const navState = useSelector((state) => state.changeSideBarState)
  const dispatch = useDispatch();

  const handleSideBar = () => {
    if (navState) {
      dispatch(closeSideBar())
    } else {
      dispatch(openSideBar())
    }
  };

  return (
    <div style={{position:"sticky",top:0,background:"white",zIndex:100}}>
      <div className={"container"} >
        <div className={"company_logo"}>
          <img src={company_logo} alt="company logo"></img>
        </div>
        <div className={"menu_icon"} onClick={handleSideBar}>
          <img src={menu_logo} alt="company logo"></img>
        </div>
        <div className={"search_box_container"}>
          <SearchBox />
          <div className={"menu_items"}>
            <img src={cart_logo} alt={"cart"} />
            <img src={user_logo} alt={"cart"} />
          </div>
        </div>
      </div>
      <SubHeader />
      <SideBar />
    </div>
  );
};

export default Header;
