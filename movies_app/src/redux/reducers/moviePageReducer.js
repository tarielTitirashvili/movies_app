import {
  SET_PAGE_FOR_REVIEWS,
  SET_REVIEWS_DATA,
  GET_MOVIE_DETAILS,
  SET_IMAGES_FOR_MOVIE,
  SET_TRAILERS_DATA,
  SET_SIMILAR_MOVIES,
} from '../constants'
const initState = {
 reviews: [],
 reviewPage:1,
 reviewTotalPages:0,
 similarPage:1,
 similar: [],
 backgroundPath: undefined,
 collection: {},
 budget: null,
 genres: [],
 homepage: '',
 title: '',
 overview: '',
 popularity: '',
 poster_path: '',
 production_companies: '',
 production_countries: '',
 release_date: '',
 revenue: null,
 vote_average: null,
 vote_count: null,
 backDrops: [],
 trailers:[],
}
export default function moviesReducer(state = initState, action) {
  switch (action.type) {
    case SET_REVIEWS_DATA:
      return {
        ...state,
        reviews: action.reviews,
        reviewPage: action.page,
        reviewTotalPages: action.totalPages
      }
    case SET_PAGE_FOR_REVIEWS:
      return{
        ...state,
        similarPage: action.page,
      }
    case GET_MOVIE_DETAILS:
      return{
        ...state,
        backgroundPath: action.backgroundPath,
        collection: action.collection,
        budget: action.budget,
        genres: action.genres,
        homepage: action.homepage,
        title: action.title,
        overview: action.overview,
        popularity: action.popularity,
        poster_path: action.poster_path,
        production_companies: action.production_companies,
        production_countries: action.production_countries,
        release_date: action.release_date,
        revenue: action.revenue,
        vote_average: action.vote_average,
        vote_count: action.vote_count
      }
    case SET_IMAGES_FOR_MOVIE:
      return{
        ...state,
        backDrops: action.backDrops,
      }
    case SET_SIMILAR_MOVIES:
    return{
      ...state,
      similar: action.similar,
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