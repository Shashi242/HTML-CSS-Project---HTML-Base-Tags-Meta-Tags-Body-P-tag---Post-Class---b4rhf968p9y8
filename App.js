
const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')
const bdys = document.querySelectorAll('.bdy');
const clock = document.querySelector('.search');

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
        bdys[idx].classList.add('shw')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
    bdys.forEach(bdy => bdy.classList.remove('shw'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}
