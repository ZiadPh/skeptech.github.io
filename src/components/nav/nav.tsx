import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <div className="stack">
          <span className='index1'>SKEPTECH</span>
          <span className='index2'>SKEPTECH</span>
          <span className='index3'>SKEPTECH</span>
        </div>
        <div className='clock'>2:48 PM - LIVERPOOL, UK (BST)   <span className='lowlight'>©2022</span></div>
        <ul className="pages">
            <li className='projects-nav'>PROJECTS</li>
            <li className='about-nav'>ABOUT US</li>
            <li className='contact-nav'>CONTACT</li>
        </ul>
    </div>
  )
}

export default Nav