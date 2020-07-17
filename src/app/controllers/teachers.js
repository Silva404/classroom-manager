const { date, age, formatter } = require('../../lib/utils')
const Teacher = require('../models/Teacher')

module.exports = {
    index(req, res) {
        let { filter, limit, page } = req.query

        page = page || 1
        limit = limit || 4
        offset = limit * (page - 1)

        const params = {
            filter,
            limit,
            page,
            offset,
            callback(teachers) {
                return res.render('teachers/index', { teachers })
            }
        }

        Teacher.paginate(params)
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
            if (!teacher) return res.send('Teacher not found')

            teacher.birth_date = age(teacher.birth_date)
            teacher.created_at = date(teacher.created_at).format
            teacher.subjects_taught = teacher.subjects_taught.split(',')

            return res.render('teachers/show', { teacher })
        })
    },
    edit(req, res) {
        Teacher.find(req.params.id, teacher => {
            if (!teacher) return res.send('Teacher not found')

            teacher.birth_date = date(teacher.birth_date).iso

            return res.render('teachers/edit', { teacher })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Please fill all the fields!')
            }
        }

        Teacher.update(req.body, () => {
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req, res) {
        Teacher.delete(req.body.id, () => {
            return res.redirect(`/teachers/`)
        })
    },
}