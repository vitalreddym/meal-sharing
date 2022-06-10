import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <p className="text"> For Reservation: Click on Meal: </p><br />
        {meal?.map((item) => (
            <Link key={item.id} to={`/meal-display/${item.id}`}>
              <div className="meal-list">
               {item.title} -------- {item.price} 99 kr.
                <img src={foodmenu} alt="foodmenu" />
              </div>
            </Link>
        ))}
      </div>
    </>
  );
}