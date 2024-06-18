import button from "./button.js"
import input from "./input.js"


const form = function(data){

    const {email, password} = data.inputs
    const {submit, reset} = data.buttons
    
    return(
        `
        <div class="container">
            <div class="formulaire">
                <form id="${data.formId}">
                <section>
                    ${input(email.id, email.placeholder, email.type)}
                    ${input(password.id, password.placeholder, password.type)}
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