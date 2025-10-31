import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/about" className="footer-link">about us.</Link>
          <Link to="/careers" className="footer-link">careers.</Link>
          <Link to="/contact" className="footer-link">contacts.</Link>
          <Link to="/portfolio" className="footer-link">#Portfolio</Link>
        </div>
        <div className="footer-copyright">
          <p>© {currentYear} DevD</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
