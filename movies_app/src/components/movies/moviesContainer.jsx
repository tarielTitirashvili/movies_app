import React, { useEffect } from 'react'
import Movies from './movies'
import { getMoviesThunk } from '../../redux/action/moviesActions'
import { connect } from "react-redux"

export function MoviesContainer(props) {
    useEffect(() => {
        props.getMoviesThunk()
    },[])


    return (
        <>
            <Movies 
                movies = {props.movies}
                currentPage = {props.currentPage}
                totalPages = {props.totalPages}
                allFindedMovies = {props.allFindedMovies}
            />
        </>
    )
}
const mapStateToProps =(state)=>{
    return{
        movies: state.moviesReducer.movies,
        currentPage: state.moviesReducer.currentPage,
        totalPages: state.moviesReducer.totalPages,
        allFindedMovies: state.moviesReducer.allFindedMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesThunk(search) {
            dispatch(getMoviesThunk(search))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
