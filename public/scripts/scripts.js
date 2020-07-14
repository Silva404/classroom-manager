const actualPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (let item of menuItems) {
    if (actualPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

const totalPages = 20
// paginação
let pages = [],
    oldPage

// [1 ... 13.14.15.16.17 ... 20]

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastItem = currentPage == 1 || currentPage == totalPages
    const pagesBeforeSelectedPage = currentPage
    
    if (firstAndLastItem) {
        pages.push(currentPage)
    }
}
console.log(pages)
// return pages
