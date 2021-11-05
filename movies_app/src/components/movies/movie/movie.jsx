import React, { useState } from 'react'
import css from './movie.module.css'
import posterNotFoundImg from '../../../images/poster_not_found.png'
import { useHistory } from 'react-router'

export default function Movie(props) {
  const [focused, setFocused] = useState(false)
  const history = useHistory()

  function generateUrl() {
    return `?page=${1}${props.search?'&search='+props.search:''}${props.selectedGenre?'&genre='+props.selectedGenre:''}${props.selectedSearchType?'&type='+props.selectedSearchType:''}`
  }

  function onClick() {
    props.setLoadingStatusAC(true)
    window.scroll(0, 0)
    history.push(`/home/${props.movie.id}${generateUrl()}`)
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
    <div onClick={onClick} className={css.movie_container}>
      <div
        onMouseEnter={() => {setFocused(true)}}
        onMouseLeave={() => {setFocused(false)}}
      >
        <div className={css.movie}>
          <img
            id={props.movie.id}
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
            <div className={css.overview_text}>{props.movie.overview}</div>
            <p>Release date: {props.movie.release_date}</p>
            <div>
            </div>
          </div>
          <h4 className={css.title_color}>
            <div>{props.movie.original_title}</div>
            <div
              className={css.rating}
              style={{ color: `${ratingColor(props.movie.vote_average)}` }}
            >
              {props.movie.vote_average}
            </div>
          </h4>
        </div>
      </div>
    </div>
  )
}
