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

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5d24726310de812824f907cd", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
