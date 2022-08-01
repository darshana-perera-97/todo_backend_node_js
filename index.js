const express = require("express");
const { default: mongoose } = require("mongoose");
const TodoModel = require("./models/Todo");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.b4ir7g9.mongodb.net/todo_new?retryWrites=true&w=majority"
);

app.get("/getTodos", (req, res) => {
  TodoModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createTodo", async (req, res) => {
  const todo = req.body;
  const newTodo = new UserModel(todo);
  await newTodo.save();

  res.json(todo);
});

app.listen(3001, () => {
  console.log("Server runs in 3001");
});
