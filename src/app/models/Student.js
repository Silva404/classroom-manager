const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT students.*, teachers.name AS teacher_name
        FROM students 
        LEFT JOIN teachers ON (students.teacher_id = teachers.id)`, (err, results) => {
            if (err) throw `Data ${err}`
            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `
            INSERT INTO students (
                name,
                avatar_url,
                birth_date,
                email,
                education_level,
                course_credit,
                teacher,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url,
            date(data.birth_date).iso,
            data.email,
            data.education_level,
            data.course_credit,
            data.teacher,
            date(Date.now()).iso
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Data ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT students.*, teachers.name AS teacher_name 
        FROM students 
        LEFT JOIN teachers ON ( students.teacher_id = teachers.id )
        WHERE students.id = $1`, [id], (err, results) => {
            if (err) throw `Database ${err}`

            callback(results.rows[0])
        })
    },
    findBy(filter, callback) {
        db.query(`SELECT students.*, teachers.name AS teacher_name
        FROM students 
        LEFT JOIN teachers ON (students.teacher_id = teachers.id)
        WHERE students.name ILIKE '%${filter}%'`, (err, results) => {
            if (err) throw `Data ${err}`
            callback(results.rows)
        })
    },
    update(data, callback) {
        const query = `
            UPDATE students SET 
                name=($1),
                avatar_url=($2),
                birth_date=($3),
                email=($4),
                education_level=($5),
                course_credit=($6),
                teacher=($7)
                WHERE id = $8    
        `

        const values = [
            data.name,
            data.avatar_url,
            date(data.birth_date).iso,
            data.email,
            data.education_level,
            data.course_credit,
            data.teacher,
            data.id
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Data ${err}`

            callback()
        })
    },
    delete(id, callback) {
        db.query(`DELETE FROM students WHERE id = $1`, [id], (err, results) => {
            if (err) throw `Data ${err}`

            callback()
        })
    },
    selectTeacherOptions(callback) {
        db.query(`SELECT name, id FROM teachers`, (err, results) => {
            if (err) throw `Data error: ${err}`

            callback(results.rows)
        })
    }
}