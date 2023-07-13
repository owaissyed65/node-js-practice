function authorized(req, res, next) {
  const { name, id } = req.query;
  if (name === "john") {
    req.user = { name, id, random: Math.floor(Math.random() * 100) };
    next();
  } else {
    return res.send("UnAuthorized");
  }
}
module.exports = authorized;
