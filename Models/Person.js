const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let personSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },
    city: {
      type: String,
    },
    number: {
      type: Number,
    },
  },
  {
    collection: "details",
  }
);

module.exports = mongoose.model("detail", personSchema);
