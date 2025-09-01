const pool = require("./pool");

async function getAllInventory() {
  const { rows } = await pool.query(
    "SELECT * FROM inventory ORDER BY category DESC"
  );
  return rows;
}

async function createItem(name, category, price) {
  const query =
    "INSERT INTO inventory (name, text, category) VALUES ($1, $2, $3)";
  await pool.query(query, [name, category, price]);
}

async function deleteItem(name) {
  // remove item
}

async function updateItem(name, category, price) {
  // add/subtract quantity
}

module.exports = {
  getAllInventory,
  createItem,
  deleteItem,
  updateItem,
};
