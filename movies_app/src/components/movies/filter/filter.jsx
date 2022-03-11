import React, { useEffect } from 'react'
import css from './filter.module.css'

export default function Filter(props) {
  function submit(event) {
    event.preventDefault()
    props.setLoadingStatusAC(true)
  }
  function onGenreSelect (e){
    if(e.target.value === props.selectedGenre || e.target.value =='genre'){
      props.setSelectedGenreAC(undefined)
    }else{
      props.setSelectedGenreAC(e.target.value)
    }
  }
  function onSortTypeSelect(e) {
    if(e.target.value === props.selectedSearchType || e.target.value =='selected by'){
      props.setSelectedSearchTypeAC(undefined)
    }else{
      props.setSelectedSearchTypeAC(e.target.value)
    }
  }

  return (
    <form className = {css.form_container} onChange={(e)=>submit(e)}>
       <select value = {props.selectedSearchType} className = {css.selector} onChange = {(e)=>onSortTypeSelect(e)}>
          <option defaultValue value = 'selected by' > selected by </option>
          {props.searchBy.map((searchType) => {
            return (
              <option value = {searchType.name} key={searchType.id}>
                {searchType.name}
              </option>
            )
          })}
        </select>
        <select value = {props.selectedGenre} className = {css.selector} onChange = {(e)=>onGenreSelect(e)}>
          <option value = 'genre' > genre </option>
          {props.genres.map((genre) => {
            return (
              <option id={genre.id} value = {genre.id} key={genre.id}>
                {genre.name}
              </option>
            )
          })}
        </select>
    </form>
  )
}
