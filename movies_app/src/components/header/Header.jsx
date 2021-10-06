import React, { useState } from 'react'
import css from "./header.module.css"

export default function Header(props) {
    const [search, setSearch] = useState('')
    function onSubmit(e) {
        e.preventDefault()
        props.getMoviesThunk(search)
    }
    return (
        <header className = {css.header_container}>
            <img className = {css.logo} src="https://i.pinimg.com/originals/c1/ae/86/c1ae864b0ea941be0362c6d45fad10af.jpg" alt="logo" />
            <form className = {css.form_container} onSubmit={onSubmit}>
                <input className = {css.search_input} value = {search} onChange = {(e)=>setSearch(e.target.value)} placeholder = "search" />
            </form>
        </header>
    )
}