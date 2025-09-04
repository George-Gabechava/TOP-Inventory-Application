// routes/router.js
const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

// Home Page (Read)
router.get("/", controller.getInventory);

// Add item
router.post("/add", controller.addItem);

// Update item
router.post("/edit/:id", controller.updateItem);

// Delete item
router.post("/delete/:id", controller.deleteItem);

module.exports = router;
