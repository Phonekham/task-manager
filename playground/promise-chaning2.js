require("../src/db/mongoose");
const User = require("../src/models/task");

// 5d2445a61120a43ff05500ff
User.findByIdAndDelete("5d2445a61120a43ff05500ff")
  .then(task => {
    console.log(task);
    return User.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
