import React from 'react'
import GSAP from 'gsap'
import { useEffect, useRef} from 'react'

function ContactUs() {

  const title = useRef(null)
  useEffect(()=>{
    GSAP.to(title.current,{
      duration:1,
      y:0,
      opacity:1,
      stagger: .1,
      ease: "power2"
    })
  },[])
  return (
    <div className="contact-wrapper" data-scroll-section>
        <div className="contact-container">
            <div ref={title} className="contact-title">
                Contact:
            </div>
        </div>
    </div>
  )
}

export default ContactUs