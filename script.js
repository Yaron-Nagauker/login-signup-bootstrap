
const cover = document.getElementById('cover-1')
const signin = document.getElementById('sign-in')
const login = document.getElementById('log-in')
const btnSubmitLogin = document.getElementById('btn-login')
const btnSubmitSignup = document.getElementById('btn-signup')
const loginForm = document.getElementById('login-form')
const signupForm = document.getElementById('signup-form')

const loginEmail = document.getElementById('login-email')
const loginPass = document.getElementById('login-pass')


const signUpUser = document.getElementById('')
const signUpEmail = document.getElementById('')
const signUpPass = document.getElementById('')


signin.addEventListener('click',(event)=>{
    // console.log(event)
    cover.classList.remove('open')
    loginForm.classList.add('close')
    signupForm.classList.remove('close')
})

login.addEventListener('click',(event)=>{
    // console.log(event)
    cover.classList.add('open')
    loginForm.classList.remove('close')
    signupForm.classList.add('close')
    // Disabled inputs
    
})

btnSubmitLogin.addEventListener('click',(event)=>{
    console.log(event.target)
    console.log(loginEmail.value)
    console.log(loginPass.value)

})

btnSubmitSignup.addEventListener('click',(event)=>{
    console.log(event.target)
})