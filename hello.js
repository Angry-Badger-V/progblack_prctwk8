const express = require('express')
const app = express()

app.get('/', function(req, resp){
   resp.send('Hello world')
})

app.get('/bob/:u', (req, res) => {
    res.send(req.params.u)
})

app.get('/name', (req, res) => {
    res.send(req.query.person)
})

app.get('/potato', (req, res) => {
    res.send(req.query.potatos)
})

app.listen(8090)