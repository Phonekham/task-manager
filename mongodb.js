// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    // console.log("connected");
    const db = client.db(databaseName);
    // db.collection("users").findOne({ name: "test" }, (error, user) => {
    //   if (error) {
    //     console.log("unable to fetch");
    //   }
    //   console.log(user);
    // });

    // db.collection("task").findOne(
    //   {
    //     _id: new ObjectID("5d2305a1b53a6a291495f7b1")
    //   },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    // db.collection("task")
    //   .find({ completed: false })
    //   .toArray((error, task) => {
    //     console.log(task);
    //   });

    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("5d23018b04660412a40c8483")
    //   },
    //   {
    //     $inc: {
    //       age: 1
    //     }
    //   }
    // );

    // updatePromise
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    db.collection("task")
      .updateMany(
        {
          completed: false
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log(error);
      });
    //
  }
);
