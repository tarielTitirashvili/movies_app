import { 
    getDetailsAPI, 
    getReviews, 
    getSimilarAPI, 
    getBackDropsAPI,
    getTrailersAPI
} from "../../API/API"
import { 
    SET_REVIEWS_DATA,
    SET_PAGE_FOR_REVIEWS, 
    GET_MOVIE_DETAILS, 
    SET_IMAGES_FOR_MOVIE, 
    SET_TRAILERS_DATA,
    SET_SIMILAR_MOVIES
} from "../constants"
import { setLoadingStatusAC } from "./moviesActions"


export const getReviewsThunk = (id, page) => {
    return (dispatch) =>{
        getReviews(id, page).then((data)=>{
            dispatch(setReviewsAC(data.data.results, data.data.page, data.data.total_pages))
            dispatch(setLoadingStatusAC(false))
        })
    }
}
export const getSimilarThunk = (id, page) => {
    return (dispatch) =>{
        getSimilarAPI(id, page).then((data)=>{
            dispatch(setSimilarMoviesAC(data.data.results))
        })
    }
}
export const getTrailersThunk = (id) => {
    return (dispatch) =>{
        getTrailersAPI(id).then((data)=>{
            dispatch(setTrailersAC(data.data.results))
        })
    }
}

export const getBackDropsThunk = (id) =>{
    return(dispatch)=>{
        getBackDropsAPI(id).then((data)=>{
            dispatch(setImagesAC(data.data.backdrops, data.data.posters, data.data.logos ))
        })
    }
}

export const getDetailsThunk = (id) =>{
    return (dispatch) =>{
        getDetailsAPI(id).then((data)=>{
            let d = data.data
            dispatch(setDetailsAC(d.backdrop_path,d.belongs_to_collection,d.budget,d.genres,d.homepage,d.title,d.overview,d.popularity,d.poster_path,d.production_companies,d.production_countries,d.release_date,d.revenue,d.vote_average, d.vote_count))
        })
    }
}
const setImagesAC = (backDrops, posters, logos)=>({type: SET_IMAGES_FOR_MOVIE, backDrops, posters, logos})
const setDetailsAC = (backgroundPath, collection, budget, genres, homepage, title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, vote_average, vote_count) =>({type: GET_MOVIE_DETAILS, backgroundPath, collection, budget, genres, homepage, title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, vote_average, vote_count})

const setReviewsAC = (reviews, page, totalPages) =>({type: SET_REVIEWS_DATA, reviews, page, totalPages})

export const setReviewPagesAC = (page) =>({type: SET_PAGE_FOR_REVIEWS, page})

export const setTrailersAC = (trailers) =>({type: SET_TRAILERS_DATA, trailers})

export const setSimilarMoviesAC = (similar) =>({type: SET_SIMILAR_MOVIES, similar})
