import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../../actions/index";
import cross_logo from "../../resources/icons/cross_logo.png";
import company_logo from "../../resources/icons/company_logo.png";

const SideBar = () => {
  const state = useSelector((state) => state.changeSideBarState);
  const dispatch = useDispatch();

  let width = 350;
  if (!state) {
    document.body.style.position = "";
    document.body.style.top = "";
    width = 0;
  } else {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  }

  return (
    <div className={"sidebar_container"}>
      <div className={"sidebar"} style={{ width: width }}></div>
      <div
        className={"sidebar_close_section"}
        style={{ display: state ? "inline-block" : "none" }}
        onClick={() => dispatch(closeSideBar())}
      >
        <img src={cross_logo} alt={"close"} />
      </div>
    </div>
  );
};

export default SideBar;
