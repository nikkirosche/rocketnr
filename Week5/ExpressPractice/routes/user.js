// //import express
// const express = require("express")

// //create router, a mini app entire on its on. Lives inside the main application.
// //router has functions like get, post, put, delete too
// const router = express.Router()

// //to get to this page, at the end of 3000/user
// //you can nest a router inside of a parent route. As all the route starts with /user, you can remove it 
// router.get("/", (req, res) => {
//     res.send("User list")
// })

// //to get to this page, at the end of 3000/user/name
// router.get("/name", (req, res) => {
//     res.send("User new form")
// })

// //export router from file to use it > go to server to import it
// module.export = router 