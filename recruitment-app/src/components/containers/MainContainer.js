import React, { useState, useEffect } from "react";
import Logo from "../views/Logo";
import { Link } from "react-router-dom";
import { APP } from "../../constants/index";
import Start from "../views/Start";

const MainContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <Start />
    </div>
  );
};

export default MainContainer;
