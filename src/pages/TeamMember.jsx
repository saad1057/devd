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
import './TeamMember.css'

const TeamMember = () => {
  const { id } = useParams()
  const member = members.find(m => m.id === parseInt(id))

  if (!member) {
    return (
      <div className="team-member-page">
        <div className="container">
          <div className="not-found">
            <h2>Member not found</h2>
            <Link to="/about" className="back-button">
              <FaArrowLeft /> Back to Team
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="team-member-page">
      <div className="container">
        <Link to="/about" className="back-button">
          <FaArrowLeft />
          <span>Back to Team</span>
        </Link>

        <div className="member-hero">
          <div className="member-image-container">
            <img 
              src={member.image} 
              alt={member.name}
              className="member-image"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=3b82f6&color=fff`
              }}
            />
          </div>
          <div className="member-info">
            <h1 className="member-name">{member.name}</h1>
            <h2 className="member-role">{member.role}</h2>
            
            <div className="member-meta">
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

            <div className="member-social">
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
            </div>

            {member.resume && (
              <a 
                href={member.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-button"
              >
                <FaFilePdf />
                <span>View Resume</span>
              </a>
            )}
          </div>
        </div>

        {member.bio && (
          <section className="member-section">
            <div className="section-header">
              <FaCode className="section-icon" />
              <h2 className="section-title">About</h2>
            </div>
            <p className="section-content">{member.bio}</p>
          </section>
        )}

        {member.experience && member.experience.length > 0 && (
          <section className="member-section">
            <div className="section-header">
              <FaBriefcase className="section-icon" />
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="experience-list">
              {member.experience.map((exp, idx) => (
                <div key={idx} className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      {exp.company && (
                        <p className="experience-company">
                          <FaBuilding /> {exp.company}
                        </p>
                      )}
                    </div>
                    {exp.duration && (
                      <div className="experience-duration">
                        <FaCalendarAlt /> {exp.duration}
                      </div>
                    )}
                  </div>
                  {exp.description && (
                    <p className="experience-description">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {member.education && member.education.length > 0 && (
          <section className="member-section">
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h2 className="section-title">Education</h2>
            </div>
            <div className="education-list">
              {member.education.map((edu, idx) => (
                <div key={idx} className="education-item">
                  <h3 className="education-degree">{edu.degree}</h3>
                  {edu.institution && <p className="education-institution">{edu.institution}</p>}
                  {edu.year && <p className="education-year">{edu.year}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {member.skills && member.skills.length > 0 && (
          <section className="member-section">
            <div className="section-header">
              <FaCode className="section-icon" />
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="skills-grid">
              {member.skills.map((skill, idx) => (
                <div key={idx} className="skill-badge">
                  {typeof skill === 'string' ? skill : skill.name}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default TeamMember
