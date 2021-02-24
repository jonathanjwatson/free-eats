const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
