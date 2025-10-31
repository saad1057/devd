import React from 'react'
import { FaUsers } from 'react-icons/fa'
import MemberCard from './MemberCard'
import { members } from '../data/members'
import './PortfolioGrid.css'

const PortfolioGrid = () => {
  return (
    <div className="portfolio-grid-container">
      <div className="grid-header">
        <div className="section-icon-wrapper">
          <FaUsers className="section-icon" />
        </div>
        <h2 className="section-title">Our Team Members</h2>
        <p className="section-subtitle">
          Click on a member to view their detailed profile
        </p>
      </div>
      <div className="portfolio-grid">
        {members.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  )
}

export default PortfolioGrid
