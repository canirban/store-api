const mongoose = require("mongoose");
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to DB successful");
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports = connectDB;
