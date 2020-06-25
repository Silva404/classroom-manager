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

        let age =  today.getFullYear() - birthDate.getFullYear()

        const month = today.getMonth() - birthDate.getMonth()
        const day = today.getDate() - birthDate.getDate()

        if (month == 0 || month < 0 && day < 0 )  {
            age = age - 1
        }
        
        return age
    }    
}







// graduation: (educationLevel, target) => {
//     const graduation = [
//         'High School',
//         'College Degree',
//         'Masters  Degree',
//         'PHD  Degree'
//     ]

//     if (educationLevel == 3) {
//         target.option.selected = 'selected'
//     }

//     // for (let i = 0; i < graduation.length; i++) {
//     //     if (teacherFound.education == 3) {
//     //         educationLevel.option.selected = 'selected'
//     //     }
//     // }
// }

// for (let i = 0; i < educationCheck.length; i++) {
//     if (data[i].education == 3) {
//         educationCheck.option[i].selected = 'selected'
//     }
// }