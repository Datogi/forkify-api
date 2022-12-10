const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  publisher: {
    type: String,
    required: [true, "A food must have a publisher"],
    trim: true,
  },
  title: {
    type: String,
    required: [true, "A Food must have a title"],
  },
  source_url: String,
  recipe_id: String,
  image_url: String,
  social_rank: Number,
  publisher_url: String,
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
