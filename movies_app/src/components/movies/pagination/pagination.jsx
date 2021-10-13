import React from 'react'
import css from './pagination.module.css'
import { NavLink } from 'react-router-dom';

export default function Pagination(props) {
  
  return (
    <div>
      <div className="pagination">
        {props.currentPage>3?
          <NavLink onClick = {(e)=>{props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType,1)}} className = {css.page} to={`?page=${1}`}>1</NavLink>
          :"" 
        }
          {props.currentPage!==1?
        <NavLink onClick = {(e)=>props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType, props.currentPage-1)} className = {css.page} to={`?page=${props.currentPage-1}`}>&laquo;</NavLink>
        :""
        }
        {props.currentPage>2?
            <NavLink onClick = {(e)=>props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType, props.currentPage-2)} className = {css.page} to={`?page=${props.currentPage-2}`}>{props.currentPage-2}</NavLink>
            :"" 
        }
        {props.currentPage!==1?
            <NavLink onClick = {(e)=>props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType, props.currentPage-1)} className = {css.page} to={`?page=${props.currentPage-1}`}>{props.currentPage-1}</NavLink>
            :"" 
        }
        <NavLink className = {css.page} to={`?page=${props.currentPage}`}>{props.currentPage}</NavLink>
        {props.currentPage!==props.totalPages?
        <NavLink onClick = {(e)=>props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType, props.currentPage+1)} className = {css.page} to={`?page=${props.currentPage+1}`}>{props.currentPage +1 }</NavLink>
        :"" 
        }
          {props.currentPage<(props.totalPages-2)?
            <NavLink onClick = {(e)=>props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType, props.currentPage+2)} className = {css.page} to={`?page=${props.currentPage+2}`}>{props.currentPage+2}</NavLink>
            :"" 
        } {props.currentPage!==props.totalPages?
            <NavLink onClick = {(e)=>props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType, props.currentPage+1)} className = {css.page} to={`?page=${props.currentPage+1}`}>&raquo;</NavLink>
            :"" 
        }
        {props.currentPage<(props.totalPages-3)?
          <NavLink onClick = {(e)=>props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType, props.totalPages)} className = {css.page} to={`?page=${props.totalPages}`}>{props.totalPages}</NavLink>
          :"" 
        }
      </div>
    </div>
  )
}
