import React, { forwardRef, useEffect, useRef } from 'react'
import GSAP from 'gsap'

function Hero() {
  const title = useRef(null)
  const des = useRef(null)
  const arr = [title.current, des.current]
  useEffect(()=>{
    GSAP.to('.hi',{
      duration:1,
      y:0,
      opacity:1,
      stagger: .1,
      ease: "power2"
    })
  },[])
  return (
    <div className="hero-container" id="hero-container" data-scroll-section >
        <div className="right">
          <div className="hey">
            <div className="title hi">SkepTech</div>
          </div>
          <div className="hey">
            <div className="quote hi">"A Design studio for the technologies you might be <span className="highlight">skeptical</span> about"</div>

          </div>
        </div>
      
    </div>
  )
}

export default Hero