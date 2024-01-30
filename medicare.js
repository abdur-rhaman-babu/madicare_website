// find element
const menu = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')

menu.onclick = ()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}


// window.onscroll = ()=>{
//     navbar.classList.remove('active')
// }