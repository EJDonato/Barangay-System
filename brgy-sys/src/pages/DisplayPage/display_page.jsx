import React, { useState } from "react";

import "./display_page.css";
import reactLogo from "../../assets/react.svg";

import SearchBar from "../../components/SearchBar/search_bar";
import Button from "../../components/Button/button";

function DisplayPage() {
  return (
    <div className="container">
      <SearchBar />
      <Button />

      <div className="info">
        <div className="profile">
          <img src={reactLogo} alt="" />
          <div className="profile-texts">
            <p className="name">
              <strong>Name: </strong>Elton James Donato
            </p>
            <p className="age">
              <strong>Age: </strong>19 y.o.
            </p>
            <p className="gender">
              <strong>Gender: </strong>Male
            </p>
            <p className="address">
              <strong>Address: </strong>Lambakin, Marilao, Bulacan
            </p>
          </div>
        </div>
        <div className="cases">
          <p>Cases</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayPage;
