import React from "react";
import menu from "./../assets/images/menu.png";

export default function Home() {
  return (  
    <>
    <div className="mealName">
      <img src={menu} alt="foodmenu" />
      <p>Welcome to Meal-Sharing App</p>
      <p><b>Taste the delicious indian food.</b> &nbsp;
        Spicy, rich, flavourful and diverse are terms that are frequently used to
        describe Indian food. All these words are apt in describing Indian cuisine
        for it is diverse in variety and taste, and is made up from a wide array of
        regional cuisines throughout various parts of India. Differences can be
        discerned in the consistency of the curries prepared in North and South India.
        The curries prepared in the South are soupier relative to the thicker, richer
        curries found in the North.</p>
    </div><div className="footer">
        <footer>
          <p>All rights reserved 2022 @ Vital R Mynampati  HYF - Aarhus - Denmark</p>
        </footer>
      </div></>
  );
}
