const AppError = require("../helpers/appError");

exports.authRequired = (req, res, next) => {
  const headerToken = req.headers["authorization"];
  if (!headerToken) {
    return next(new AppError("Not authenticated", 401));
  }
  next();
};
