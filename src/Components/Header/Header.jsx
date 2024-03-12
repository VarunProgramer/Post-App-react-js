import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ title, search, setSearch }) => {
    return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">

                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div>
                    <Link to='/'><p className="navbar-brand">{title}</p></Link>
                    </div>
                </div>

                <div className="collapse navbar-collapse" id="myNavbar">
                <div className="navbar-right">
                        <form action="" onSubmit={(e) => e.preventDefault()} className='search-form'>
                            <label htmlFor="search">Search</label>
                            <input type="text" id='search' placeholder='Search Post' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className='react-link'><Link to="/">Home</Link></li>
                        <li className='react-link'><Link to="/newpost">NewPost</Link></li>
                        <li className='react-link'><Link to="/about">About</Link></li>
                    </ul>
                    

                </div>
            </div>
        </div>
    )
}

export default Header