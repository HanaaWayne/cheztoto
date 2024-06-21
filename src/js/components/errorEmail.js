const errorEmail = function(id, content, type){
    return(
        `
        <p class="email-error" id="${id}" type="${type}">${content}</p>
        `
    )
}

export default errorEmail
