import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../all.css";
import Navbar from "../components/navbar";
import Fetchtool from "../components/fetchtool";

const Tools = () => {

  return (
    <>
      <Navbar />
      <div className="parent-container">
        <div className="add-tool-box">
          <h2>Wanna Add a tool?</h2><br />
          <p></p>
          <NavLink to="/tools/add"><button>Add tool</button></NavLink>
        </div>
        <Fetchtool/>
      </div>
    </>
  );
};

export default Tools;
