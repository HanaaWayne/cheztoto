import LoginContainer from "./src/js/containers/loginContainer.js"
import loginUI from "./src/js/pages/loginUI.js"

const container = document.getElementById("container")

const routerPush = function(hash){
    if(hash == ""){
        console.log("Vous êtes dans la page racine")
    }
    if(hash == "#login"){
        container.innerHTML += loginUI()
        new LoginContainer
    }

}

routerPush(window.location.hash)