import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-left">
          <div className="logo-container">
            <div className="logo-icon">GP</div>
          </div>
          <h1 className="header-title">Group Portfolio</h1>
        </Link>
        <div className="header-right">
          <Link to="/" className="home-link">
            <FaHome />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
