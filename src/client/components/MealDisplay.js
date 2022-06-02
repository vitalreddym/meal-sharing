import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import foodmenu from "./../assets/images/foodmenu.png";

export default function MealDisplay() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetch("/api/meals").then((res) => res.json());
      console.log(result);
      setMeal(result);
    })();
  }, []);

  return (
    <>
      <div className="mealName">
        <p className="text"> For Reservation: Click on Meal </p>
        {meal?.map((item) => (
            <NavLink key={item.index} to={"/meal-display/" + item.index}>
              <div className="meal-list">
                {item.title} ********** {item.price}  dkk
                <img src={foodmenu} alt="foodmenu" />
              </div>
            </NavLink>
        ))}
      </div>
    </>
  );
}