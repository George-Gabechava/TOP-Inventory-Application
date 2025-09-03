// controller.js
const db = require("../db/queries");

// Get all items
async function getInventory(req, res) {
  const food = await db.getAllInventory();
  res.render("index", { title: "Food Inventory", food });
}

// Create a new item
async function addItem(req, res) {
  const { itemName, categoryName, itemPrice } = req.body;
  await db.addItem(itemName, categoryName, parseFloat(itemPrice));
  res.redirect("/");
}

// Form to edit an item
async function getEdit(req, res) {
  const item = await db.getItemById(req.params.id);
  res.render("editItem", { title: "Edit Item", item });
}

// Update an item
async function updateItem(req, res) {
  const { itemName, categoryName, itemPrice } = req.body;
  await db.updateItem(
    req.params.id,
    itemName,
    categoryName,
    parseFloat(itemPrice)
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
  getEdit,
  updateItem,
  deleteItem,
};
