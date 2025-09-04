const pool = require("./pool");

// Get all items, ordered by category
async function getAllInventory() {
  const { rows } = await pool.query(
    "SELECT * FROM inventory ORDER BY category DESC"
  );
  return rows;
}

// Add a new item
async function addItem(name, category, price) {
  const query =
    "INSERT INTO inventory (name, category, price) VALUES ($1, $2, $3)";
  await pool.query(query, [name, category, price]);
}

// Update item
async function updateItem(id, name, category, price) {
  const query =
    "UPDATE inventory SET name = $1, category = $2, price = $3 WHERE id = $4";
  await pool.query(query, [name, category, price, id]);
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
