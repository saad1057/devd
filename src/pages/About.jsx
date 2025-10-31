import React from 'react'
import TeamSlider from '../components/TeamSlider'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">who we are</h1>
          <p className="page-subtitle">PAKISTAN-BASED SOFTWARE DEVELOPMENT COMPANY</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-description">
            <p>
              DevD brings years of experience in software development, a solid track record, 
              and enduring integration background in enterprise-grade projects to our client's disposal. 
              We specialize in mobile development, web development, DevOps, and data analysis, 
              crafting custom solutions for industries like healthcare, fintech, e-commerce, and education.
            </p>
            <p>
              Our tools are innovative, scalable, and designed to elevate your business to new heights. 
              We turn your concepts into reality, all while keeping things cutting-edge and efficient.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">what we say/</h2>
          <TeamSlider />
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">what we value</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We embrace cutting-edge technologies and creative solutions to solve complex problems.</p>
            </div>
            <div className="value-card">
              <h3>Quality</h3>
              <p>Every project we deliver meets the highest standards of excellence and performance.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We work closely with our clients to understand their vision and bring it to life.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for perfection in every line of code, every design, every solution.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
