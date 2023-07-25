import React from 'react'
import { useClock } from 'react-use-clock'

interface NavProps {
  scrollToSection: (target: string) => void;
}


const Nav: React.FC<NavProps> = ({ scrollToSection }) => {

  const clock = useClock()


  return (
    <div className='nav'>
        <div className="stack"  onClick={() => scrollToSection('section4')}>
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
            <li><button className='projects-nav' onClick={() => scrollToSection('section1')}>PROJECTS</button></li>
            <li><button className='about-nav' onClick={() => scrollToSection('section2')}>ABOUT US</button></li>
            <li><button className='contact-nav' onClick={() => scrollToSection('section3')}>CONTACT</button></li>
        </ul>
    </div>
  )
}

export default Nav