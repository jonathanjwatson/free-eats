import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get("/api/restaurants")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/restaurants/${selectedRestaurant}/menuItems`, { name, price })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Link to="/restaurants/new" className="waves-effect waves-light btn">
            Add new restaurant
          </Link>
        </div>
      </div>
      {/* SHOW ONLY MY RESTAURANTS */}
      {restaurants.map((restaurant) => (
        <p key={restaurant._id}>{restaurant.name}</p>
      ))}
      <div className="row">
        <div className="col s12">
          <h1>Add Menu Item to Restaurant</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col s12">
                <label>Select Restaurant</label>
                <select
                  className="browser-default"
                  onChange={(e) => setSelectedRestaurant(e.target.value)}
                >
                  <option value="" disabled defaultValue>
                    Choose your option
                  </option>
                  {restaurants.map((restaurant) => (
                    <option value={restaurant._id} key={restaurant._id}>
                      {restaurant.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="name"
                  type="text"
                  className="validate"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Menu Item Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="price"
                  type="text"
                  className="validate"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label htmlFor="price">Menu Item Price</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button className="waves-effect waves-light btn">
                  Add Menu Item
                </button>
              </div>
            </div>
          </form>
          {/* FORM TO ADD MENU ITEM */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
