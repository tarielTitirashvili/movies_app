import React, { useEffect } from 'react'
import Movies from './movies'
import {
  getMoviesThunk,
  getGenresThunk,
  setSelectedGenreAC,
  setSelectedSearchTypeAC,
  setCurrentPageAC,
  setTrailersAC
} from '../../redux/action/moviesActions'
import { connect } from 'react-redux'
import { getTrailersThunk } from './../../redux/action/moviesActions';

export function MoviesContainer(props) {
  useEffect(() => {
    props.getMoviesThunk()
    props.getGenresThunk()
  }, [])

  return (
    <>
      <Movies
        movies={props.movies}
        currentPage={props.currentPage}
        setCurrentPageAC = {props.setCurrentPageAC}
        totalPages={props.totalPages}
        allFoundMovies={props.allFoundMovies}
        genres = {props.genres}
        setSelectedGenreAC = {props.setSelectedGenreAC}
        selectedGenre = {props.selectedGenre}
        getMoviesThunk = {props.getMoviesThunk}
        search = {props.search}
        searchBy = {props.searchBy}
        selectedSearchType = {props.selectedSearchType}
        setSelectedSearchTypeAC = {props.setSelectedSearchTypeAC}
        getTrailersThunk = {props.getTrailersThunk}
        trailers = {props.trailers}
        setTrailersAC = {props.setTrailersAC}
      />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    currentPage: state.moviesReducer.currentPage,
    totalPages: state.moviesReducer.totalPages,
    allFoundMovies: state.moviesReducer.allFoundMovies,
    genres: state.moviesReducer.genres,
    selectedGenre: state.moviesReducer.selectedGenre,
    search: state.moviesReducer.search,
    searchBy: state.moviesReducer.searchBy,
    selectedSearchType: state.moviesReducer.selectedSearchType,
    trailers: state.moviesReducer.trailers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesThunk(search, selectedGenre, selectedSearchType, page) {
      dispatch(getMoviesThunk(search, selectedGenre, selectedSearchType, page))
    },
    getGenresThunk() {
      dispatch(getGenresThunk())
    },
    setSelectedGenreAC(selectedGenre){
      dispatch(setSelectedGenreAC(selectedGenre))
    },
    setSelectedSearchTypeAC(selectedSearchType){
      dispatch(setSelectedSearchTypeAC(selectedSearchType))
    },
    setCurrentPageAC(currentPage){
      dispatch(setCurrentPageAC(currentPage))
    },
    getTrailersThunk(id){
      dispatch(getTrailersThunk(id))
    },
    setTrailersAC(trailers){
      dispatch(setTrailersAC(trailers))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
