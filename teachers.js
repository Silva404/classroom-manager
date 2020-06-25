const fs = require('fs')
const data = require('./data.json')
const { date, age, graduation, formatter } = require('./utils.js')

exports.edit = (req, res) => {    
    const { id } = req.params
    const teacherFound = data.teachers.find(info => info.id == id)
    if(!teacherFound) return res.send(`You can't edit something that doesn't exists`)

    const teacher = {
        ...teacherFound,
        birth: date(teacherFound.birth),
        education: graduation(teacherFound.education, id)       
    }
    console.log(teacher.education)

    return res.render('teachers/edit', { teacher })
}

exports.show = (req, res) => {
    const { id } = req.params
    const teacherFound = data.teachers.find(info => info.id == id)
    if (!teacherFound) return res.send('Teacher not found!')

    const teacher = {
        ...teacherFound,
        age: age(teacherFound.birth),
        created_at: formatter.format(teacherFound.created_at)
    }

    return res.render('teachers/show', { teacher })
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body)
    
    for (let key of keys) {
        if (req.body[key] == '') {
            return res.send('Please fill all the fields!')
        }
    }

    let { name, birth, work, education, distance, presence } = req.body

    birth = Date.parse(req.body.birth)
    const id = data.teachers.length + 1
    const created_at = Date.now()
    

    data.teachers.push({ 
        name,
        birth,  
        work,
        id,
        education,
        presence,
        distance,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('Error ocurred while writing data.json')

        return res.redirect('/teachers')
    })    
}