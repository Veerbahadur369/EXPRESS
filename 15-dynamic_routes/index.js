import express from 'express'

const app = express()

app.get('/', (req, res) => {
  let data = ["veer","sonu","suraj","Rahul"]
     let show_data=`<ul>
     ${data.map((item)=>(`<li>Click for getting detail <a href="user/${item}">${item}</a> </li>`)).join(' ') }
     </ul>` 
     res.send(show_data)
})

app.get("/user/:name",(req,res)=>{
    let route =req.params.name
    res.send(`this is ${route} page`)
})






const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`listening on port port`)
})