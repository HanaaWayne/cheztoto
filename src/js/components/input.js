const input = function(data){
    return(
        `
        <input class="identifiant" id="${data.id}" placeholder="${data.placeholder}" type="${data.type}" />
        `
    )
}

export default input
