import { SORT_BY_ALL_ARRAY } from '../../constants'
import {
  GET_GENRES,
  MOVIES_DATA,
  SET_ALL_FOUND_MOVIES,
  SET_SEARCH_WORD,
  SET_SELECTED_GENRE,
  SET_SELECTED_SEARCH_TYPE,
  SET_CURRENT_PAGE,
  SET_TRAILERS_DATA, 
} from '../constants'

const initState = {
  movies: [],
  currentPage: 1,
  totalPages: 0,
  allFoundMovies: 0,
  genres: [],
  selectedGenre: undefined,
  search:'',
  searchBy: [...SORT_BY_ALL_ARRAY],
  selectedSearchType: undefined,
  trailers:[],
}

export default function moviesReducer(state = initState, action) {
  switch (action.type) {
    case MOVIES_DATA:
      return {
        ...state,
        movies: action.moviesData,
        totalPages: action.totalPages,
      }
    case GET_GENRES:
      return {
        ...state,
        genres: action.genres,
      }
    case SET_SELECTED_GENRE:
      return{
        ...state,
        selectedGenre: action.selectedGenre
      }
    case SET_SEARCH_WORD:
      return{
        ...state,
        search: action.search
      }
    case SET_SELECTED_SEARCH_TYPE:
      return{
        ...state,
        selectedSearchType: action.selectedSearchType
      }
    case SET_ALL_FOUND_MOVIES:
      return{
        ...state,
        allFoundMovies: action.allMovies
      }
    case SET_CURRENT_PAGE:
      return{
        ...state,
        currentPage: action.currentPage
      }
    case SET_TRAILERS_DATA:
      return{
        ...state,
        trailers: action.trailers
      }
    default:
      return state
  }
}
