const express = require("express");
const router = express.Router();
const knex = require("../database");

//1.Returns all reviews
router.get("/", async (request, response) => {
  try {
    await knex("Review")
      .select("meal_id", "stars", "title", "description", "created_date")
      .then((data) => response.json(data));
  } catch (error) {
    response.status(404).send("Reviews not found").end();
    console.log(error);
  }
});

// 2.	Adds a new review
router.post("/", async (request, response) => {
  try {
    // to insert data
    await knex("Review")
      .insert({
        id: request.body.id,
        title: request.body.title,
        description: request.body.description,
        stars: request.body.stars,
        created_date: request.body.date,
        meal_id: request.body.mealid,
      })
      .then(() => response.send("New review added"));
  } catch (error) {
    response.status(404).send("Review not successful, please try again").end();
    console.log(error);
  }
});

//3.Returns review by id
router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("Review")
      .select("meal_id", "stars", "title", "description", "created_date")
      .where({ id: request.params.id });
    response.json(titles);
  } catch (error) {
    response.status(404).send("Invalid review id").end();
    console.log(error);
  }
});

//4.Updates the review by id
router.put("/:id", async (request, response) => {
  try {
    await knex("Review")
      .where({ id: request.params.id })
      .update({ stars: request.body.stars }, ["id", request.params.id]);
  } catch (error) {
    response.status(404).send("Review not updated").end();
    console.log(error);
  }
});

// 5. Deletes the review by id
router.delete("/:id", async (request, response) => {
  try {
    await knex("Review")
      .where({ id: request.params.id })
      .del()
      .then((data) => response.send("Review is deleted"));
  } catch (error) {
    response.status(404).send("Please try again").end();
    console.log(error);
  }
});

module.exports = router;