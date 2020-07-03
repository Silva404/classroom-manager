const { date, age, formatter } = require('../../lib/utils')
const Teacher = require('../models/Teacher')

module.exports = {
    index(req, res) {
        Teacher.all( teachers => {
            return res.render('teachers/index', { teachers })
        })        
    },
    create(req, res) {
        return res.render('teachers/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Please fill all the fields!')
            }
        }
        Teacher.create(req.body, teacher => {
            return res.redirect(`/teachers/${teacher.id}`)
        })
    },
    show(req, res) {
        Teacher.find(req.params.id, teacher => {
            return res.render('/teachers/show', { teacher })
        })
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Please fill all the fields!')
            }
        }
    },
    delete(req, res) {
        return
    },
}