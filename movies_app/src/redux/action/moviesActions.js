import { getGenresAPI, getMoviesByPopularity, } from "../../API/API"
import { 
    GET_GENRES, 
    MOVIES_DATA, 
    SET_SEARCH_WORD, 
    SET_SELECTED_GENRE, 
    SET_SELECTED_SEARCH_TYPE,
    SET_CURRENT_PAGE,
    SET_LOADING_STATUS
} from "../constants"


export const getMoviesThunk = (search, selectedGenre, selectedSearchType, currentPage) => {
    return (dispatch) =>{
        getMoviesByPopularity(search, selectedGenre, selectedSearchType, currentPage).then((data)=>{
            dispatch(setMoviesDataAC(
                data.data.results,
                data.data.total_pages,
                Number(data.data.page),
                data.data.total_results
            ))
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


const setMoviesDataAC = (moviesData, totalPages, page, allMovies) =>({type: MOVIES_DATA, moviesData, totalPages, page, allMovies})

const setGenresAC = (genres) =>({type: GET_GENRES, genres})

export const setLoadingStatusAC = (status)=>({type:SET_LOADING_STATUS, status})

export const setSelectedGenreAC = (selectedGenre) =>({type:SET_SELECTED_GENRE, selectedGenre})

export const setSearchAC = (search) =>({type:SET_SEARCH_WORD, search})

export const setSelectedSearchTypeAC = (selectedSearchType) =>({type:SET_SELECTED_SEARCH_TYPE, selectedSearchType})

export const setCurrentPageAC = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage:Number(currentPage)})