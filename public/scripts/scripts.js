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
        console.log(`oldPage: ${oldPage}`)
        // console.log(`currentPage: ${currentPage}`)


        if (firstAndLastPage || pagesBeforeLastPage && pagesAfterLastPage) {
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

