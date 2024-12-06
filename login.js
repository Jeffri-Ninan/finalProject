// ================== SHOW HIDE LOGIN ===============
const passwordAccess = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass)
    const iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        // Change password to text
        input.type === 'password' ? input.type ='text' : input.type = 'password'

        // Icon change
        iconEye.classList.toggle('ri-eye-fill')
        iconEye.classList.toggle('ri-eye-off-fill')
    })
}
passwordAccess('password','loginPassword')

// ================== SHOW HIDE PASSWORD CREATE ACCOUNT ==========
const passwordRegister = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass)
    const iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        // Change password to text
        input.type === 'password' ? input.type ='text' : input.type = 'password'

        // Icon change
        iconEye.classList.toggle('ri-eye-fill')
        iconEye.classList.toggle('ri-eye-off-fill')
    })
}
passwordRegister('passwordCreate','loginPasswordCreate')

// ================== SHOW HIDE LOGIN & CREATE ACCOUNT ===============
const loginAccessRegister = document.getElementById('loginAccessRegister')
const buttonRegister = document.getElementById('loginButtonRegister')
const buttonAccess = document.getElementById('loginButtonAccess')

buttonRegister.addEventListener('click', () =>{
    loginAccessRegister.classList.add('active')
})

buttonAccess.addEventListener('click', () =>{
    loginAccessRegister.classList.remove('active')
})
// ================== Animate Page Transition =======================
// const loginForm = document.querySelector('.login__access')
// const loginForm1 = document.querySelector('.login__register') 
// const pageAnimate = document.getElementById('transition')

// pageAnimate.addEventListener('click', (e) =>{
//     e.preventDefault()
//     loginForm.classList.remove('animate')
//     loginForm1.classList.add('animate')
// })
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const selected = dropdown.querySelector('.selected')
    const options = dropdown.querySelectorAll('.menu li')

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    })

    options.forEach(option => {
        option.addEventListener('click', () =>{
            selected.innerText = option.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')
        })
    })
})

