
const actualPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (let item of menuItems) {
    if (actualPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

let pages = [],
    totalPages = 20,
    selectedPage = 15

    // currentPage = 15   selectedPage = 16  ||  16 - 15 = 1

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesBeforeLastPage = currentPage - selectedPage <= 2

    if (firstAndLastPage || pagesBeforeLastPage) {
        pages.push(currentPage)
    }
}
console.log(pages)
