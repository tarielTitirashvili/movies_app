import React, { useState, useEffect } from 'react'
import css from './overlayMovieInfo.module.css'
import ReactYoutube from '../../reactYoutube/reactYoutube'
import { useParams } from 'react-router'


export default function OverlayMovieInfo(props) {
  
  let [page, setPage] = useState(0)
  const {id} = useParams()
  function onClick() {
    props.setOverlay(false)
    props.setTrailersAC([])
  }
  useEffect(()=>{
    props.getTrailersThunk(id)
  },[props.overlay])

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