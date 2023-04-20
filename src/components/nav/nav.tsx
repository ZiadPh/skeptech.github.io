import React from 'react'
import { useClock } from 'react-use-clock'


function Nav() {

  const clock = useClock()


  return (
    <div className='nav'>
        <div className="stack">
          <span className='index1'>SKEPTECH</span>
          <span className='index2'>SKEPTECH</span>
          <span className='index3'>SKEPTECH</span>
        </div>
        <div className='clock'>
          <strong>
          {clock.hours.toString().padStart(2, '0')}:
				  {clock.minutes.toString().padStart(2, '0')}:
          {clock.seconds.toString().padStart(2, '0')}&nbsp;
          </strong>
          
          -&nbsp;&nbsp;LIVERPOOL, UK (BST)   <span className='lowlight'>©2022</span></div>
        <ul className="pages">
            <li className='projects-nav'>PROJECTS</li>
            <li className='about-nav'>ABOUT US</li>
            <li className='contact-nav'>CONTACT</li>
        </ul>
    </div>
  )
}

export default Nav