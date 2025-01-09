const express = require("express")
const cors = require('cors')
const app = express()
const port = 5000
const db=require('./database.js')
app.use(cors())
app.use(express.json())

const userRouter = require("./routers/user.router.js")
const categoryRouter = require("./routers/category.router.js")
const productRouter = require("./routers/product.router.js")


app.use("/api/users",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/product",productRouter)




app.listen(port, ()=>{
    console.log("listening on port:",port);
})