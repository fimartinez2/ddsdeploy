import React from "react";

const Logo = (props) => {
  const logoUrl = "/logo.png";
  const logoStyle = {
    height: props.size == "inherit" ? props.size : `${props.size}px`,
    width: props.size == "inherit" ? props.size : `${props.size}px`,
    borderRadius: props.shape == "circle" ? "50%" : "",
    backgroundColor: props.color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <>
      <div className="outline" style={logoStyle} onClick={props.onClick}>
        <img
          src={logoUrl}
          alt="logo"
          className="imagen"
          style={{
            height: `${props.size / 1.3}px`,
            width: `${props.size / 1.3}px`,
          }}
        />
      </div>
    </>
  );
};

Logo.defaultProps = {
  color: "",
  size: "inherit",
  shape: "circle",
};

export default Logo;
