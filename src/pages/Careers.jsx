import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaMobileAlt, FaServer, FaChartBar, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Careers.css'

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Mobile Developer',
      department: 'Mobile Development',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      icon: FaMobileAlt
    },
    {
      id: 2,
      title: 'Full Stack Web Developer',
      department: 'Web Development',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      icon: FaCode
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'DevOps',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      icon: FaServer
    },
    {
      id: 4,
      title: 'Data Analyst',
      department: 'Data Analysis',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      icon: FaChartBar
    }
  ]

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container">
          <h1 className="page-title">careers</h1>
          <p className="page-subtitle">Join Our Team</p>
        </div>
      </section>

      <section className="work-culture">
        <div className="container">
          <h2 className="section-title">how we work</h2>
          <div className="culture-grid">
            <div className="culture-item">
              <p>You gain control over your workflow, not the other way around</p>
            </div>
            <div className="culture-item">
              <p>You choose whether to work flexible hours, a hybrid schedule, or a completely remote</p>
            </div>
          </div>
        </div>
      </section>

      <section className="open-positions">
        <div className="container">
          <h2 className="section-title">open positions</h2>
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-icon">
                  <job.icon />
                </div>
                <div className="job-content">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-department">{job.department}</p>
                  <div className="job-meta">
                    <span className="job-location">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className="job-type">
                      <FaClock /> {job.type}
                    </span>
                  </div>
                  <button className="apply-button">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">why work with us</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Flexible Work</h3>
              <p>Work from anywhere, anytime - we trust you to deliver results</p>
            </div>
            <div className="benefit-card">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and professional development programs</p>
            </div>
            <div className="benefit-card">
              <h3>Competitive Packages</h3>
              <p>Attractive salaries and benefits tailored to your needs</p>
            </div>
            <div className="benefit-card">
              <h3>Innovative Projects</h3>
              <p>Work on cutting-edge projects that make a real impact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Don't see a position that fits?</h2>
          <p className="cta-text">We're always looking for talented individuals. Send us your resume!</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default Careers
