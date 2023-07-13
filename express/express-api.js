const express = require("express");
const { products, people } = require("./data");
const app = express();
app.get("/api/allProducts", (req, res) => {
  res.json({ products, people });
});
app.get("/api/:productid", (req, res) => {
  console.log(req.params);
  const find = products.find((v) => {
    return v.id === Number(req.params.productid);
  });
  if (!find) return res.status(404).send("Product Does not exist");
  res.json([find]);
});
app.get("/api/fewdetails", (req, res) => {
  const data = products.map((p) => {
    const { id, name, price } = p;
    return {
      id,
      name,
      price,
    };
  });
  res.json(data);
});
app.get("/api/product/query", (req, res) => {
  let sortedArray = [...products];
  const { search, limit } = req.query;
  if (search) {
    sortedArray = sortedArray.filter((data) => data.name.startsWith(search));
  }
  if (limit) {
    sortedArray = sortedArray.slice(0, Number(limit));
  }
  if (sortedArray.length < 1) {
    return res.status(200).json({ success: true, data: ["No Data"] });
  }
  res.status(200).json(sortedArray);
});
app.listen(3000, () => {
  console.log("Server Listening on http://localhost:3000");
});
