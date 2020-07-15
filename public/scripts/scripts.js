
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

let elements = ''

for (let page of pages) {
    elements += `<span>${page}</span>`
}

pagination.innerHTML = elements

const page = +pagination.dataset.page
const total = +pagination.dataset.total