// controller.js
const db = require("../db/queries");

async function getInventory(req, res) {
  const food = await db.getAllInventory();
  res.render("index", { title: "Food Inventory", food: food });
}

module.exports = {
  getInventory,
};
