const express = require("express")
const app = express()
// const methodOverride = require("method-override")

//to cover json request
app.use(express.json())
//middleware which allows express to access body
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    console.log("I am running")
    res.render("index")
})

app.post("/hello", (req, res) => {
    const {fname, lname} = req.body
    console.log(`${fname} ${lname}`)
    //return it
    res.json({ "Success": true})
})

const port = 3000
app.listen(port)

//how to receive data and write it to our JSON file?