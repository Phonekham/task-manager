const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000 //1MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload word"));
    }
    cb(undefined, true);
  }
});
// const errorMiddleware = (req, res, next) => {
//   throw new Error("from middleware");
// };
app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

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
