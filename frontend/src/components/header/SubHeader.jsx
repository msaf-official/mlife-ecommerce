import React from "react";
import drop_down from "../../resources/icons/drop_down.png";

const SubHeader = () => {


  return (
    <>
      <div className={"sub_header"}>
        <div className={"item"}>
          <span>Grocery </span>
          <img src={drop_down} />
        </div>
        <div className={"item"}>
          <span>Men's Fashion </span>
          <img src={drop_down} />
        </div>
        <div className={"item"}>
          <span>Womens's Fashion </span>
          <img src={drop_down} />
        </div>
      </div>
    </>
  );
};

export default SubHeader;
