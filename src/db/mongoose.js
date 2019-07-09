const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can't contain 'Password'");
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  }
});
const Tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const me = new User({
  name: "paww",
  email: "efefee@gmail.com",
  password: " paswords "
});

// const task = new Tasks({
//   description: "learn mongoose",
//   completed: false
// });

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error", error);
  });
