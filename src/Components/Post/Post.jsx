import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <Link to={`/post/${post.id}`} className='Link'>
    <div className='post-post'>
      <h1>{post.title}</h1>
      <p className='datetime'>{post.datetime}</p>
      <hr />
      <p>{post.body.length <= 250 ? post.body : `${(post.body).slice(0,250)}...`}</p>
    </div>
    </Link>
  )
}

export default Post