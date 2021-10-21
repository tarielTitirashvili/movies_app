import React from 'react'
import { connect } from 'react-redux'
import { getMoviesThunk, setLoadingStatusAC, setSearchAC } from '../../redux/action/moviesActions'
import Header from './Header'

export function HeaderContainer(props) {

    return (
        <>
            <Header 
                setLoadingStatusAC = {props.setLoadingStatusAC}
                getMoviesThunk = {props.getMoviesThunk} 
                search = {props.search}
                setSearchAC = {props.setSearchAC}
                selectedGenre = {props.selectedGenre}
                selectedSearchType = {props.selectedSearchType}
            />   
        </>
    )
}
const mapStateToProps =(state)=>{
    return{
        allFindedMovies: state.moviesReducer.allFindedMovies,
        search: state.moviesReducer.search,
        selectedGenre: state.moviesReducer.selectedGenre,
        selectedSearchType: state.moviesReducer.selectedSearchType,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesThunk(search, selectedGenre, selectedSearchType) {
            dispatch(getMoviesThunk(search, selectedGenre, selectedSearchType))
        },
        setSearchAC(search) {
            dispatch(setSearchAC(search))
        },
        setLoadingStatusAC(status){
            dispatch(setLoadingStatusAC(status))
        }
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(HeaderContainer)
