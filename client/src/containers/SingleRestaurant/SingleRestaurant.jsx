import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleRestaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/restaurants/${id}/menuItems`)
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
          <p>{restaurant.city}</p>
          <p>{restaurant.state}</p>
          <p>{restaurant.zip}</p>
          <p>{restaurant.phone}</p>
          <p>{restaurant.cuisine}</p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          {restaurant?.menuItems?.map((item) => (
            <p key={item._id}>
              {item.name} - ${item.price}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
