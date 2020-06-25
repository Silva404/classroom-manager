module.exports = {
    date: (timestamp) => {
        const date = new Date(timestamp)

        const day = `0${date.getUTCDate()}`.slice(-2)
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const year = date.getUTCFullYear()

        return `${year}-${month}-${day}`
    },
    age: (timestamp) => {
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
    graduation: (graduation) => {
        // pegar um numero do education  => 1 a 4 
        // baseado no numero, escolher a opção assim como html com nunjucks
        const options = [
            'High school',
            'College Degree',
            'Masters Degree',
            'PHD Degree'
        ]

        for (let i = 0; ){
            
        }
    },
    formatter: new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
}