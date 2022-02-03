import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loading from '../../loading/loading'
import { useParams } from 'react-router'
import MoviePage from './moviePage'
import { 
  getReviewsThunk, 
  setReviewPagesAC, 
  getSimilarThunk, 
  getDetailsThunk, 
  getBackDropsThunk,
  getTrailersThunk,
  setTrailersAC,
} from './../../../redux/action/moviePageActions';
import { setLoadingStatusAC } from './../../../redux/action/moviesActions';

export function MoviePageContainer(props){
  const {id} = useParams()
  useEffect(()=>{
    props.getReviewsThunk(id, props.reviewPage)
    props.getSimilarThunk(id, props.similarPage)
    props.getDetailsThunk(id)
    props.getBackDropsThunk(id)
  },[id, props.reviewPage])

  if (props.loading) return <Loading />

  return(
    <>
      <MoviePage
        setLoadingStatusAC = {props.setLoadingStatusAC}
        similar = {props.similar}
        voteCount = {props.vote_count}
        voteAverage ={props.vote_average}
        revenue = {props.revenue}
        releaseDate = {props.release_date}
        productionCountries = {props.production_countries}
        productionCompanies = {props.production_companies}
        posterPath = {props.poster_path}
        popularity = {props.popularity}
        overview = {props.overview}
        title = {props.title}
        homepage = {props.homepage}
        genres = {props.genres}
        budget = {props.budget}
        collection = {props.collection}
        backgroundPath= {props.backgroundPath}
        reviews = {props.reviews}
        reviewsPage = {props.reviewPage}
        setReviewsPage = {props.setReviewPagesAC}
        reviewTotalPages = {props.reviewTotalPages}
        logos = {props.logos}
        posters = {props.posters}
        backDrops = {props.backDrops}
        setTrailersAC = {props.setTrailersAC}
        getTrailersThunk = {props.getTrailersThunk}
        trailers = {props.trailers}
      />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    similar: state.moviePage.similar,
    logos: state.moviePage.logos,
    posters: state.moviePage.posters,
    backDrops: state.moviePage.backDrops,
    similarPage: state.moviePage.similarPage,
    vote_count: state.moviePage.vote_count,
    vote_average: state.moviePage.vote_average,
    revenue: state.moviePage.revenue,
    release_date: state.moviePage.release_date,
    production_countries: state.moviePage.production_countries,
    production_companies: state.moviePage.production_companies,
    poster_path: state.moviePage.poster_path,
    popularity: state.moviePage.popularity,
    overview: state.moviePage.overview,
    title: state.moviePage.title,
    homepage: state.moviePage.homepage,
    genres: state.moviePage.genres,
    budget: state.moviePage.budget,
    collection: state.moviePage.collection,
    backgroundPath: state.moviePage.backgroundPath,
    reviewTotalPages: state.moviePage.reviewTotalPages,
    reviewPage: state.moviePage.reviewPage,
    reviews: state.moviePage.reviews,
    loading: state.moviesReducer.loading,
    trailers: state.moviePage.trailers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewsThunk(id, page){
      dispatch(getReviewsThunk(id, page))
    },
    setReviewPagesAC(page){
      dispatch(setReviewPagesAC(page))
    },
    getSimilarThunk(id, page){
      dispatch(getSimilarThunk(id, page))
    },
    getDetailsThunk(id){
      dispatch(getDetailsThunk(id))
    },
    getBackDropsThunk(id){
      dispatch(getBackDropsThunk(id))
    },
    setTrailersAC(trailers) {
      dispatch(setTrailersAC(trailers))
    },
    getTrailersThunk(id) {
      dispatch(getTrailersThunk(id))
    },
    setLoadingStatusAC(status){
      dispatch(setLoadingStatusAC(status))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePageContainer)