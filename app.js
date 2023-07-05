require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connection");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(3000, () => {
      console.log("Server listening on port 5001");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
