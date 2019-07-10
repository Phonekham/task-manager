require("../src/db/mongoose");
const User = require("../src/models/user");

// 5d2472f679b03f3de0a3eb5b
User.findByIdAndUpdate("5d24726310de812824f907cd", { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
