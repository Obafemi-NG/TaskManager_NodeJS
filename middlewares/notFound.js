const notFound = (req, res) => {
  res.status(400).json({ message: "page not found!!" });
};

module.exports = notFound;
