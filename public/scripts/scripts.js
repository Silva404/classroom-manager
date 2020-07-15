const { create } = require("../../src/app/models/Teacher")

const actualPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (let item of menuItems) {
    if (actualPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

let pages = [],
    totalPages = 20,
    selectedPage = 16,
    oldPage

// currentPage = 14   selectedPage = 16  ||  14-16 = -2 

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesBeforeLastPage = currentPage >= selectedPage - 2
    const pagesAfterLastPage = currentPage <= selectedPage + 2

    if (firstAndLastPage || pagesBeforeLastPage && pagesAfterLastPage) {
        if (oldPage && oldPage <= currentPage - 2) {
            pages.push('...')
        }

        pages.push(currentPage)
        oldPage = currentPage
    }
}
console.log(pages)



const pagination = document.querySelector('.pagination')

function createPagination(pagination) {
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const filter = +pagination.dataset.filter

    let elements = ''

    for (let page of pages) {
        if (String(page).includes('...')) {
            elements += `<span>${page}</span>`
        }
        else {
            if (filter) {
                elements += `<a href="?page=${page}&filter=${filter}>${page}</a>`
            } else {
                elements += `<a href="?page=${page}>${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements
}

if (pagination) {
    createPagination(pagination)
}
