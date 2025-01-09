const express = require("express");
const {
  getAllProducts,
  getProductById,
  update,
  addProduct,
  remove,
  getAllCategoryProducts,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/getAll", getAllProducts);
router.get("/getAllByCategory/:id", getAllCategoryProducts);
router.get("/getOne/:id", getProductById);
router.put("/update/:id", update);
router.post("/add", addProduct);
router.delete("/remove/:id", remove);

module.exports = router;
