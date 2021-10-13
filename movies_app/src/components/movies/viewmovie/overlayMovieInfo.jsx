import React, { useState } from 'react'
import css from './overlayMovieInfo.module.css'
import ReactYoutube from '../../reactYoutube/reactYoutube'

export default function OverlayMovieInfo(props) {
  const [page, setPage] = useState(0)
  function onClick() {
    props.setOverlay(false)
    props.setTrailersAC([])
  }
  function validateTrailers(trailers) {
    if(trailers.length===0){
      return false
    }else{
      return true
    }
  }
  return (
    <div className = {css.overlay} style = {{width:props.overlay?'100%':'0vh'}}>
      <div onClick = {()=>onClick()} className={css.closebtn} >&times;</div>
        <div className={css.overlay_content}>
        {/* <iframe className = {css.trailer} src={`https://www.youtube.com/embed/${validateTrailers(props.trailers)?props.trailers[page].key:''}`} title={validateTrailers(props.trailers)?props.trailers[page].name:''} frameBorder="0" allow="autoplay; encrypted-media;" allowFullScreen></iframe> */}
        {validateTrailers(props.trailers)? <ReactYoutube id = {props.trailers[page].key}/>:<h1>not found</h1>}        
        </div>
    </div>
  )
}