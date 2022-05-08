//require the express library downloaded
const express = require ("express")
//set up our actual server. create app variable and call express function
const app = express()

//to link route to our main app we need to call app.use
// app.use("/user", userRouter)
//import our route
// const userRouter = require ("./router/user")

//to tell our app to use our view engine. Pass in name of setting first then pass it in the view engine we are using which is ejs.
app.set("view engine", "ejs")

//setting up a route (get, post, put, delete, patch)
// '/' is the path, url path
// second parameter is a function taking in request & respond
app.get("/", (req, res) => {
    //run code whenever we access this url
    console.log("we are running")
    //res.send > to send info to the user/port
    //res.sendStatus(500) lets you send the http status message
    //res.json({ message : "Error"}) > lets you send json (in string)
    //res.download > lets you download the file
    //res.render("Name of file you want to render") > to render a file. For reading ejs file 
    //you can pass info from your server down into view as render takes in second parameter (an object). After done, go into ejs
    res.render("index", { text: ", we like food"}) 
})


//to make server run
// cannot GET / means our application has no route set up so it cannot find the route
const port = 3000
app.listen(port)
