import express from 'express'
import userData from './user.json' with {type :"json"}
const app = express()

app.get('/', (req , res) => {
 console.log(userData)
 res.send(userData)

})
 app.get('/user/:id',(req,res)=>{
     let val =req.params.id;
     console.log(val)
      let data = userData.filter((item)=>(val==item.id))
      res.send(data)

 })
  app.get('/username/:name',(req,res)=>{
     let val =req.params.name;
     console.log(val)
      let data = userData.filter((item)=>(val.toLowerCase()==item.name.toLowerCase()))
      res.send(data)

 })


const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on port port`)
})