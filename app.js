//import dotenv from "dotenv/config.js";
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
dotenv.config();
console.log(process.env.MONGODB_URI)
const app = express()
//const port = 3000
mongoose.connect(process.env.MONGODB_URI)
const Schema = mongoose.Schema;

const testSchema = new Schema ({
  title: String, body: String
});



const Test = new mongoose.model("Test", testSchema)

const test1 = new Test({
title:"Mind of the Prey",
body:"You are a Hunter of the Monsters threatening the West. Can you bear the pressure as they threaten to overwhelm the world with a new threat?"
})
test1.save()


const BabySchema = new Schema({
  name:String,
  dob:Number
})
const BabyDatabase = new mongoose.model("Baby", BabySchema)

const firstbaby = new BabyDatabase({
  name:"Nebuchanezzer",
  dob:'02233123'
})
firstbaby.save()

//const {MongoClient} = require('mongodb');

// async function main() {
// 	// add details about the cluster
//   mongodb://localhost:27017/
// }
// const uri = "mongodb+srv"

// const client = new MongoClient(uri);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
