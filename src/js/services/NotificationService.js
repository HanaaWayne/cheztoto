import paragraph from "../components/paragraph.js"

class NotificationService{

    constructor(){
        this.notifElement = document.getElementById("notification")
    }

    setMessage(val, type){
        this.notifElement.innerHTML = paragraph(`notification-animation--${type}`, val)
    }
}

export default NotificationService