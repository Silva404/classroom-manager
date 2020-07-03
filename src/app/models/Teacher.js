const { date, age, formatter } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM teachers`, (err, results) => {
            if (err) throw `Database ${err}`

            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `
            INSERT INTO teachers (
            avatar_url,
            name,
            birth_date,
            education_level,
            class_type,
            subjects_taught,
            create_at
            ) VALUES ($1, $2, $3, $4,$5, $6, $7)
            RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.education_level,
            data.class_type,
            data.subjects_taught,
            date(Date.now()).iso
        ]        

        db.query(query, values, (err, results) => {
            if (err) throw `Database ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT * FROM teachers WHERE id = $1`, [id], (err, results) => {
            if (err) throw `Data ${err}`

            callback(results.rows[0])
        })
        
    }
    
}