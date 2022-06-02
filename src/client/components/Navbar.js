import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./../assets/images/logo.png";
import AutoComplete from "./AutoComplete";
import { autoCompleteData } from "./Data";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand bg-primary fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#Navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={logo} alt=" MealSharingApp" width="10%" style={{ borderRadius: "30px" }} />&nbsp;
            <em>MealSharingApp</em></a>  
          <AutoComplete data={autoCompleteData} />
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="./home">
                  <span className="fa fa-info"></span>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./meal-display">
                  <span className="fa fa-info fa-lg"></span>Meal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="add-meal">
                  <span className="fa fa-address-card fa-lg"></span>AddMeal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="reservation">
                  <span className="fa fa-address-card fa-lg"></span>
                  TotalReservations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="give-reviews">
                  <span className="fa fa-address-card fa-lg"></span>GiveReview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contactUs">
                  <span className="fa fa-address-card fa-lg"></span>ContactUs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}