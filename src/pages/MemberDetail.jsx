import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub,
  FaGlobe,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaFilePdf,
  FaCalendarAlt,
  FaBuilding
} from 'react-icons/fa'
import { members } from '../data/members'
import './MemberDetail.css'

const MemberDetail = () => {
  const { id } = useParams()
  const member = members.find(m => m.id === parseInt(id))

  if (!member) {
    return (
      <div className="member-detail">
        <div className="not-found">
          <h2>Member not found</h2>
          <Link to="/" className="back-button">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="member-detail">
      <div className="detail-container">
        {/* Back Button */}
        <Link to="/" className="back-button">
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </Link>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-image-container">
            <img 
              src={member.image} 
              alt={member.name}
              className="hero-image"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=3b82f6&color=fff`
              }}
            />
          </div>
          <div className="hero-content">
            <h1 className="hero-name">{member.name}</h1>
            <h2 className="hero-role">{member.role}</h2>
            
            <div className="hero-meta">
              {member.location && (
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{member.location}</span>
                </div>
              )}
              {member.email && (
                <div className="meta-item">
                  <FaEnvelope />
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
              )}
              {member.phone && (
                <div className="meta-item">
                  <FaPhone />
                  <a href={`tel:${member.phone}`}>{member.phone}</a>
                </div>
              )}
            </div>

            {/* Social Links */}
            {(member.linkedin || member.github || member.website) && (
              <div className="social-links">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                  </a>
                )}
                {member.website && (
                  <a href={member.website} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGlobe />
                  </a>
                )}
              </div>
            )}

            {/* Resume Download */}
            {member.resume && (
              <a 
                href={member.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-button"
              >
                <FaFilePdf />
                <span>Download Resume</span>
              </a>
            )}
          </div>
        </div>

        {/* About Section */}
        {member.bio && (
          <section className="detail-section">
            <div className="section-header">
              <FaCode className="section-icon" />
              <h2 className="section-title">About</h2>
            </div>
            <p className="section-content bio-text">{member.bio}</p>
          </section>
        )}

        {/* Experience Section */}
        {member.experience && member.experience.length > 0 && (
          <section className="detail-section">
            <div className="section-header">
              <FaBriefcase className="section-icon" />
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="experience-timeline">
              {member.experience.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-title">{exp.title}</h3>
                        {exp.company && (
                          <div className="timeline-company">
                            <FaBuilding />
                            <span>{exp.company}</span>
                          </div>
                        )}
                      </div>
                      {exp.duration && (
                        <div className="timeline-duration">
                          <FaCalendarAlt />
                          <span>{exp.duration}</span>
                        </div>
                      )}
                    </div>
                    {exp.description && (
                      <p className="timeline-description">{exp.description}</p>
                    )}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {member.education && member.education.length > 0 && (
          <section className="detail-section">
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h2 className="section-title">Education</h2>
            </div>
            <div className="education-grid">
              {member.education.map((edu, idx) => (
                <div key={idx} className="education-card">
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-content">
                    <h3 className="education-degree">{edu.degree}</h3>
                    {edu.institution && (
                      <p className="education-institution">
                        <FaBuilding />
                        {edu.institution}
                      </p>
                    )}
                    {edu.year && (
                      <p className="education-year">
                        <FaCalendarAlt />
                        {edu.year}
                      </p>
                    )}
                    {edu.gpa && (
                      <p className="education-gpa">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {member.skills && member.skills.length > 0 && (
          <section className="detail-section">
            <div className="section-header">
              <FaCode className="section-icon" />
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="skills-grid">
              {member.skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  <span className="skill-name">{typeof skill === 'string' ? skill : skill.name}</span>
                  {skill.level && (
                    <div className="skill-level">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {member.projects && member.projects.length > 0 && (
          <section className="detail-section">
            <div className="section-header">
              <FaCode className="section-icon" />
              <h2 className="section-title">Projects</h2>
            </div>
            <div className="projects-grid">
              {member.projects.map((project, idx) => (
                <div key={idx} className="project-card">
                  <h3 className="project-title">{project.name}</h3>
                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}
                  {project.technologies && (
                    <div className="project-tech">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                  {(project.link || project.github) && (
                    <div className="project-links">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGlobe /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGithub /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {member.certifications && member.certifications.length > 0 && (
          <section className="detail-section">
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h2 className="section-title">Certifications</h2>
            </div>
            <div className="certifications-list">
              {member.certifications.map((cert, idx) => (
                <div key={idx} className="certification-item">
                  <h3 className="cert-name">{cert.name}</h3>
                  {cert.issuer && <p className="cert-issuer">{cert.issuer}</p>}
                  {cert.date && <p className="cert-date">{cert.date}</p>}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                      Verify Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default MemberDetail
