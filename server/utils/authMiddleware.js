const jwt = require("jsonwebtoken");
const secretKey = require("../configuration/jwtConfig");

function authenticatetoken(req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "unauthorized missing token" });
  }
  const [bearer, token] = authHeader.split(" ");
  if (bearer != "Bearer" || !token) {
    return res.status(401).json({ message: "unauthorized missing token format" });

  }

  jwt.verify(token,secretKey,(err,user) => {
    if(err) {
    return res.status(403).json({ message: "invalid token" });

    }
    req.user = {
      id: payload.id,
      role: payload.role
    };
    next();
  })
}

function authorizeManager(req, res, next) {
  if (req.user && req.user.role === "manager") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Manager access required" });
  }
}

function authorizeStudent(req, res, next) {
  if (req.user && req.user.role === "student") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Student access required" });
  }
}

module.exports = { authenticateToken, authorizeManager, authorizeStudent };
