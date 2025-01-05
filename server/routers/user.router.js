const express = require('express')
const router = express.Router()
const {getAllUsers, register,remove, edit} = require("../controllers/user.controller.js")



router.get("/getAll",getAllUsers)
router.post("/signup",register)
router.delete("/deleteUser/:id",remove)
router.put("/updateUser/:id",edit)


module.exports = router