import React from "react";

const PopUp = (props) => {
  return (
    <div className="popup">
      <div className="popup__box">
        <div className="popup__close">
          <span onClick={props.handleClose}>+</span>
        </div>
        {props.content}
      </div>
    </div>
  );
};

export default PopUp;
