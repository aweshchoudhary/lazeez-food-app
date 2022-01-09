const router = require("express").Router();
const products = require("../json/products.json");
const category = require("../json/category.json");
const users = require("../json/users.json");
const offers = require("../json/offers.json");

let items = [];
products.map((e) => {
  let currentItems = [e.items];
  currentItems.map((i) => {
    for (const item in i) {
      if (Object.hasOwnProperty.call(i, item)) {
        const element = i[item];
        items.push(element);
      }
    }
  });
  return null;
});

router.get("/", async (req, res) => {
  res.render("pages/home", { products: items, category, users, offers });
});

router.get("/foods", (req, res) => {
  res.render("pages/foods", { products: items, category, users });
});

module.exports = router;
