import React from 'react'
import { Link } from 'react-router-dom'
import './css/NewPost.css'

const NewPost = ({ setPosts, postBody, setPostBody, postTitle, setPostTitle, handleSubmit }) => {
  return (
    <main className='container'>
      <div className="title">
        <h1>Create Post</h1>
        <hr />
      </div>
      <div className="post-form row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form action="" onSubmit={(e) => { e.preventDefault() }}>
            <div>
              <label htmlFor="post-title" >Title :</label>
              <input
                type="text"
                id='post-title'
                required
                value={postTitle}
                onChange={(e) => { setPostTitle(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="post-body" >Post :</label>
              <textarea
                type="textarea"
                required
                id='post-body'
                value={postBody}
                onChange={(e) => { setPostBody(e.target.value) }}
              />
            </div>
            <div className='post-btn'>
              <button type='submit' className='btn btn-success' onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default NewPost