const actualPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (let item of menuItems) {
    if (actualPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

function paginate(selectedPage, totalPages) {
    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const secondAndLastToOnePage = currentPage == 2 || currentPage == totalPages - 1
        const pagesBeforeLastPage = currentPage >= selectedPage - 1
        const pagesAfterLastPage = currentPage <= selectedPage + 1


        if (firstAndLastPage || secondAndLastToOnePage || pagesBeforeLastPage && pagesAfterLastPage) {
            if (oldPage && currentPage - oldPage > 2) {
                pages.push('...')
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(currentPage - 1)
            }

            pages.push(currentPage)
            oldPage = currentPage
        }
    }

    return pages
}
 
//teste
const pagination = document.querySelector('.pagination')

function createPagination(pagination) {
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total

    const pages = paginate(page, total) 

    let elements = ''

    for (let page of pages) {
        if (String(page).includes('...')) {
            elements += `<span>${page}</span>`
        }
        else {
            elements += `<a href="/teachers?page=${page}">${page}</a>`
        }
    }

    pagination.innerHTML = elements
}

if (pagination) {
    createPagination(pagination)
}