const express = require('express')
const routes = express.Router()
const affiliates = require('./affiliates')

routes.get('/', (req, res) => {
    res.render('affiliates/index')
})

routes.get('/teachers', (req, res) => {
    return res.render('affiliates/index')
})

routes.post('/teachers', affiliates.post)

routes.get('/teachers/create', (req, res) => {
    return res.render('affiliates/create')
})

routes.get('/students', (req, res) => {
    return res.render('students')
})

module.exports = routes