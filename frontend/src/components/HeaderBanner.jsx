import React from "react";

const HeaderBanner = ({ text1, text2 }) => {
  return (
    <div className="h-banner">
      <h1>{text1}</h1>
      <p>{text2}</p>
    </div>
  );
};

export default HeaderBanner;
