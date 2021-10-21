import React from 'react'
import css from './pagination.module.css'
import { NavLink } from 'react-router-dom'

export default function Pagination(props) {
  function onClick(page) {
    props.setLoadingStatusAC(true)
    props.getMoviesThunk(props.search,props.selectedGenre,props.selectedSearchType,page)
    window.scroll(0, 0)
  }
  function generateUrl(page) {
    return `?page=${page}${props.search?'&search='+props.search:''}${props.selectedGenre?'&genre='+props.selectedGenre:''}${props.selectedSearchType?'&type='+props.selectedSearchType:''}`
  }
  
  return (
    <div>
      <div className="pagination">
        {props.currentPage > 3 ?(
          <NavLink
            onClick={() => onClick(1)}
            className={css.page}
            to={`?page=${1}`}
          >1</NavLink>) :('')}
        {props.currentPage !== 1 ? (
          <NavLink
            onClick={() => onClick(props.currentPage - 1)}
            className={css.page}
            to={generateUrl(props.currentPage-1)}
          >
            &laquo;
          </NavLink>
        ):('')}
        {props.currentPage > 2 ? (
          <NavLink
            onClick={() =>onClick(props.currentPage - 2)}
            className={css.page}
            to={generateUrl(props.currentPage - 2)}
          >
            {props.currentPage - 2}
          </NavLink>
        ):('')}
        {props.currentPage !== 1 ? (
          <NavLink
            onClick={() =>onClick(props.currentPage - 1)}
            className={css.page}
            to={generateUrl(props.currentPage - 1)}
          >
            {props.currentPage - 1}
          </NavLink>
        ):('')}
        <NavLink className={css.page} to={`?page=${props.currentPage}`}>
          {props.currentPage}
        </NavLink>
        {props.currentPage !== props.totalPages ? (
          <NavLink
            onClick={() =>onClick(props.currentPage + 1)}
            className={css.page}
            to={generateUrl(props.currentPage + 1)}
          >
            {props.currentPage + 1}
          </NavLink>
        ) : ('')}
        {props.currentPage < props.totalPages - 2 ? (
          <NavLink
            onClick={() =>onClick(props.currentPage + 2)}
            className={css.page}
            to={generateUrl(props.currentPage + 2)}
          >
            {props.currentPage + 2}
          </NavLink>
        ):('')}{' '}
        {props.currentPage !== props.totalPages ? (
          <NavLink
            onClick={() =>onClick(props.currentPage + 1)}
            className={css.page}
            to={generateUrl(props.currentPage + 1)}
          >
            &raquo;
          </NavLink>
        ) : ('')}
        {props.currentPage < props.totalPages - 3 ? (
          <NavLink 
            onClick={() =>onClick(props.totalPages)} 
            className={css.page} 
            to={generateUrl(props.totalPages)}
          >
            {props.totalPages}
          </NavLink>
        ):('')}
      </div>
    </div>
  )
}
