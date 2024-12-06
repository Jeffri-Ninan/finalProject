// ===================Show menu
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// menu show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// =============remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ================= add shadow header
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// ================= swiper popular
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
})

// ================= show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const scrollCart = () =>{
    const scrollCart = document.getElementById('scroll-cart')
    this.scrollY >= 200 ? scrollCart.classList.add('show-scroll-1')
    : scrollCart.classList.remove('show-scroll-1')
}
window.addEventListener('scroll', scrollCart)

// ================= scroll sections active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ================= scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

sr.reveal(`.home__data, .popular__container, .footer`)
sr.reveal(`.home__milkshake`, {delay: 1400, distance: '100px', origin: 'bottom'})
sr.reveal(`.home__ingredient`, {delay: 2000, interval: 100})
sr.reveal(`.about__data, .recipe__list, .contact__data`, {origin: 'right'})
sr.reveal(`.about__img, .recipe__img, .contact__img`, {origin: 'left'})
sr.reveal(`.products__card`, {interval: 100})

// ================== cart value
const buttons = document.querySelectorAll('.products__button')
const values = document.getElementsByClassName('quantity')
let count = 0

for (let i = 0; i < values.length; i++) {
    values[i].textContent = 0;  // Set the initial value to 0
}


buttons.forEach(button => { // Iterate over the NodeList
    button.addEventListener('click', () => {
        // Get the corresponding quantity element for this button
        // (This assumes one button per quantity element, and they are in the same order)
        const index = Array.from(buttons).indexOf(button);

        if (index >= 0 && index < values.length) {
            count = parseInt(values[index].textContent) || 0; // Get the current value, default to 0 if not a number

            count++; // Increment the count

            values[index].textContent = count;
        } else {
            console.error("Button or value element not found");
        }
    });
});