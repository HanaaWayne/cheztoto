import NotificationService from "../services/NotificationService.js"
import AuthService from "../services/AuthService.js"

class LoginContainer {

    constructor(){
        const form = document.getElementById("login-form")
        const self = this
        form.onsubmit = function(e){
            self.onSubmit(e)
        }
    }

    async onSubmit(e){
        e.preventDefault()
        const email = document.getElementById("email")
        const password = document.getElementById("password")

        const emailValue = email.value
        const passwordValue = password.value

        console.log(emailValue, passwordValue)

        if(!passwordValue ||  !emailValue){
            new NotificationService().setMessage("Email ou Mot de passe oublié", "negative")
            return
        }

        // const errorEmail = document.getElementById("error-email")
        // const regex = new RegExp(/^[a-z]{15}$/, "g")

        // regex.test(e.target.value) ? errorEmail.innerText  = "" : errorEmail.innerText  = "Email invalid"

    }
}

export default LoginContainer