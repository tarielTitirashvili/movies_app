import React from 'react'
import Movie from './movie/movie'
import css from "./movies.module.css"

export default function Movies(props) {
    console.log(props.movies)
    return (
        <div className = {css.container} >
            {props.movies.map((movie)=>{
                return<Movie 
                    key = {movie.id}
                    movie = {movie}
                />
            })}
        </div>
    )
}
