const mongoose = require("mongoose");

exports.dbConnect = () => {
  //Set up default mongoose connection
  mongoose
    .connect(process.env.dbURI)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

  //Get the default connection
  var db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on("error", () => {
    console.error.bind(console, "MongoDB connection error:");
    process.exit(1);
  });
};
