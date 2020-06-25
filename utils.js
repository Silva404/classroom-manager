

// for (let i = 0; i < educationCheck.length; i++) {
//     if (data[i].education == 3) {
//         educationCheck.option[i].selected = 'selected'
//     }
// }

module.exports = {
    graduation: (educationLevel, target) => {
        const graduation = [
            'High School',
            'College Degree',
            'Masters  Degree',
            'PHD  Degree'
        ]

        if (educationLevel == 3) {
            target.option.selected = 'selected'
        }

        // for (let i = 0; i < graduation.length; i++) {
        //     if (teacherFound.education == 3) {
        //         educationLevel.option.selected = 'selected'
        //     }
        // }
    }
}