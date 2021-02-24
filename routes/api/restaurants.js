const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");

// Matches with "/api/restaurants"
router
  .route("/")
  .get(restaurantsController.findAll)
  .post(restaurantsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)
  .delete(restaurantsController.remove);

router
  .route("/:id/menuItems")
  .get(restaurantsController.findByIdWithMenuItems)
  .post(restaurantsController.createMenuItem);

module.exports = router;
