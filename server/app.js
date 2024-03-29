const express = require('express')
const app = express()
const { Product } = require('./db')
const path = require('path')

app.use(express.json())

app.get('/app.js', (req, res, next) => res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
    Product.findAll()
    .then(products => {res.send(products)})
})

app.delete('/api/products/:id', (req, res, next) => {
    Product.destroy({
        where: {id: req.params.id}
    })
    .then(() => res.sendStatus(204))
    .catch(next);
})

app.post('/api/products', (req, res, next) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(next)
})

module.exports = app
