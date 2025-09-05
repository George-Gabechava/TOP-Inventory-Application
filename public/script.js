// script for index buttons/actions

// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  const addPopup = document.getElementById("addItem");
  const editPopup = document.getElementById("editItem");

  const addButton = document.getElementById("addButton");
  const closeAdd = document.getElementById("closeAdd");
  const closeEdit = document.getElementById("closeEdit");

  // Add Item popup
  addButton.addEventListener("click", () => {
    addPopup.style.display = "flex";
  });

  // Edit Item popup
  document.querySelectorAll(".editButton").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("editId").value = button.dataset.id;
      document.getElementById("editName").value = button.dataset.name;
      document.getElementById("editCategory").value = button.dataset.category;
      document.getElementById("editPrice").value = button.dataset.price;
      document.getElementById("editQuantity").value = button.dataset.quantity;

      editForm.action = `/edit/${button.dataset.id}`;
      editPopup.style.display = "flex";
    });
  });

  // Close popups
  closeAdd.addEventListener("click", () => (addPopup.style.display = "none"));
  closeEdit.addEventListener("click", () => (editPopup.style.display = "none"));
});

// Category Buttons
const categoryButtons = document.querySelectorAll("#categories button");
const itemCards = document.querySelectorAll(".item-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.textContent;

    itemCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "All") {
        card.style.display = "flex";
      } else if (cardCategory === selectedCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
