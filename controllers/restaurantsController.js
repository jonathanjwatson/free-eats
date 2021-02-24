const db = require("../models");

// Defining methods for the restaurantsController
module.exports = {
  findAll: function (req, res) {
    db.Restaurant.find(req.query)
      .populate("menuItems")
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByIdWithMenuItems: function (req, res) {
    db.Restaurant.findById(req.params.id)
      .populate("menuItems")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  createMenuItem: function (req, res) {
    db.MenuItem.create(req.body).then((newMenuItem) => {
      db.Restaurant.findByIdAndUpdate(
        req.params.id,
        { $push: { menuItems: newMenuItem._id } },
        { new: true }
      ).then((updatedRestaurant) => {
        res.json(updatedRestaurant);
      });
    });
  },
  create: function (req, res) {
    db.Restaurant.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Restaurant.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Restaurant.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
