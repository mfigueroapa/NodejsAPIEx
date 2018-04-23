// cargamos nuestra app serve usando express
//Importamos libreria express

const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short')) //Morgan helps log what kind of request was triggered
// app.use(morgan('combined'))

app.get("/", (req, res) => { //call back func
  console.log("Responding to root route")
  res.send("Hello from Root!")
})

app.get("/artists", (req, res) => {
  var user1 = {firstName: "Cameron", lastName: "Jibril"}
  var user2 = {firstNAme: "Austin", lastName: "Post"}
  // res.json(user1)
  res.json([user1, user2])
})

app.listen(8001, () => {
  console.log("Server is up and listeinig on port 8001.")
})
