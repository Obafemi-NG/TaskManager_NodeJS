const { CustomAPIError } = require("../error/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: "something went wrong! Try again later" });
};

module.exports = errorHandlerMiddleware;
