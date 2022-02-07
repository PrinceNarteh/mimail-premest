const jwt = require("jsonwebtoken");
const AppError = require("../helpers/appError");

exports.authRequired = (req, res, next) => {
  const headerToken = req.headers["authorization"];
  if (!headerToken) {
    return next(new AppError("Not authenticated", 401));
  }
  const token = headerToken.replace("Bearer ", "");
  if (!token) return next(new AppError("Not authenticated", 401));

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return next(new AppError(err.message, 401));
    }
    req.userId = payload.id;
  });

  next();
};
