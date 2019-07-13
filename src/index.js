const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("get request are disable");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check back soon");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is on port " + port);
});

// const jwt = require("jsonwebtoken");
// const myFunction = async () => {
//   const token = jwt.sign({ _id: "123456" }, "thisismytoken");
//   console.log(token);
//   const data = jwt.verify(token, "thisismytoken");
//   console.log(data);
// };
// myFunction();

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("5d2861566b936731405e7a19");
//   // await task.populate("owner").execPopulate(); //find task's user
//   // console.log(task.owner);

//   const user = await User.findById("5d285c0fa57d3136f0c2865 4");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();
