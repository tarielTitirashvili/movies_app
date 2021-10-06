import { MOVIES_DATA } from "../constants"

const initState = {
    movies:[],
    currentPage:1,
    totalPages:0,
    allFindedMovies:0
}

export default function moviesReducer (state = initState, action){
    switch (action.type){
        case MOVIES_DATA:
            return {
                ...state,
                movies: action.moviesData,
                currentPage: action.page,
                totalPages: action.totalPages,
                allFindedMovies: action.allMovies
            }
        default:
        return state
    }
}