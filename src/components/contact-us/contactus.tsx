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
                Have a <br/>Project <br/>Idea? 
            </div>
            <div className="email-us">
              
              <div className="email-text">
                 EMAIL US
              </div> 
              <div className="email">
                INQUIRE@SKEPTECH.CO.UK
              </div>
            </div>
            <div className="footer">
              <div className="musicc">ea</div>
              <div className="contact">
                CONTACT
              </div>
              <div className="instagram">Instagram</div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs