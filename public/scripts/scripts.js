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
        const pagesBeforeLastPage = currentPage >= selectedPage - 2
        const pagesAfterLastPage = currentPage <= selectedPage + 2

        if (firstAndLastPage || pagesBeforeLastPage && pagesAfterLastPage) {
            if (oldPage && currentPage - oldpage > 2) {
                pages.push('...')
            }

            if (oldPage && currentPage - oldpage == 2) {
                pages.push(oldpage + 1)
            }

            pages.push(currentPage)
            oldPage = currentPage
        }
    }

    return pages
}

function createPagination(pagination) {
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const filter = +pagination.dataset.filter
    const pages = paginate(page, total)

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

const pagination = document.querySelector('.pagination')

if (pagination) {
    createPagination(pagination)
}