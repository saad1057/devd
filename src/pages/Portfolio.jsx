import React from 'react'
import { FaMobileAlt, FaCode, FaServer, FaChartBar } from 'react-icons/fa'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      category: 'Mobile Development',
      description: 'A comprehensive e-commerce mobile application with seamless payment integration and real-time inventory management.',
      icon: FaMobileAlt,
      tags: ['React Native', 'Firebase', 'Stripe']
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'A full-stack web application for healthcare providers to manage patients, appointments, and medical records.',
      icon: FaCode,
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Setup',
      category: 'DevOps',
      description: 'Complete cloud infrastructure migration with CI/CD pipelines and automated deployment systems.',
      icon: FaServer,
      tags: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 4,
      title: 'Business Analytics Dashboard',
      category: 'Data Analysis',
      description: 'Advanced analytics dashboard providing real-time insights and predictive analytics for business decision-making.',
      icon: FaChartBar,
      tags: ['Python', 'Tableau', 'SQL']
    },
    {
      id: 5,
      title: 'FinTech Mobile App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      icon: FaMobileAlt,
      tags: ['Flutter', 'Blockchain', 'Security']
    },
    {
      id: 6,
      title: 'E-Learning Platform',
      category: 'Web Development',
      description: 'Interactive online learning platform with video streaming, assessments, and progress tracking.',
      icon: FaCode,
      tags: ['Next.js', 'Prisma', 'AWS']
    }
  ]

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="page-title">#Portfolio</h1>
          <p className="page-subtitle">Our Recent Work</p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-icon">
                  <project.icon />
                </div>
                <div className="portfolio-content-inner">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
