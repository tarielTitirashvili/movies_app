import React from 'react'
import css from './filter.module.css'
import { useHistory } from 'react-router-dom';

export default function Filter(props) {
  function generateUrl() {
    return `?page=${1}${props.search?'&search='+props.search:''}${props.selectedGenre?'&genre='+props.selectedGenre:''}${props.selectedSearchType?'&type='+props.selectedSearchType:''}`
  }
  const history = useHistory()
  
  function submit(event) {
    event.preventDefault()
    props.setLoadingStatusAC(true)
    props.getMoviesThunk(props.search, props.selectedGenre, props.selectedSearchType)
    history.push({
      search: generateUrl(),
    })
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
    <form className = {css.form_container} onSubmit = {(e)=>submit(e)}>
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
        <button className = {css.submit_button} >
          submit
        </button>
    </form>
  )
}
