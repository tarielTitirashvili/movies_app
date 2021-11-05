import React from 'react'
import css from './header.module.css'
import {useHistory} from 'react-router-dom'

export default function Header(props) {
  function generateUrl() {
    return `?page=${1}${props.search?'&search='+props.search:''}${props.selectedGenre?'&genre='+props.selectedGenre:''}${props.selectedSearchType?'&type='+props.selectedSearchType:''}`
  }
  
  const history = useHistory()

  function onSubmit(e) {
    e.preventDefault()
    props.getMoviesThunk(
      props.search,
      props.selectedGenre,
      props.selectedSearchType
    )
    props.setLoadingStatusAC(true)
    history.push({
      search: generateUrl()
    })
  }
  return (
    <header className={css.header_container}>
      <img
        className={css.logo}
        src="https://i.pinimg.com/originals/c1/ae/86/c1ae864b0ea941be0362c6d45fad10af.jpg"
        alt="logo"
      />
      <form className={css.form_container} onSubmit={onSubmit}>
        <input
          className={css.search_input}
          value={props.search}
          onChange={(e) => props.setSearchAC(e.target.value)}
          placeholder="search"
        />
      </form>
    </header>
  )
}
