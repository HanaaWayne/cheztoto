import Api from "../dataSource/api.js"

class MovieService{

    static async getMovies(){
        return await Api.get("https://gist.githubusercontent.com/HanaaChouiter/843645f1396a6d48da021f8f43e95063/raw/10cf6daaba78b1d6d631295e87bbc98dcd2b084a/gistfile1.txt")
    }

    static getMovieById(id){

    }

    static createMovie(data){

    }

    static deleteMovieById(id){

    }

    static updateMovieById(id){

    }
}

export default MovieService