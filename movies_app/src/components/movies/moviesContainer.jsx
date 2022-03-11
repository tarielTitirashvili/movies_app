import React, { useEffect } from 'react'
import Movies from './movies'
import qs from 'qs'
import {
  getMoviesThunk,
  getGenresThunk,
  setSelectedGenreAC,
  setSelectedSearchTypeAC,
  setCurrentPageAC,
  setLoadingStatusAC,
  setSearchAC,
} from '../../redux/action/moviesActions'
import { connect } from 'react-redux'
import Loading from '../loading/loading'
import { useLocation } from 'react-router'
import { setCreateListAPI } from '../../API/API'
import { useHistory } from 'react-router-dom'

export function MoviesContainer(props) {
  const location = useLocation()
  const history = useHistory()
  let makeNormal = location.search.slice(1)
  let { page, genre, search, type } = qs.parse(makeNormal)
  useEffect(()=>{
    props.getGenresThunk()
  },[])
  setCreateListAPI()
  function generateUrl() {
    return `?page=${1}${props.search?'&search='+props.search:''}${props.selectedGenre?'&genre='+props.selectedGenre:''}${props.selectedSearchType?'&type='+props.selectedSearchType:''}`
  }
  useEffect(()=>{
    props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType)
    history.push({
      search: generateUrl(),
    })
  }, [props.selectedGenre, props.selectedSearchType])

  useEffect(() => {
    props.getMoviesThunk(
      props.search,
      props.selectedGenre,
      props.selectedSearchType,
      props.currentPage
    )
  }, [
    props.search,
    props.selectedGenre,
    props.selectedSearchType,
    props.currentPage
  ])

  useEffect(()=>{
        if(page && page != props.currentPage)props.setCurrentPageAC(page)
        if(genre) props.setSelectedGenreAC(genre)
        if(search)props.setSearchAC(search)
        if(type) props.setSelectedSearchTypeAC(type)
  },[page])

  if (props.loading) return <Loading />

  return(
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
    setLoadingStatusAC(status) {
      dispatch(setLoadingStatusAC(status))
    },
    setSearchAC(search) {
      dispatch(setSearchAC(search))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)