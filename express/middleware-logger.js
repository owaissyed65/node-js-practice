function logger(req, res, next) {
  req.date = new Date().getFullYear();
  req.data = req.url;
  req.appMethod = req.method;
  next();
}
module.exports = logger;
