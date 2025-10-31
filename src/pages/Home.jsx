import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaMobileAlt, FaServer, FaChartBar } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            welcome to <span className="gradient-text">DevD</span>
          </h1>
          <p className="hero-subtitle">Crafting digital excellence, one solution at a time</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">what we do</h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h3 className="service-title">Mobile Development</h3>
              <p className="service-description">
                We create stunning, high-performance mobile applications for iOS and Android that engage users and drive business growth.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">
                Building modern, responsive web applications with cutting-edge technologies that deliver exceptional user experiences.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaServer />
              </div>
              <h3 className="service-title">DevOps</h3>
              <p className="service-description">
                Streamlining your infrastructure with automation, CI/CD pipelines, and cloud solutions that scale with your business.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaChartBar />
              </div>
              <h3 className="service-title">Data Analysis</h3>
              <p className="service-description">
                Transforming raw data into actionable insights with advanced analytics and visualization tools that drive informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">COMPANY</h2>
              <p className="about-description">
                DevD brings years of experience in software development, a solid track record, and enduring integration background in enterprise-grade projects to our client's disposal. We specialize in mobile development, web development, DevOps, and data analysis, crafting custom solutions for industries like healthcare, fintech, e-commerce, and education. Our tools are innovative, scalable, and designed to elevate your business to new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">years</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="container">
          <h2 className="section-title">what we offer</h2>
          <div className="offer-grid">
            <div className="offer-card">
              <h3>Mobile Development</h3>
              <p>Boost engagement and enhance user experiences with our mobile development expertise, crafted to captivate and keep users coming back.</p>
            </div>
            <div className="offer-card">
              <h3>Web Development</h3>
              <p>Our web solutions simplify your workflow and provide tailored results to support smarter decision-making.</p>
            </div>
            <div className="offer-card">
              <h3>DevOps</h3>
              <p>DevD brings your infrastructure visions to life with our innovative DevOps solutions.</p>
            </div>
            <div className="offer-card">
              <h3>Data Analysis</h3>
              <p>Crafting insights, one dataset at a time - transforming data into strategic advantages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <h2 className="section-title">where we're based</h2>
          <p className="location-text">Lahore, Pakistan</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to build something amazing?</h2>
          <Link to="/contact" className="cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home