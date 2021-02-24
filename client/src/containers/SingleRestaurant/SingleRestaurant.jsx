import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleRestaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <h1>{restaurant.name}</h1>
        </div>
        <div className="col s6">
          <img
            src={restaurant.featuredImageUrl}
            alt={restaurant.name}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p>{restaurant.address}</p>
          <p>{restaurant.phone}</p>
          <p>{restaurant.cuisine}</p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">TODO: ADD MENU ITEMS HERE.</div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
