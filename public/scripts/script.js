const buttons = document.querySelectorAll('.menu_item')
const menuHilight = document.querySelectorAll('.menu_hilight')

const handleButtonClick = (event) => {
    const menuItem = event.target.closest('.menu_item')
    if(!isActive(menuItem)){
        removeActivee()
        addActive()
        moveHilight()

    }
}

buttons.forEach(button => {
    button.addEventListener('click',handleButtonClick)
})

function isActive (menuItem){
    return menuItem.hasAttribute('active')
}

function removeActive (){
    document.querySelectorAll('.menu_item[active]').forEach(item=> {
        item.removeAttribute('active')
    })
}

function addActive (menuItem) {
    menuItem.setAttribute('active', '')
  }

function moveHilight(menuItem) {
    const itemTop = menuItem.offset + 8
    menuHilight.style.transform = 'translateY('+itemTop+'px)'
}

setTimeout(function () {
    moveHilight(document.querySelector('.menu_item[active]'))
}, 50);