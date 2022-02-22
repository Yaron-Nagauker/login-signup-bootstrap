
const cover = document.getElementById('cover')
const signin = document.getElementById('sign-in')
const login = document.getElementById('log-in')
const btnSubmitLogin = document.getElementById('btn-login')
const btnSubmitSignup = document.getElementById('btn-signup')

const loginEmail = document.getElementById('login-email')
const loginPass = document.getElementById('login-pass')


const signUpUser = document.getElementById('')
const signUpEmail = document.getElementById('')
const signUpPass = document.getElementById('')




signin.addEventListener('click',(event)=>{
    console.log(event)
    cover.classList.remove('open')
})

login.addEventListener('click',(event)=>{
    console.log(event)
    cover.classList.add('open')
    
})

btnSubmitLogin.addEventListener('click',(event)=>{
    console.log(event.target)
    console.log(loginEmail.value)
    console.log(loginPass.value)

})

btnSubmitSignup.addEventListener('click',(event)=>{
    console.log(event.target)
})