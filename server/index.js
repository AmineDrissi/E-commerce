const express = require("express")
const cors = require('cors')
const app = express()
const port = 5000
const db=require('./database.js')
app.use(cors())
app.use(express.json())

const userRouter = require("./routers/user.router.js")


app.use("/api/users",userRouter)





app.listen(port, ()=>{
    console.log("listening on port:",port);
})