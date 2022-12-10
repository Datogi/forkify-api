const express = require("express");
const {
  getAllFoods,
  createFood,
  getFood,
  updateFood,
  deleteFood,
} = require("../controllers/FoodController");

const router = express.Router();

router.route("/").get(getAllFoods).post(createFood);
router.route("/:id").get(getFood).patch(updateFood).delete(deleteFood);

module.exports = router;
