import React, { useEffect } from 'react'
import './MemberModal.css'

const MemberModal = ({ member, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="modal-header">
          <div className="modal-image-container">
            <img 
              src={member.image} 
              alt={member.name}
              className="modal-image"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=3b82f6&color=fff`
              }}
            />
          </div>
          <div className="modal-title-section">
            <h2 className="modal-name">{member.name}</h2>
            <p className="modal-role">{member.role}</p>
            {member.location && (
              <p className="modal-location">{member.location}</p>
            )}
          </div>
        </div>

        <div className="modal-body">
          {member.bio && (
            <section className="modal-section">
              <h3 className="section-heading">About</h3>
              <p className="section-text">{member.bio}</p>
            </section>
          )}

          {member.experience && member.experience.length > 0 && (
            <section className="modal-section">
              <h3 className="section-heading">Experience</h3>
              <div className="experience-list">
                {member.experience.map((exp, idx) => (
                  <div key={idx} className="experience-item">
                    <div className="experience-header">
                      <h4 className="experience-title">{exp.title}</h4>
                      {exp.company && <span className="experience-company">{exp.company}</span>}
                    </div>
                    {exp.duration && <p className="experience-duration">{exp.duration}</p>}
                    {exp.description && <p className="experience-description">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {member.education && member.education.length > 0 && (
            <section className="modal-section">
              <h3 className="section-heading">Education</h3>
              <div className="education-list">
                {member.education.map((edu, idx) => (
                  <div key={idx} className="education-item">
                    <h4 className="education-degree">{edu.degree}</h4>
                    {edu.institution && <p className="education-institution">{edu.institution}</p>}
                    {edu.year && <p className="education-year">{edu.year}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {member.skills && member.skills.length > 0 && (
            <section className="modal-section">
              <h3 className="section-heading">Skills</h3>
              <div className="skills-grid">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </section>
          )}

          {member.resume && (
            <section className="modal-section">
              <a 
                href={member.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                View Full Resume
              </a>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default MemberModal
