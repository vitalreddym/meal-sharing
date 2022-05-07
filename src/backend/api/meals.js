const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    let maxPrice = request.query.maxPrice;
    let availableReservations = request.query.availableReservations;
    let title = request.query.title;
    let createdAfter = request.query.createdAfter;
    let limit = request.query.limit;
    let limitMaxPrice = maxPrice + limit;

    if (maxPrice) {
      const totalMaxPrice = await knex("Meal").where("price", "<=",maxPrice);
      response.json(totalMaxPrice);

    } else if (availableReservations) {
      //7.Get meals that still has available reservations
    
      await knex("Meal")
        .select(
          "Meal.id",
          "Meal.title",
          "Meal.max_reservations",
          knex.raw("sum(number_of_guests)")
        )
        .innerJoin("Reservation", "Meal.id", "Reservation.meal_id")
        .groupBy("Meal.id")
        .having("Meal.max_reservations", ">", "sum(number_of_guests)")
        .then((data) => response.json(data));

    } else if (title) {
      const allTitles = await knex("Meal").where("title", "like", title);
      response.json(allTitles);

    } else if (createdAfter) {
      const dateCreatedAfter = await knex("Meal").where("created_date",">",createdAfter);
      response.json(dateCreatedAfter);

    } else if (request.query.limit) {
      const rLimit = await knex("Meal").limit(request.query.limit);
      response.json(rLimit);

    } else if (limitMaxPrice) {
      const rMaxPrice = await knex("Meal").where("price", ">=", maxPrice);
      const rLimit = await knex("Meal").where("max_reservations", "=", limit);
      const resultLimitMaxPrice = rMaxPrice + rLimit;
      response.json(resultLimitMaxPrice);
    } else {
      const meals = await knex("Meal");
      response.json(meals);
    }
  } catch (error) {
    throw error;
  }
});

 // Adds a new meal
router.post("/", async (request, response) => {
  try {
  const newMeal = request.body;
  const addsaNewMeal = await knex("Meal").insert(newMeal)
  response.json(addsaNewMeal)
  } catch (error) {
    response.status(404).send("Invalid request").end();
    console.log(error);
  }
});

// Returns a meal by id
router.get("/:id", async (request, response) => {
  try {
  const id = request.params.id
  const returnsMealById = await knex("Meal").where({ id: id });
  response.json(returnsMealById);
  } catch (error) {
    response.status(404).send("Invalid request").end();
    console.log(error);
  }
});

// Updates a meal by id
router.put("/:id", async (request, response) => {
  try {
  const id = request.params.id
  const uId = request.body
  const updatesTheMealById = await knex("Meal").where({ id: id }).update(uId);
  response.json(updatesTheMealById);
  } catch (error) {
    response.status(404).send("Invalid request").end();
    console.log(error);
  }
});

// Deletes a meal by id
router.delete("/:id", async (request, response) => {
  try {
  const id = request.params.id
  const dId = request.body
  const deletesTheMealById = await knex("Meal").where({ id: id }).del(dId);
  response.json(deletesTheMealById);
  } catch (error) {
    response.status(404).send("Invalid request").end();
    console.log(error);
  }
});

module.exports = router;