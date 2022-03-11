import React, { useEffect } from 'react'
import css from './header.module.css'
import {NavLink, useHistory} from 'react-router-dom'

export default function Header(props) {
  function generateUrl() {
    return `?page=${1}${props.search?'&search='+props.search:''}${props.selectedGenre?'&genre='+props.selectedGenre:''}${props.selectedSearchType?'&type='+props.selectedSearchType:''}`
  }
  const history = useHistory()
  useEffect(()=>{
    history.push({
      search: generateUrl()
    })
  },[props.search])

  function resetSelectors() {
    props.setSelectedGenreAC(undefined)
    props.setSelectedSearchTypeAC(undefined)
    props.setSearchAC('')
  }
  function onSubmit(e) {
    e.preventDefault()
    props.getMoviesThunk(
      props.search,
      props.selectedGenre,
      props.selectedSearchType
    )
    props.setLoadingStatusAC(true)

  }
  return (
    <header className={css.header_container}>
      <NavLink onClick={resetSelectors} to = '/home'>
        <img
          className={css.logo}
          src="https://i.pinimg.com/originals/c1/ae/86/c1ae864b0ea941be0362c6d45fad10af.jpg"
          alt="logo"
        />
      </NavLink>
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
