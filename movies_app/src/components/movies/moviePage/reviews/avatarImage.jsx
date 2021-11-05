import React from 'react'
import css from './reviews.module.css'
import userMock from '../../../../images/userMock.png'

export default function AvatarImage(props) {
  let nonWorkingUrl = props.url
  function status(url) {
    if(url===null)return false
    return true
  }
  function generateUrl(url) {
    let newUrl = nonWorkingUrl.slice(1)
    let urlCheck = newUrl.indexOf('http')
    return urlCheck===0? newUrl+'?s=64':`https://www.themoviedb.org/t/p/w64_and_h64_face/${newUrl}`
  }
  
  return (
    <div>
      <img src={status(nonWorkingUrl)? generateUrl(nonWorkingUrl) :userMock} className = {css.avatar} alt="avatar" />
    </div>
  )
}
