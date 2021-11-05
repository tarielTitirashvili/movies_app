import React from 'react'
import PictureDetails from './pictureDetails/pictureDetails'
import css from './showPictures.module.css'

export default function ShowPictures(props) {
  

  return (
    <div className = {css.container}>
      {props.pictures.map((picture)=>{
        return<PictureDetails picture = {picture} />
      })}
    </div>
  )
}
