const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
mongoose.connect('mongodb://localhost:27017/testing_database', {useNewUrlParser:true})
//mongoose is a way to structure the application
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

module.exports = Test

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
