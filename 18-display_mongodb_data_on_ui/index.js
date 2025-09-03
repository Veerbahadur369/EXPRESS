import express from 'express'
import { MongoClient } from "mongodb";


const dbName = "dummy"
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)

const app = express()

app.set('view engine','ejs');

app.get('/', async (req, res) => {

  await client.connect()
  const db = client.db(dbName);
  const collection = db.collection("products");
  const result = await collection.find().toArray();
  res.render('home',{result:result});
})

const port = process.env.PORT || 4000

app.listen(port, () => {

  console.log(`listening on port port`)
})