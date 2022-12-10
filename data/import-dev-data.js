const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Food = require("./../models/foodModel");
const axios = require("axios");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then((con) => {
  console.log("DB connection Successfull!");
});

//IMPORT DATA INTO DB
const importData = async () => {
  try {
    axios
      .get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
      .then((res) => Food.create(res.data.recipes));

    console.log("Data successfully loaded");
  } catch (error) {
    console.log(error);
  }
};

//DELETE ALL DATA INTO DB
const deleteData = async () => {
  try {
    await Food.deleteMany();
    console.log("Data successfully deleted");
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] == "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  deleteData();
}
