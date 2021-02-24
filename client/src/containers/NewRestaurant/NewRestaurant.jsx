import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import RestaurantForm from "../../components/RestaurantForm/RestaurantForm";

const NewRestaurant = () => {
  const history = useHistory();

  const handleFormSubmit = (e, formObject) => {
    e.preventDefault();
    axios
      .post("/api/restaurants", formObject)
      .then((response) => {
        console.log(response.data);
        history.push(`/restaurants/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <RestaurantForm
          handleFormSubmit={handleFormSubmit}
          buttonText="Create"
        />
      </div>
    </div>
  );
};

export default NewRestaurant;
