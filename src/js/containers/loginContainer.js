class LoginContainer {

    constructor(){
        const form = document.getElementById("login-form")
        const self = this
        form.onsubmit = function(e){
            self.onSubmit(e)
        }
    }

    onSubmit(e){
        e.preventDefault()
        const email = document.getElementById("email")
        const password = document.getElementById("password")

        const emailValue = email.value
        const passwordValue = password.value

        console.log(emailValue, passwordValue)
    }
}

export default LoginContainer