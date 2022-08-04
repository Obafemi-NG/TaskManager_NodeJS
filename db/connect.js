const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("successfully connected to the DB");
};

module.exports = connectDB;
