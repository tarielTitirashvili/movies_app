import { getGenresAPI, getMoviesByPopularity, getTrailers } from "../../API/API"
import { 
    GET_GENRES, 
    MOVIES_DATA, 
    SET_ALL_FOUND_MOVIES, 
    SET_SEARCH_WORD, 
    SET_SELECTED_GENRE, 
    SET_SELECTED_SEARCH_TYPE, 
    SET_CURRENT_PAGE, 
    SET_TRAILERS_DATA
} from "../constants"


export const getMoviesThunk = (search, selectedGenre, selectedSearchType, currentPage) => {
    return (dispatch) =>{
        getMoviesByPopularity(search, selectedGenre, selectedSearchType, currentPage).then((data)=>{
            console.log(data)
            dispatch(setMoviesDataAC(
                data.data.results,
                data.data.total_pages,
            ))
            dispatch(setCurrentPageAC(data.data.page))
            dispatch(setAllFoundMoviesAC(data.data.total_results))
        })
    }
}
export const getGenresThunk = () =>{
    return(dispatch) =>{
        getGenresAPI().then((data)=>{
            dispatch(setGenresAC(data.data.genres))
        })
    }
}

export const getTrailersThunk = (id) => {
    return (dispatch) =>{
        getTrailers(id).then((data)=>{
            console.log(data)
            dispatch(setTrailersAC(data.data.results))
        })
    }
}

const setMoviesDataAC = (moviesData, totalPages) =>({type: MOVIES_DATA, moviesData, totalPages})

const setGenresAC = (genres) =>({type: GET_GENRES, genres})

const setAllFoundMoviesAC = (allMovies) =>({type: SET_ALL_FOUND_MOVIES, allMovies})

export const setTrailersAC = (trailers) =>({type: SET_TRAILERS_DATA, trailers})

export const setSelectedGenreAC = (selectedGenre) =>({type:SET_SELECTED_GENRE, selectedGenre})

export const setSearchAC = (search) =>({type:SET_SEARCH_WORD, search})

export const setSelectedSearchTypeAC = (selectedSearchType) =>({type:SET_SELECTED_SEARCH_TYPE, selectedSearchType})

export const setCurrentPageAC = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})