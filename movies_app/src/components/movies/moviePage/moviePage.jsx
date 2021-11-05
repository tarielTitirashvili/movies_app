import React from 'react'
import Loading from '../../loading/loading'
import MoviePagePagination from './moviePagePagination/moviePagePagination'
import Reviews from './reviews/reviews'
import Details from './details/details'
import css from './moviePage.module.css'
import SimilarMovies from './similarMovies/similarMovies'

export default function MoviePage(props) {


  if(props.reviews===undefined)return<Loading />
  
  return (
    <div className = {css.pageContainer}>
      <Details
        voteCount = {props.voteCount}
        voteAverage ={props.voteAverage}
        revenue = {props.revenue}
        releaseDate = {props.releaseDate}
        productionCountries = {props.productionCountries}
        productionCompanies = {props.productionCompanies}
        posterPath = {props.posterPath}
        popularity = {props.popularity}
        overview = {props.overview}
        title = {props.title}
        homepage = {props.homepage}
        genres = {props.genres}
        budget = {props.budget}
        collection = {props.collection}
        backgroundPath= {props.backgroundPath}
        backDrops = {props.backDrops}
        setTrailersAC = {props.setTrailersAC}
        getTrailersThunk = {props.getTrailersThunk}
        trailers = {props.trailers}
      />

      <SimilarMovies similar = {props.similar} setLoadingStatusAC = {props.setLoadingStatusAC} />

      {props.reviews.length>0?
        <h2 className = {css.title}>reviews</h2>
        : <div className = {css.title}>reviews not found</div>
      }
      {props.reviews.map(review=>{
          return(
          <Reviews
            key = {review.id}
            review = {review}
          />
          )
        })
      }
      <MoviePagePagination 
        currentPage = {props.reviewsPage}
        setCurrentPage = {props.setReviewsPage}
        totalPages = {props.reviewTotalPages}
      />
    </div>
  )
}
