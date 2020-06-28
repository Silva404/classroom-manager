const fs = require('fs')
const data = require('../data.json')
const { date, age, formatter } = require('../utils.js')

exports.index = (req, res) => {
    res.render('students/index', { students: data.students })
}

exports.create = (req, res) => {
    return res.render('students/create')
}

exports.edit = (req, res) => {
    const { id } = req.params
    const studentFound = data.students.find(info => info.id == id)
    if (!studentFound) return res.send(`You can't edit something that doesn't exists`)

    const student = {
        ...studentFound,
        birth: date(studentFound.birth)
        // education: graduation(studentFound.education, id)       
    }
    console.log(student.education)

    return res.render('students/edit', { student })
}

exports.show = (req, res) => {
    const { id } = req.params
    const studentFound = data.students.find(info => info.id == id)
    if (!studentFound) return res.send('Student not found!')

    const student = {
        ...studentFound,
        age: age(studentFound.birth),
        created_at: formatter.format(studentFound.created_at),
        // work: studentFound.work.split(',')
    }

    return res.render('students/show', { student })
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == '') {
            return res.send('Please fill all the fields!')
        }
    }

    let { name, birth, work, education, distance, presence } = req.body

    let id = 1 
    const lastItem = data.students[data.students - 1]
    if (id != lastItem) {
        id = lastItem + 1
    }

    birth = Date.parse(req.body.birth)    
    const created_at = Date.now()
    const newWork = work.split(',')


    data.students.push({
        name,
        birth,
        work: newWork,
        id: id,
        education,
        presence,
        distance,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('Error ocurred while writing data.json')

        return res.redirect('/students')
    })
}

exports.put = (req, res) => {
    const { id } = req.body
    let index = 0

    const changedStudent = data.students.find((student, studentIndex) => {
        if (student.id == id) {
            index = studentIndex
            return true
        }
    })

    const student = {
        ...changedStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if (err) return res.send('Error while writing file.')

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredStudents = data.students.filter(student => student.id != id)
    if (!filteredStudents) return res.send('Student not found!')

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if (err) return res.send('Error while writing file!')

        return res.redirect('/students')
    })
}