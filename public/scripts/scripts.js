const actualPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (let item of menuItems) {
    if (actualPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

// paginação
const totalPages = 20
let pages = [],
    oldPage,
    selectedPage = 15

// [1 ... 13, 14, 15, 16, 17 ... 20]

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastItem = currentPage == 1 || currentPage == totalPages
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2

    if (firstAndLastItem || pagesAfterSelectedPage && pagesBeforeSelectedPage) {
        if (oldPage && currentPage - oldPage > 2) {
            pages.push("...")
        }

        pages.push(currentPage)
        oldPage = currentPage
    }
}
console.log(pages)
// return pages
