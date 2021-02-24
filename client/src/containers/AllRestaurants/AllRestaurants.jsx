import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllRestaurants = () => {
  // 1. Hard code
  // 2. Abstract into variables (state or props)
  // 3. Dynamically get the data
  const [restaurants, setRestaurants] = useState([]);

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

  return (
    <div className="container">
      <div className="row">
        {restaurants.map((restaurant) => (
          <div className="col s4" key={restaurant._id}>
            <div className="row">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={restaurant.featuredImageUrl}
                      alt={restaurant.name}
                    />
                    <span className="card-title">{restaurant.name}</span>
                  </div>
                  <div className="card-content">
                    <p>{restaurant.address}</p>
                    <p>{restaurant.phone}</p>
                    <p>{restaurant.cuisine}</p>
                  </div>
                  <div className="card-action">
                    <Link to={`/restaurants/${restaurant._id}`}>Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;
