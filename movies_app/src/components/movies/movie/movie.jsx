import React, { useState } from 'react'
import css from "./movie.module.css"

export default function Movie(props) {
    const [focused, setFocused] = useState(false)

    console.log(props.movie)
    const baseUrl = "https://image.tmdb.org/t/p/w500"
    function ratingColor(rating) {
        if(rating>=6.5){
            return "gold"
        }else if(rating>=3.5){
            return "green"
        }else{
            return "red"
        }
    }
    return (
        <div className = {css.movie_container} onMouseEnter = {()=>{setFocused(true)}} onMouseLeave = {()=>{setFocused(false)}} >
            <div className = {css.movie}>
                <img className = {css.poster} src={`${baseUrl}${props.movie.poster_path}`} alt="poster" />
                <div className = {css.overview} style = {{display:`${focused? "block" : "none" }`}} >
                    <h4>overview</h4>
                    {props.movie.overview}
                    <h5>Release date: {props.movie.release_date}</h5>    
                </div>
                <h4 className = {css.title_color}>
                    <div>
                        {props.movie.original_title}
                    </div>
                    <div style = {{color:`${ratingColor(props.movie.vote_average)}`}}>
                        {props.movie.vote_average}
                    </div>
                </h4>
            </div>
        </div>
    )
}
