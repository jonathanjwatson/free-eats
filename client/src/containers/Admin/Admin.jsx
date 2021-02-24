import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/restaurants")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteClick = (id) => {
    axios
      .delete(`/api/restaurants/${id}`)
      .then((response) => {
        console.log(response.data);
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/restaurants/${selectedRestaurant}/menuItems`, { name, price })
      .then((response) => {
        console.log(response.data);
        setName("");
        setPrice("");
        setSelectedRestaurant(null);
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Link
            to="/admin/restaurants/new"
            className="waves-effect waves-light btn"
          >
            Add new restaurant
          </Link>
        </div>
      </div>
      {/* SHOW ONLY MY RESTAURANTS */}
      {restaurants.map((restaurant) => (
        <div className="row" key={restaurant._id}>
          <div className="col s12">
            <h3>{restaurant.name}</h3>
            <Link
              to={`/admin/restaurants/${restaurant._id}/edit`}
              className="waves-effect waves-light btn"
            >
              Edit
            </Link>
            <button
              className="waves-effect waves-light btn"
              onClick={() => {
                handleDeleteClick(restaurant._id);
              }}
            >
              DELETE
            </button>
            {restaurant.menuItems.map((item) => (
              <p key={item._id}>
                {item.name} - ${item.price}
              </p>
            ))}
          </div>
        </div>
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
                  <option value="" defaultValue>
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
