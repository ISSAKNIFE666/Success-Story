const express = require("express")
const cors = require("cors")
const app = express()
const port = 8080


app.use(cors())
app.use(express.json())

const db = require("./config/db.js")




app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
    
})


