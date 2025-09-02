import express from 'express'
import { MongoClient } from 'mongodb'
               //~ Practice 1
/* 
const dbName='fakeData'
let url ="mongodb://localhost:27017"
const client = new MongoClient(url)
let myData
 async function connection(){
     await  client.connect()
     let db =client.db(dbName);
     let collect= db.collection("data")
      myData = await collect.find({ category: 'mobile'}).limit(3).toArray();
 console.log(myData)

}
connection();
 
const app = express()
app.get('/',(req,res)=>{
  res.send(myData)
})
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on port 4000`)
}) */

    //~ Practice 2
// const dbName ='productList'
// const url ="mongodb://localhost:27017/"
// const client = new MongoClient(url)
//  async function connectDb(){
//      await client.connect();
//      const db=client.db(dbName);
//      const collection =   db.collection("comments")
//      const result  = await collection.find().toArray();
//      console.log(result)
// }


      //~ Practice 3

  let dbName= 'dummy'
  let url ='mongodb://localhost:27017'

  const client = new MongoClient(url)

async  function dummyConnection(){
    client.connect()
    let db= client.db(dbName)
    let collectionName =db.collection("products")
    let result =await collectionName.find().skip(100).toArray()
    console.log(result)
  }
  console.log('hello')

  dummyConnection()