import React from 'react'
import AvatarImage from './avatarImage'
import css from './reviews.module.css'

export default function Reviews(props) {
  

  return (
    <div className = {css.reviewContainer}>
      <div>
        <AvatarImage 
          url = {props.review.author_details.avatar_path}
        />
      </div>
      <div>
        <h4 className = {css.author}>
          {props.review.author}
          <div className = {css.writtenTitle}> It is written at: {props.review.created_at}</div>
        </h4>
        <p>{props.review.content}</p>
      </div>
    </div>
  )
}
