import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='container'>
      <div className="title">
        <h1>Missing</h1>
        <hr />
      </div>
      <div className="box center">
        <h1 style={{"marginBottom": "25px"}}>ERROR 404</h1>
        <p>The page you are looking for is missing.</p>
        <p>go back to <Link to='/' style={{"color": "black"}}> home</Link> page</p>
      </div>
    </main>
  )
}

export default Missing