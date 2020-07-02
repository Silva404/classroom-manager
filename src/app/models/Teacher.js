const { date, age, formatter } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all() {

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
            ) VALUE ($1, $2, $3, $4,$5, $6, $7)
            RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth_date).iso,
            data.education_level,
            data.class_type,
            data.subjects_taught,
            date(data.create_at).iso
        ]        

        db.query(query, values, (err, results) => {
            if (err) throw `Database ${err}`
        })
    }
}