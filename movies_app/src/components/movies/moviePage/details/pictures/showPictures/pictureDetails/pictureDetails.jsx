import React from 'react'
import css from './pictureDetails.module.css'

export default function PictureDetails(props) {
  return (
    <div className = {css.container}>
      <a href = {`https://www.themoviedb.org/t/p/original${props.picture.file_path}`} target='_blank'>
        <img className = {css.imageSize} src = {`https://www.themoviedb.org/t/p/original${props.picture.file_path}`} />
        <div>size: {props.picture.width}x{props.picture.height}</div>
        <div>vote average:{props.picture.vote_average}</div>
        <div>vote count: {props.picture.vote_count}</div>
      </a>
    </div>
  )
}
