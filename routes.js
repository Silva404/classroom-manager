const express = require('express')
const routes = express.Router()

routes.get('/', (req,res) => {
    res.render('affiliates/index')
})

routes.get('/teachers', (req,res) => {
    res.render('affiliates/index')
})

routes.get('/teachers/create', (req,res) => {
    res.render('affiliates/create')
})

routes.get('/students', (req,res) => {
    res.render('students')
})

module.exports = routes