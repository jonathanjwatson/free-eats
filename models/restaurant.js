const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a restaurant name.",
  },
  address: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  zip: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  cuisine: {
    type: String,
    trim: true,
  },
  featuredImageUrl: {
    type: String,
    required: true,
  },
  menuItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "MenuItem",
    },
  ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
