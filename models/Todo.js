const mongoose = require("mongoose");

const TodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
});

const TodoModel = mongoose.model("todos", TodSchema);
module.exports = TodoModel;
