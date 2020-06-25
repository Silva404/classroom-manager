const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', (req, res) => {
    res.render('teachers/index')
})

routes.get('/teachers', (req, res) => {
    return res.render('teachers/index')
})

routes.get('/teachers/create', (req, res) => {
    return res.render('teachers/create')
})

routes.get('/teachers/:id', teachers.show)

routes.post('/teachers', teachers.post)

routes.get('/students', (req, res) => {
    return res.render('students')
})

module.exports = routes