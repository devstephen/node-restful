import { MongoClient, ServerApiVersion } from 'mongodb'
import express from 'express'
import mongoose from 'mongoose'
import ProductsRoute from './Routes/Products.route.js'
import { Product } from './Models/Product.model.js'
// const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all('/test/:id', (req, res) => {
  res.send(req.params)
})

app.all('/test', (req, res) => {
  // console.log(req.query)
  // res.send(req.query)

  console.log(req.body)
  res.send(req.body)
})

// hvEvAm3CSaLoXZTX
main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(
    'mongodb+srv://stephen:hvEvAm3CSaLoXZTX@cluster0.tluutgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )

  console.log('You successfully connected to MongoDB')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const uri =
//   'mongodb+srv://stephen:hvEvAm3CSaLoXZTX@cluster0.tluutgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// })

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect()
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 })
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     )
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close()
//   }
// }
// run().catch(console.dir)

app.use('/products', ProductsRoute)
app.get('/', (req, res, next) => {
  console.log(req.url)
  console.log(req.method)
  res.send('<h1>You are on the home route</h1>')
})

app.use((req, res, next) => {
  res.status(404 || 500)
  res.send({
    status: 404 || 500,
    message: 'Not found',
  })
})

app.listen(3000, () => {
  console.log('Server is now running on port 3000')
})
