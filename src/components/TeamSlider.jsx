import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { members } from '../data/members'
import './TeamSlider.css'

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [expandedBio, setExpandedBio] = useState({})

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === members.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const toggleBio = (memberId) => {
    setExpandedBio((prev) => ({
      ...prev,
      [memberId]: !prev[memberId]
    }))
  }

  const currentMember = members[currentIndex]
  const isBioExpanded = expandedBio[currentMember.id]

  return (
    <div className="team-slider">
      <div className="slider-container">
        <div className="slider-content">
          <div className="member-image-container">
            <img 
              src={currentMember.image} 
              alt={currentMember.name}
              className="member-image"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentMember.name)}&size=400&background=3b82f6&color=fff`
              }}
            />
          </div>
          
          <div className="member-details">
            <div className="member-header">
              <div>
                <h3 className="member-name">{currentMember.name}</h3>
                <p className="member-title">{currentMember.role}</p>
              </div>
            </div>
            
            <div className="member-quote">
              <div className="quote-content">
                <span className="quote-mark">"</span>
                <p className={isBioExpanded ? 'quote-text expanded' : 'quote-text'}>
                  {isBioExpanded 
                    ? currentMember.bio 
                    : currentMember.bio?.substring(0, 200) + '...'
                  }
                </p>
              </div>
              
              {currentMember.bio && currentMember.bio.length > 200 && (
                <button 
                  className="view-full-link"
                  onClick={() => toggleBio(currentMember.id)}
                >
                  {isBioExpanded ? 'view less' : 'view full text'}
                </button>
              )}
            </div>

            <Link to={`/member/${currentMember.id}`} className="view-profile-link">
              View Full Profile →
            </Link>
          </div>
        </div>

        <div className="slider-navigation">
          <button className="nav-button prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <div className="slide-indicator">
            {String(currentIndex + 1).padStart(2, '0')} / {String(members.length).padStart(2, '0')}
          </div>
          <button className="nav-button next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="slider-dots">
          {members.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSlider
