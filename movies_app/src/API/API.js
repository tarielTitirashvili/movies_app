import * as axios from 'axios'

const API_MAIN_KEY = 'api_key=9851a33aa018660e47dc7758fbba0141'

let instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export const getMoviesByPopularity = async (search, selectedGenre, selectedSearchType = 'popularity.desc', page=1) => {
  return await instance.get(
    `/${
      search ? 'search' : 'discover'
    }/movie?sort_by=${selectedSearchType}&${API_MAIN_KEY}${
      search ? '&query=' + search : ''
    }${selectedGenre?'&with_genres='+selectedGenre:''}&page=${page}`
  )
}
export const getGenresAPI = async () => {
  return await instance.get('/genre/movie/list?' + API_MAIN_KEY)
}

export const getTrailersAPI = async (id) => {
  return await instance.get(
    `/movie/${id}/videos?${API_MAIN_KEY}`
  )
}

export const getReviews = async (id, page) =>{
  return await instance.get(
    `/movie/${id}/reviews?${API_MAIN_KEY}${page?`&page=${page}`:''}`
  )
}
export const getSimilarAPI = async (id, page) =>{
  return await instance.get(
    `/movie/${id}/similar?${API_MAIN_KEY}&page=${page}`
  )
}
export const getDetailsAPI = async (id) =>{
  return await instance.get(
    `/movie/${id}?${API_MAIN_KEY}`
  )
}
export const setRateAPI = async (id) =>{
  return await instance.post(
    `/movie/${id}/rating?${API_MAIN_KEY}`,{
      "value": 8.5
    }
  )
}
export const getAccountAPI = async (id) =>{
  return await instance.get(
    `/account?${API_MAIN_KEY}`
  )
}
export const getBackDropsAPI = async (id) => {
  return await instance.get(
    `/movie/${id}/images?${API_MAIN_KEY}`
  )
}