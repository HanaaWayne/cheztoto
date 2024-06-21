import LoginContainer from "./src/js/containers/loginContainer.js";
import loginUI from "./src/js/pages/loginUI.js";
import notification from "./src/js/layouts/notification.js";
import MovieService from "./src/js/services/MovieService.js";
import afficherMovies from "./src/js/pages/afficherMovies.js";

const container = document.getElementById("container");

// window.onpopstate = () => {
//     routerPush(window.location.hash);
// };

// const routerPush = async function (hash) {

//     window.history.pushState({}, "", window.location.origin + hash);
//     // container.innerHTML = "";
//     // container.innerHTML += header();

//     if (hash == "") {
//         console.log("Vous êtes dans la page racine")
//         console.log(UsersService.getUsers())
//     }

//     if (hash == "#login") {
//     container.innerHTML += loginUI();
//     new LoginContainer();
//     }

//     if (hash == "#map") {
//         container.innerHTML += afficherMovie();
//         new MovieContainer;
//     }
// }
//routerPush(window.location.hash)

window.onpopstate = function () {
  console.log("popstate event has occurred");
  navigate(window.location.hash);
}

const navigate = async function (h) {
//console.log("navigate has been called");
  const container = document.getElementById("container")
  container.innerHTML = ""
  container.innerHTML += notification()
  // console.log(MovieService.getMovies())
  switch (h) {
    case "":
      console.log("case : home page , je suis sur la page home ")
      container.innerHTML = ""
      break
    case "#login":
      console.log("case : login page")
      container.innerHTML += loginUI()
      //console.log("login interface created");
      new LoginContainer()
      //console.log("login business logic running");
      break
    case "#movies":
      console.log("case : movie page")
      container.innerHTML += afficherMovies()
      new MovieService()
      break;
  }
};

navigate(window.location.hash);
