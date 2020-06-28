const actualPage = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for (let item of menuItems) {
    if (actualPage == item.getAttribute('href')) {
        item.classList.add('active')
    }
}