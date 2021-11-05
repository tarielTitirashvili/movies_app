import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import css from './pictures.module.css'

export default function Pictures() {
  const [posters, setPosters] = useState(false)
  const [logos, setLogos] = useState(false)
  const [backdrops, setBackdrops] = useState(false)
  const {id} = useParams()

  return (
    <div  className = {css.container}>
      <div 
        onMouseLeave = {()=>setBackdrops(false)}
        onMouseEnter = {()=>setBackdrops(true)}
        className = {css.buttonContainer}
      >
        <NavLink to = {`${id}/backdrops`} onClick = {()=>{}} className = {css.posters}>&#x2694;</NavLink>
        {backdrops? <div className ={css.hint}> backdrops</div> : '' }
      </div>
      <div
        className = {css.buttonContainer}
        onMouseLeave = {()=>setLogos(false)}
        onMouseEnter = {()=>setLogos(true)}
      >
        <NavLink to = {`${id}/logos`} className = {css.logos}>&#x2695;</NavLink>
        {logos? <div className ={css.hint}> logos</div> : '' }
      </div>
      <div
        className = {css.buttonContainer}
        onMouseLeave = {()=>setPosters(false)}
        onMouseEnter = {()=>setPosters(true)}
      >
        <NavLink to = {`${id}/posters`} className = {css.logos}>&#x269A;</NavLink>
        {posters?<div className ={css.hint}> posters</div>:''}
      </div>
    </div>
  )
}
