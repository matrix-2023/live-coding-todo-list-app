import React from "react";

const Header = () => {
  const headerStyle = {
    paddingBottom: "20px",
    lineHeight: "2em",
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "25px",
          marginBottom: "15px",
          textAlign: "center",
          color: "#724260",
        }}
      >
        Simple Todo App
      </h1>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field:
      </p>
    </header>
  );
};

export default Header;
