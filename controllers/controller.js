// controller.js
const db = require("../db/queries");

// Get all items
async function getInventory(req, res) {
  const food = await db.getAllInventory();
  res.render("index", { title: "Food Inventory", food });
}

// Create a new item
async function addItem(req, res) {
  const { itemName, categoryName, itemPrice, itemQuantity } = req.body;
  await db.addItem(itemName, categoryName, parseFloat(itemPrice), itemQuantity);
  res.redirect("/");
}

// Update an item
async function updateItem(req, res) {
  const { itemName, categoryName, itemPrice, editQuantity } = req.body;
  await db.updateItem(
    req.params.id,
    itemName,
    categoryName,
    parseFloat(itemPrice),
    editQuantity
  );
  res.redirect("/");
}

// Delete an item
async function deleteItem(req, res) {
  await db.deleteItem(req.params.id);
  res.redirect("/");
}

module.exports = {
  getInventory,
  addItem,
  updateItem,
  deleteItem,
};
