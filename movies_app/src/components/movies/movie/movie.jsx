import React, { useState } from 'react'
import css from './movie.module.css'
import posterNotFoundImg from '../../../images/poster_not_found.png'
import OverlayMovieInfo from '../viewmovie/overlayMovieInfo'

export default function Movie(props) {
  const [focused, setFocused] = useState(false)
  const [overlay, setOverlay] = useState(false)

  function onClick() {
    setOverlay(true)
    props.getTrailersThunk(props.movie.id)
  }

  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  function ratingColor(rating) {
    if (rating >= 6.5) {
      return 'gold'
    } else if (rating >= 3.5) {
      return 'green'
    } else {
      return 'red'
    }
  }
  return (
    <div
      className={css.movie_container}
      onMouseEnter={() => {
        setFocused(true)
      }}
      onMouseLeave={() => {
        setFocused(false)
      }}
    >
      <div className={css.movie}>
          <OverlayMovieInfo
            trailers = {props.trailers}
            overlay = {overlay}
            setOverlay = {setOverlay}
            setTrailersAC = {props.setTrailersAC}
          />
        <img
          id = { props.movie.id }
          onClick = {(e)=>console.log(e.target.id)}
          className={css.poster}
          src={
            props.movie.poster_path
              ? `${baseUrl}${props.movie.poster_path}`
              : posterNotFoundImg
          }
          alt="poster"
        />
        <div
          className={css.overview}
          style={{ display: `${focused ? 'block' : 'none'}` }}
        >
          <h4>overview</h4>
          {props.movie.overview}
          <p>Release date: {props.movie.release_date}</p>
          <div>
            <button onClick = {onClick} className = {css.view_more}> view more </button>
          </div>
        </div>
        <h4 className={css.title_color}>
          <div>{props.movie.original_title}</div>
          <div className = {css.rating} style={{ color: `${ratingColor(props.movie.vote_average)}` }}>
            {props.movie.vote_average}
          </div>
        </h4>
      </div>
    </div>
  )
}
