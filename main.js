/*====== MENU SHOW AND HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListenner('click', ()=>{
    navMenu.classList.toggle('show')
})

//HIDDEN
closeMenu.addEventListenner('click', ()=>{
    navMenu.classList.remove('show')
})
/*====== MENU SHOW AND HIDDEN =====*/


/*====== GSAP ANIMATION =====*/


//NAV


//HOME