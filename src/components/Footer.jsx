import React from 'react'
import { FaGithub } from 'react-icons/fa'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer-main'>
      <h2>
        Wanna learn React.js? Head over to the
        <a href="https://react.dev/learn" target='black'>documentation</a>
      </h2>

      {/* <i className='bi bi-github' onClick={() => window.open("https://github.com/jainam03/digiClock-reactapp")}></i> */}
      <FaGithub 
        className='github-icon' 
        onClick={() => window.open("https://github.com/jainam03/digiClock-reactapp")}
      />

    </div>
  )
}
