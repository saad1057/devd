import React from 'react'
import { Link } from 'react-router-dom'
import './MemberCard.css'

const MemberCard = ({ member, index }) => {
  return (
    <Link 
      to={`/member/${member.id}`}
      className="member-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
        <div className="card-image-container">
          <img 
            src={member.image} 
            alt={member.name}
            className={`card-image ${member.id === 2 || member.id === 3 ? 'center-top' : ''}`}
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=3b82f6&color=fff`
            }}
          />
          <div className="card-overlay">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </div>
        </div>
        <div className="card-content">
          <h3 className="card-name">{member.name}</h3>
          <p className="card-role">{member.role}</p>
          {member.skills && member.skills.length > 0 && (
            <div className="card-skills">
              {member.skills.slice(0, 3).map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
              {member.skills.length > 3 && (
                <span className="skill-tag more">+{member.skills.length - 3}</span>
              )}
            </div>
          )}
        </div>
    </Link>
  )
}

export default MemberCard
