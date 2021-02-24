import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RestaurantForm = (props) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/restaurants/${id}`)
        .then((response) => {
          console.log(response.data);
          setName(response.data.name);
          setAddress(response.data.address);
          setCity(response.data.city);
          setState(response.data.state);
          setZip(response.data.zip);
          setPhone(response.data.phone);
          setCuisine(response.data.cuisine);
          setFeaturedImageUrl(response.data.featuredImageUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <form
      className="col s12"
      onSubmit={(e) => {
        props.handleFormSubmit(e, {
          name,
          address,
          city,
          state,
          zip,
          phone,
          cuisine,
          featuredImageUrl,
        });
      }}
    >
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            type="text"
            className="validate"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name">Restaurant Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="address"
            type="text"
            className="validate"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="address">Street Address</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s4">
          <input
            id="city"
            type="text"
            className="validate"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="city">City</label>
        </div>
        {/* TODO: Convert this to dropdown.  */}
        <div className="input-field col s4">
          <input
            id="state"
            type="text"
            className="validate"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <label htmlFor="state">State</label>
        </div>
        <div className="input-field col s4">
          <input
            id="zip"
            type="text"
            className="validate"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <label htmlFor="zip">Zip</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="phone"
            type="text"
            className="validate"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="cuisine"
            type="text"
            className="validate"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
          <label htmlFor="cuisine">Cuisine</label>
        </div>
      </div>
      {/* TODO: Convert this to image uploader */}
      <div className="row">
        <div className="input-field col s12">
          <input
            id="featuredImageUrl"
            type="text"
            className="validate"
            value={featuredImageUrl}
            onChange={(e) => setFeaturedImageUrl(e.target.value)}
          />
          <label htmlFor="featuredImageUrl">Featured Image</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <button className="waves-effect waves-light btn">
            {props.buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default RestaurantForm;
