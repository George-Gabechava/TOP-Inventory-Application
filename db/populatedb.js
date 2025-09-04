// populatedb.js
require("dotenv").config();
const pool = require("./pool");

// Example food items
const food = [
  {
    name: "Banana",
    category: "Fruit",
    price: 2.0,
    quantity: 20,
  },
  {
    name: "Apple",
    category: "Fruit",
    price: 1.5,
    quantity: 40,
  },
  {
    name: "Carrots",
    category: "Vegetable",
    price: 4.75,
    quantity: 12,
  },
];

async function populate() {
  try {
    for (const item of food) {
      await pool.query(
        "INSERT INTO inventory (name, category, price, quantity) VALUES ($1, $2, $3, $4) ON CONFLICT (name) DO NOTHING",
        [item.name, item.category, item.price, item.quantity]
      );
    }
    console.log("Database populated!");
  } catch (err) {
    console.error("Error populating:", err);
  } finally {
    pool.end();
  }
}

populate();
