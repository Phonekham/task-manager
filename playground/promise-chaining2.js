require("../src/db/mongoose");
const Task = require("../src/models/task");

// 5d2445a61120a43ff05500ff
// User.findByIdAndDelete("5d2445a61120a43ff05500ff")
//   .then(task => {
//     console.log(task);
//     return User.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5d2591753a3d4539bc6a146b")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
