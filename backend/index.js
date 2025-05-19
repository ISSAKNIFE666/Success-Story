const express = require("express")
const cors = require("cors")
const app = express()
const port = 8080


app.use(cors())
app.use(express.json())

const db = require("./config/db.js")

const productRoutes = require("./routes/products")
const userRoutes = require("./routes/users")
const orderRoutes = require("./routes/orders")
const categoryRoutes = require("./routes/categories")

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/categories", categoryRoutes)

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
    
})


