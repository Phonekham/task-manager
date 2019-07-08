// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

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
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "test",
    //     age: 24
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to connect to database");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Phone",
    //       age: 33
    //     },
    //     {
    //       name: "noy",
    //       age: 34
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert to database");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("task").insertMany(
    //   [
    //     {
    //       description: "coding",
    //       completed: false
    //     },
    //     {
    //       description: "play game",
    //       completed: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert to database");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
