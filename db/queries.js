const pool = require("./pool");

// Get all items, ordered by category
async function getAllInventory() {
  const { rows } = await pool.query(
    "SELECT * FROM inventory ORDER BY category DESC"
  );
  return rows;
}

// Add a new item
async function addItem(name, category, price, quantity) {
  const query =
    "INSERT INTO inventory (name, category, price, quantity) VALUES ($1, $2, $3, $4)";
  await pool.query(query, [name, category, price, quantity]);
}

// Update item
async function updateItem(id, name, category, price, quantity) {
  const query =
    "UPDATE inventory SET name = $1, category = $2, price = $3, quantity = $4 WHERE id = $5";
  await pool.query(query, [name, category, price, quantity, id]);
}

// Delete item
async function deleteItem(id) {
  const query = "DELETE FROM inventory WHERE id = $1";
  await pool.query(query, [id]);
}

module.exports = {
  getAllInventory,
  addItem,
  updateItem,
  deleteItem,
};
