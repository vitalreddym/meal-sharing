import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import TestComponent from ".components/TestComponent/TestComponent";
import { AddMeal } from "./components/AddMeal";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import MealDisplay from "./components/MealDisplay";
import GiveReview from "./components/GiveReview";
import { Reservation } from "./components/Reservation";
import { Review } from "./components/Review";
import ViewReservation from "./components/ViewReservation";
import { ContactUs } from "./components/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <style>{"body { background-image: url(https://i.ibb.co/pQ59KnL/ban4.jpg); }"}</style>
      <Router>
        <Navbar></Navbar>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/meal-display">
          <MealDisplay></MealDisplay>
        </Route>
        <Route exact path="/add-meal">
          <AddMeal></AddMeal>
        </Route>
        <Route exact path="/reservation">
          <ViewReservation></ViewReservation>
        </Route>
        <Route exact path="/give-reviews">
          <GiveReview></GiveReview>
        </Route>
        <Route exact path="/meal-display/:id">
          <Reservation></Reservation>
        </Route>
        <Route exact path="/give-reviews/:id">
          <Review></Review>
        </Route>
        <Route exact path="/contactus">
          <ContactUs></ContactUs>
        </Route>
      </Router>
    </div>
  );
}

export default App;