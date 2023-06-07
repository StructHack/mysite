import React from 'react'
import './styles/AboutMe.css'
import Projects from './Projects'

function AboutMe() {
  return (
    <div className='aboutme-container'>
      <h2>About Me</h2>
      <p className='aboutme-description'>
        Hi, I am Dipendra Shrestha. An electrical engineering student with interest in 
        information security. I am interested in web security, browser security and reverse engineering.
        <br/>
        <em>I document my findings here.</em>
      </p>
    </div>
  )
}

export default AboutMe