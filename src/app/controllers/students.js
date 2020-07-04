const { date, age } = require('../../lib/utils')
const Student = require('../models/Student')
const db = require('../../config/db')

module.exports = {
    index(req, res) {
        Student.all(students => {
            return res.render('students/index', { students })
        })
    },
    create(req, res) {
        
        Student.selectTeacherOptions(options => {
            return res.render('students/create', {  Teachers_options: options})
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Please fill all the fields!') 
            }
        }

        Student.create(req.body, student => {
            return res.redirect(`students/${student.id}`, { student })
        })
    },
    show(req, res) {
        Student.find(req.params.id, student => {

            student.birth_date = age(student.birth_date)
            student.created_at = date(student.created_at).format

            
            return res.render('students/show', { student })
        })
    },
    edit(req, res) {
        Student.find(req.params.id, student => {

            student.birth_date = date(student.birth_date).iso

            return res.render('students/edit', { student })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Please fill all the fields!')
            }
        }

        Student.update(req.body, () => {
            return res.redirect(`students/${req.body.id}`)
        })
    },
    delete(req, res) {
        Student.delete(req.body.id, () => {
            return res.redirect('students/index')
        })
    }
}