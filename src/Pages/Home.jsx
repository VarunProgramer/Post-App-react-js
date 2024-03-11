import React from 'react'
import Feed from '../Components/Feed/Feed'

const Home = ({ posts }) => {
  return (
    <main className='container'>
      <div className="title">
        <h1>Home</h1>
        <hr />
      </div>
      {posts.length ?
        <Feed posts={posts} /> :
        <h2>No Posts</h2>
      }

    </main>
  )
}

export default Home