import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Reservation() {
  const { id } = useParams();
  const [guest, setGuest] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [filterMeal, setFilterMeal] = useState({});
  console.log(filterMeal);

  useEffect(() => {
    fetch("/api/meals/ + id")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setFilterMeal(result);
      })
  }, [])

  function onSubmit() {
    async function fetchReservation() {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number_of_guests: guest,
          meal_id: id,
          contact_email: email,
          contact_name: name,
          contact_phonenumber: mobile,
        }),
      });
      return (response);
    } 
    if (guest!== "") {
      alert("Reservation successful");
    } else {
    alert("Reservation not successful");
    }

    const reserv = fetchReservation();
    console.log(reserv);
  }

  return (
    <div className="mealName">
      <div className="col-12 col-md-9">
        <form>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">No Of Guests:</label>
            <div className="col-md-10">
              <input
                type="number"
                value={guest} required
                onChange={(e) => setGuest(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Name:</label>
            <div className="col-md-5">
              <input
                type="text"
                value={name} required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Phone No:</label>
            <div className="col-md-5">
              <input
                type="number"
                value={mobile} required
                onChange={(e) => setMobile(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-10">
              <label className="col-md-3 col-form-label">Email:</label>
              <input
                type="email"
                value={email} required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <button className="col-md-4" onClick={onSubmit} >
            Reserve
          </button>
          <h1>{filterMeal.title}</h1>
        </form>
      </div>
    </div> 
  );
}