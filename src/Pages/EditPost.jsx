import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './css/NewPost.css'

const NewPost = ({ posts, editTitle, editBody, setEditBody, setEditTitle, handleEdit }) => {
    const { id } = useParams()
    const post = posts.find((post) => post.id.toString() === id)
    useEffect(() => {
        setEditBody(post.body)
        setEditTitle(post.title)
    },[])
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
                                value={editTitle}
                                onChange={(e) => { setEditTitle(e.target.value) }}
                            />
                        </div>
                        <div>
                            <label htmlFor="post-body" >Post :</label>
                            <textarea
                                type="textarea"
                                required
                                id='post-body'
                                value={editBody}
                                onChange={(e) => { setEditBody(e.target.value) }}
                            />
                        </div>
                        <div className='post-btn'>
                            <button type='submit' className='btn btn-success' onClick={() => handleEdit(post.id)}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default NewPost