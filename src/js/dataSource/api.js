class Api{

    static async get(url){
    
        const result = await fetch(url, 
            {method: "GET"
            })
            const data = await result.json()
            return data
    }

    // static get(url){
    
    //     fetch(url, 
    //         {method: "GET"
    //         }).then((res =>{

    //         }).catch((err=>{
    //             console.log(err)
    //         }))
    //     )
    // }

    static sand(data, method){
        fetch(url, {
            method: method,
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default Api