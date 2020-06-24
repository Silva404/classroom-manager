const fs = require('fs')
const data = require('./data.json')

exports.post = (req, res) => {
    const keys = Object.keys(req.body)
    
    // remember to make the user only type text in work field
    for (let key of keys) {
        if (req.body[key] == '') {
            return res.send('Please fill all the fields!')
        }
    }

    let { name, birth, work, education, distance } = req.body

    birth = Date.parse(req.body.birth)
    const id = data.affiliates.length + 1
    const created_at = Date.now()
    

    data.affiliates.push({ 
        name,
        birth,
        work,
        id,
        education,
        distance,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('Error ocurred while writing data.json')

        return res.redirect('/teachers')
    })    
}