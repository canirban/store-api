const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: "Internal server error" });
};
module.exports = errorHandlerMiddleware;
