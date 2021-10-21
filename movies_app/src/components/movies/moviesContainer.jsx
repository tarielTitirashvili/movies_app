import React, { useEffect } from 'react'
import Movies from './movies'
import qs from 'qs'
import {
  getMoviesThunk,
  getGenresThunk,
  setSelectedGenreAC,
  setSelectedSearchTypeAC,
  setCurrentPageAC,
  setTrailersAC,
  setLoadingStatusAC,
  setSearchAC,
} from '../../redux/action/moviesActions'
import { connect } from 'react-redux'
import { getTrailersThunk } from './../../redux/action/moviesActions'
import Loading from '../loading/loading'
import { useLocation } from 'react-router'

export function MoviesContainer(props) {
  const location = useLocation()

  let makeNormal = location.search.slice(1)
  let { page, genre, search, type } = qs.parse(makeNormal)

  useEffect(() => {
    if (page) {
      props.setCurrentPageAC(page)
      props.setSelectedGenreAC(genre)
      props.setSearchAC(search)
      props.setSelectedSearchTypeAC(type)
      props.getMoviesThunk(search, genre, type, page)
    } else {
      props.getMoviesThunk(
        props.search,
        props.selectedGenre,
        props.selectedSearchType,
        props.currentPage
      )
    }
    props.getGenresThunk()
  }, [])

  console.log('render')

  if (props.loading) return <Loading />

  return (
    <>
      <Movies
        setLoadingStatusAC={props.setLoadingStatusAC}
        movies={props.movies}
        currentPage={props.currentPage}
        setCurrentPageAC={props.setCurrentPageAC}
        totalPages={props.totalPages}
        allFoundMovies={props.allFoundMovies}
        genres={props.genres}
        setSelectedGenreAC={props.setSelectedGenreAC}
        selectedGenre={props.selectedGenre}
        getMoviesThunk={props.getMoviesThunk}
        search={props.search}
        searchBy={props.searchBy}
        selectedSearchType={props.selectedSearchType}
        setSelectedSearchTypeAC={props.setSelectedSearchTypeAC}
        getTrailersThunk={props.getTrailersThunk}
        trailers={props.trailers}
        setTrailersAC={props.setTrailersAC}
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
    trailers: state.moviesReducer.trailers,
    loading: state.moviesReducer.loading,
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
    setSelectedGenreAC(selectedGenre) {
      dispatch(setSelectedGenreAC(selectedGenre))
    },
    setSelectedSearchTypeAC(selectedSearchType) {
      dispatch(setSelectedSearchTypeAC(selectedSearchType))
    },
    setCurrentPageAC(currentPage) {
      dispatch(setCurrentPageAC(currentPage))
    },
    getTrailersThunk(id) {
      dispatch(getTrailersThunk(id))
    },
    setTrailersAC(trailers) {
      dispatch(setTrailersAC(trailers))
    },
    setLoadingStatusAC(status) {
      dispatch(setLoadingStatusAC(status))
    },
    setSearchAC(search) {
      dispatch(setSearchAC(search))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
