const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Defining methods for the restaurantsController
module.exports = {
  createNewUser: function (req, res) {
    const userToCreate = {
      email: req.body.email,
    };
    bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
      if (err) throw new Error(err);
      console.log(hashedPassword);
      userToCreate.password = hashedPassword;
      db.User.create(userToCreate)
        .then((newUser) => {
          const token = jwt.sign({ _id: newUser._id }, process.env.SECRET);
          res.json({ token: token });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).end();
        });
    });
  },
  loginUser: function (req, res) {
    db.User.findOne({ email: req.body.email.toLowerCase() })
      .then((foundUser) => {
        // TODO: Hash the user's provided password
        // Compare the hashed request password
        // to the database password.
        bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
          if (result) {
            const token = jwt.sign({ _id: foundUser._id }, process.env.SECRET);
            res.json({ token: token });
          } else {
            res.status(401).end();
          }
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
};
