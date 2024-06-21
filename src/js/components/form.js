import button from "./button.js"
import errorEmail from "./errorEmail.js"
import input from "./input.js"


const form = function(data){

    const {email, password} = data.inputs
    const {submit, reset} = data.buttons
    const {error} = data.errors
    
    return(
        `
        <div class="container">
            <div class="formulaire">
                <form id="${data.formId}">
                <section>
                    ${input(email.id, email.placeholder, email.type)}
                    ${input(password.id, password.placeholder, password.type)}
                    <div class="Email">${errorEmail(error.id, error.content, error.type)}</div>
                </section>
                <section>
                    ${button(submit.content, submit.id, submit.type)}
                    ${button(reset.content, reset.id, reset.type)}
                </section>
                </form>
            </div>
        </div>
        `
    )
}

export default form
