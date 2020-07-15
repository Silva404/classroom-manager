const actualPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (let item of menuItems) {
    if (actualPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

// paginação
// [1 ... 13, 14, 15, 16, 17 ... 20]

function paginate(selectedPages, totalPages) {
    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
        const firstAndLastItem = currentPage == 1 || currentPage == totalPages
        const pagesBeforeSelectedPage = currentPage >= selectedPages - 2
        const pagesAfterSelectedPage = currentPage <= selectedPages + 2

        if (firstAndLastItem || pagesAfterSelectedPage && pagesBeforeSelectedPage) {
            if (oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }
            if (oldPage && currentPage - oldPage == 2) {
                pages.push(oldPage + 1)
            }

            pages.push(currentPage)
            oldPage = currentPage
        }
    }

    return pages
}

const pagination = document.querySelector('.pagination')

let elements = ''

const filter = +pagination.dataset.filter
const page = +pagination.dataset.page
const total = +pagination.dataset.total
const pages = pagination(page, total)


for (let page of pages) {
    
}


