import { getMoviesByPopularity } from "../../API/API"
import { MOVIES_DATA } from "../constants"




export const getMoviesThunk = (search) => {
    return (dispatch) =>{        
        getMoviesByPopularity(search).then((data)=>{
            dispatch(setMoviesDataAC(
                data.data.results, 
                data.data.page, 
                data.data.total_pages,
                data.data.total_results
            ))
            console.log(data.data)
        })
    }
}


const setMoviesDataAC = (moviesData, page, totalPages, allMovies) =>({type: MOVIES_DATA, moviesData, page, totalPages, allMovies})