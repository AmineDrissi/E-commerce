const express = require('express');
const { addCategory, getAllCategories, getCategoryById, remove, edit } = require('../controllers/category.controller');
const router = express.Router()

router.post("/add", addCategory)
router.get("/getAll",getAllCategories)
router.get("/getOne/:id",getCategoryById)
router.delete("/delete/:id",remove)
router.put("/update/:id",edit)


module.exports = router;