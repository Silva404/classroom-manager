const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM students ORDER BY name ASC`, (err, results) => {
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
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url,
            date(data.birth_date).iso,
            data.email,
            data.education_level,
            data.course_credit,
            date(Date.now()).iso
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Data ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT * FROM students WHERE id = $1`, [id], (err, results) => {
            if (err) throw `Database ${err}`

            callback(results.rows[0])
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
                course_credit=($6)
                WHERE id = $7     
        `

        const values = [
            data.name,
            data.avatar_url,
            date(data.birth_date).iso,
            data.email,
            data.education_level,
            data.course_credit,
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
    }
}