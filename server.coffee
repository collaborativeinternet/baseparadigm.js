express = require 'express'
Edge = require './BaseParadigm.js'
app = express()

app.use(express.bodyParser())

app.options '/', (req, res) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Methods', 'PUT'
  res.header 'Access-Control-Allow-Headers', 'content-type'
  res.send ''

app.put '/', (req, res) ->
  res.header 'Access-Control-Allow-Origin', '*'
  edge = new Edge req.body
  console.log edge
  console.log edge.getContentID()

app.listen 7000
