require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connection");
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");
const productRouter = require("./routes/products");
app.use(express.json());
app.use("/api/v1/products", productRouter);
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
