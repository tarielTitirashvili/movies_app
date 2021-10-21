import React, { useState } from 'react'
import css from './overlayMovieInfo.module.css'
import ReactYoutube from '../../reactYoutube/reactYoutube'

export default function OverlayMovieInfo(props) {
  let [page, setPage] = useState(0)
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
      <div onClick = {()=>onClick()} className={css.closebtn}>&times;</div>
        <div className={css.overlay_content}>
          { page? <div onClick = {()=>setPage(page--)} className = {css.arrow_left}>&lArr;</div>:''}
          {validateTrailers(props.trailers)? <ReactYoutube id = {props.trailers[page].key}/>:<h1>not found</h1>}
          { (page+1) <props.trailers.length? <div onClick = {()=>setPage(page++)} className = {css.arrow_right}>&rArr;</div>:''}
        </div>
    </div>
  )
}