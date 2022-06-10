const express = require("express");
const router = express.Router();
const knex = require("../database");

//1.returns all reservations
router.get("/", async (request, response) => {
  try {
    await knex("Reservation")
      .select(
        "meal_id",
        "number_of_guests",
        "contact_phonenumber",
        "contact_name",
        "contact_email",
        "created_date"
      )
      .then((data) => response.json(data));
  } catch (error) {
    response.status(404).send("Reservation not found").end();
    console.log(error);
  }
});

// 2.	Adds a new reservation
router.post("/", async (request, response) => {
  try {
    // to insert data
    await knex("Reservation")
      .insert({
        id: request.body.id,
        created_date: request.body.date,
        number_of_guests: request.body.guests,
        contact_phonenumber: request.body.phone,
        contact_name: request.body.name,
        meal_id: request.body.mealid,
      })
      .then(() => response.send("New reservation created "));
  } catch (error) {
    response.status(404).send("Invalid reservation").end();
    console.log(error);
  }
});

//3.Returns reservation by id
router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("Reservation")
      .select(
        "meal_id",
        "number_of_guests",
        "contact_phonenumber",
        "contact_name",
        "contact_email",
        "created_date"
      )
      .where({ id: request.params.id });
    response.json(titles);
  } catch (error) {
    response.status(404).send("Invalid reservation id").end();
    console.log(error);
  }
});

//4.Updates the reservation by id
router.put("/:id", async (request, response) => {
  try {
    await knex("Reservation")
      .where({ id: request.params.id })
      .update({ number_of_guests: request.body.guests }, [
        "id",
        request.params.id,
      ]);
  } catch (error) {
    response.status(404).send("Invalid id").end();
    console.log(error);
  }
});

// 5. Deletes the reservation by id
router.delete("/:id", async (request, response) => {
  try {
    await knex("Reservation")
      .where({ id: request.params.id })
      .del()
      .then((data) => response.send("Reservation deleted"));
  } catch (error) {
    response.status(404).send("Invalid request").end();
    console.log(error);
  }
});

module.exports = router;