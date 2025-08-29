import express from "express"
// const express = require("express")
// const { default: about } = require("./Modules/about.js")
// const home= require("./Modules/home.js")
import home from "./Modules/home.js"
import about from "./Modules/about.js"


const app = express()
// console.log(app) 
// console.log("hello hi how are you")
const path = "/"
const api = [{ id: 1, name: "veer", course: "MERN" },
{ id: 2, name: "veer" }, { id: 3, name: "veer" },
{ id: 4, name: "veer" }, { id: 5, name: "veer" }
]

    app.get("/", (req, res) => {
        res.send(home())
        // console.log("api works")
    })

app.get("/about",(req,res)=>{
    res.send(about())
    console.log("about is working")
})

app.listen(4000, () => {
    console.log("port running on 4000")
}) 