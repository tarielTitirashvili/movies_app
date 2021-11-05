import React from 'react'
import css from './moviePagePagination.module.css'

export default function MoviePagePagination({currentPage, setCurrentPage, totalPages}) {

  function onClick(event) {
    setCurrentPage(event.target.value)
  }

  return (
    <div className = {css.container}>
      {
        currentPage-1>0? <div 
          onClick = {onClick}
          value = {currentPage-1} 
          className="pagination:container"
        >
        &laquo;
        </div>
        :''
      }
      {
        currentPage-1>0?<div 
          onClick = {onClick} 
          className="pagination:number"
        >
        {currentPage-1}
      </div>
      :''
      }
      {
        currentPage<totalPages? <div 
          onClick = {onClick} 
          className="pagination:number"
        >
        {currentPage}
      </div>
      :''
      }
      {
         currentPage+1<totalPages?<div 
         onClick = {onClick} 
         className="pagination:number">
         {currentPage+1}
       </div>
       :''
      }
      {
        currentPage+1<totalPages? <div 
        className="pagination:number"
        value = {currentPage+1}
        onClick = {onClick}
        >
        &raquo;
      </div>
      :''
      }
      {
        currentPage!==totalPages&&totalPages>0?<div 
          onClick = {onClick} className="pagination:number"
        >
        {totalPages}
        </div>
        :''
      }
    </div>
  )
}
