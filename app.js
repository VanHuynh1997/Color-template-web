const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})
const navbarLogo = document.querySelector('#navbar__logo')

const highLightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    const signinMenu = document.querySelector('#signin')
    let scrollPos = window.scrollY


    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        
        
        return
    }
    if((elem && window.innerWidth < 960 && scrollPos < 600) || elm){
        elm.classList.remove('highlight')
    }

}
window.addEventListener('scroll',highLightMenu)
window.addEventListener('click',highLightMenu)
