import React from 'react'
import './css/PostPage.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PostPage = ({posts, handleDelete}) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  return (
    <main className='container'>
      <div className="title">
        <h1>Post</h1>
        <hr />
      </div>
      <div className="about-post">
        <div className='title-delete'>
        <h1>{post.title}</h1>
          <div className="group">
          <Link to={`/editpost/${post.id}`}><button className="btn btn-warning" >Edit</button></Link>
          <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
            Delete
          </button>
          </div>
        </div>
        <p>{post.datetime}</p>
        <p>{post.body}</p>
      </div>
    </main>
  )
}

export default PostPage