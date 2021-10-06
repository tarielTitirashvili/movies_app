import React from 'react'
import { connect } from 'react-redux'
import { getMoviesThunk } from '../../redux/action/moviesActions'
import Header from './Header'

export function HeaderContainer(props) {

    return (
        <>
         <Header getMoviesThunk = {props.getMoviesThunk} />   
        </>
    )
}
const mapStateToProps =(state)=>{
    return{
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


export default connect( mapStateToProps, mapDispatchToProps)(HeaderContainer)