require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3500
const cors = require("cors")
const connectDB = require("./config/dbConnection")
const { default: mongoose } = require("mongoose")

console.log(process.env.NODE_ENV)

connectDB()

app.use(cors())

app.use(express.json())

app.use("/product", require("./routes/productRoutes"))

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb")
  app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`)
  })
})

mongoose.connection.on("error", (err) => {
  console.log(err)
})
