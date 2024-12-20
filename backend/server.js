import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


// add config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)


app.get("/", (req,res)=>{
    res.send("API working!")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})



