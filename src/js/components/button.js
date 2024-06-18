
const button = function(content, id , type){
    return(
        `
        <button class="bouton" id="${id}" type="${type}">${content}</button>
        `
    )
}

export default button