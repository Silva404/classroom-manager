module.exports = {
    date(timestamp) {
        const date = new Date(timestamp)

        const day = `0${date.getUTCDate()}`.slice(-2)
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const year = date.getUTCFullYear()

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()

        const month = today.getMonth() - birthDate.getMonth()
        const day = today.getDate() - birthDate.getDate()

        if (month == 0 || month < 0 && day < 0) {
            age = age - 1
        }

        return age
    },
    graduation(education, id) {        
        // const options = [
        //     `<options selected>'High school'</options>`,
        //     `<options selected>'College Degree'</options>`,
        //     `<options selected>'Masters Degree'</options>`,
        //     `<options selected>'PHD Degree'</options>`
        // ]

        if (education == id){
            return education.selected
        } 
    },
    formatter: new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}