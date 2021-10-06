import * as axios from 'axios'

const API_MAIN_KEY = "&api_key=9851a33aa018660e47dc7758fbba0141"


let instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const getMoviesByPopularity = async (search)=>{
    return await instance.get(`/${search?"search":"discover"}/movie?sort_by=popularity.desc${API_MAIN_KEY}${search?"&query="+search:""}`)
}