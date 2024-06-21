import MovieService from "../services/MovieService.js"
import {Api} from "../dataSource/api.js"

const afficherMovies = function(){

    // const data = MovieService.getMovies()
    const movies = function(){
 
            result = data.map(movie => {
                return {
                    title: movie.title,
                    year: movie.year,
                    director: movie.director,
                    image: movie.image
                }
            })
      
    }
    const data = Api
    console.log(data)
  
    return (
        `
        ${data.map(movie => (
            `
            <p>${movie.title}</p>
            `
        ))}

        `
    )
}

export default afficherMovies