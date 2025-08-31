import express from "express"
import ageCheker from "./midleware/agechecker.middleware.js"

const app = express()
 

 

app.get("/", (req, res) => {
    console.log("hello default page")
    res.send("hello default")
})
app.get("/about", (req, res) => {
    console.log("hello about")
    res.send("hello about")
})
app.get("/contact", (req, res) => {
    console.log("hello contact")
    res.send("hello contact")
})
app.get("/service", ageCheker,(req, res) => {            //? This is router midleware
    console.log("hello service ")
    res.send("hello service") 
})

app.listen(4000, () => { console.log("server running") })