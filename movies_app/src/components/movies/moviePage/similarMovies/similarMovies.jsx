import React, {useEffect, useState} from 'react'
import Movie from '../../movie/movie'
import css from './similarMovies.module.css'

export default function SimilarMovies(props) {
  const [shown, setShown] = useState(0)
  const [shownMovies, setShownMovies] = useState ([])

  useEffect(()=>{
    generateSimilarMovies(props.similar)
  },[props.similar, shown])
  
  function rightClick() {
    if(props.similar.length>(shown+4)){
      setShown((prev)=>prev+4)
    }
  }
  function leftClick() {
    if((shown-4)>=0){
      setShown((prev)=>prev-4)
    }
  }

  function generateSimilarMovies(similar) {
    if(similar.length){
      let movies = []
      for(let i=shown; i<(shown+4); i++){
        movies.push(similar[i])
      }
     return setShownMovies(movies)
    }
    return null
  }

 
  return (
    <div className = {css.fontColor}>
      <div className = {css.buttonsContainer}>
        {
          (shown<4)?<div></div>:
          <div className = {css.arrow} onClick = {leftClick}>&#x2190;</div>        
        }
        <h2>similar movies</h2>
        {
          shown<(props.similar.length-4)?
          <div className = {css.arrow} onClick = {rightClick}>&#x2192;</div>:
          <div></div>
        }
      </div>
      <div className = {css.similarContainer}>
        {shownMovies?
        shownMovies.map((movie)=>{
          return <Movie key = {movie.id} movie = {movie}  setLoadingStatusAC = {props.setLoadingStatusAC} />
        })
        :''
        }
      </div>
    </div>
  )
}
