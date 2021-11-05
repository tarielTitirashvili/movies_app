import React, { useState } from 'react'
import css from './details.module.css'
import OverlayMovieInfo from '../../seeTrailer/overlayMovieInfo'
import Pictures from './pictures/pictures';

export default function Details(props) {
  const [overlay, setOverlay] = useState(false)

  function onClick() {
    setOverlay(true)
  }

  return (
    <div className = {css.background}>
      <div className = {css.backgroundPoster} style = {{
        backgroundImage: `url(https://www.themoviedb.org/t/p/original${props.backDrops.length!==0? props.backDrops[0].file_path:''})`
      }}>
        <div className = {css.backgroundTransition}>
          <h2 className = {css.main_title}>{props.title}</h2>
          <div className = {css.container}  >
            <div>
              <img className = {css.poster} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.posterPath}`} alt="poster" />
            </div>
            <div className = {css.details_container}>
              <button className = {css.view_more} onClick = {onClick} >Play Trailer</button>
              <OverlayMovieInfo
                getTrailersThunk = {props.getTrailersThunk}
                trailers={props.trailers}
                overlay={overlay}
                setOverlay={setOverlay}
                setTrailersAC={props.setTrailersAC}
              />
              {
                props.budget?
                <div>
                  budget: {props.budget}
                </div>
              :''
              }
              {
                props.homepage?
                <a 
                  className = {css.homepage}
                  href = {props.homepage} 
                  target = '_blank'
                >
                  homepage: {props.homepage}
                </a>
                :''
              }
              {
                props.overview?
                <p>
                  overview: {props.overview}
                </p>
                :''
              }
              <div>
                popularity: {props.popularity}
              </div>
              {props.productionCompanies.length>0?
                props.productionCompanies.map((company, index)=>{
                if(index ===0){
                  return'production companies:'
                }
                if(index=== props.productionCompanies.length-1){
                return ` ${company.name}. `
                }
                return ` ${company.name}, `
              })
              :''
              }
              {
                props.productionCountries.length>0?
                <div>
                  production countries:
                  {props.productionCountries.map((country, index)=>{
                    if(index=== props.productionCountries.length-1){
                      return ` ${country.name}. `
                    }
                    return ` ${country.name}, `
                  })}
                </div>
                :''
              }
              <div>
                release date: {props.releaseDate}
              </div>
              {
                props.revenue?
                <div>revenue: {props.revenue}</div>
                :''
              }
              <div>
                <div>vote average: {props.voteAverage}</div>
                <div>vote count: {props.voteCount}</div>
              </div>
              <Pictures />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
