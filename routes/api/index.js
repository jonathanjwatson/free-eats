const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const authRoutes = require("./auth");

router.use("/restaurants", restaurantRoutes);
router.use("/auth", authRoutes);

module.exports = router;
