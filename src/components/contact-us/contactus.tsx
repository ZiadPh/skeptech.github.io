import React from 'react'
import GSAP from 'gsap'
import { useEffect, useRef} from 'react'

const ContactUs = React.forwardRef<HTMLDivElement>((props, ref) => {

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
    <div ref={ref} className="contact-wrapper" data-scroll-section>
        <div className="contact-container">
            <div ref={title} className="contact-title">
                Have a <br/>Project <br/>Idea? 
            </div>
            <div className="email-us">
              
              <div className="email-text">
                 EMAIL US
              </div> 
              <a className="email" target="_blank" href='mailto:INQUIRE@SKEPTECH.CO.UK'>
                INQUIRE@SKEPTECH.CO.UK
              </a>
            </div>
            <div className="footer">
              <div className="musicc">
                <div className="music" >
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.9217 14.394C0.417838 14.394 0 14.0444 0 13.6229V5.91174C0 5.4902 0.417838 5.14062 0.9217 5.14062C1.42556 5.14062 1.8434 5.4902 1.8434 5.91174V13.6229C1.8434 14.0444 1.42556 14.394 0.9217 14.394Z" fill="#C6C2BB"/>
                  <path opacity="0.4" d="M6.46076 16.9647C5.9569 16.9647 5.53906 16.6151 5.53906 16.1936V3.34167C5.53906 2.92013 5.9569 2.57056 6.46076 2.57056C6.96463 2.57056 7.38246 2.92013 7.38246 3.34167V16.1936C7.38246 16.6151 6.96463 16.9647 6.46076 16.9647Z" fill="#C6C2BB"/>
                  <path d="M11.9988 19.5349C11.495 19.5349 11.0771 19.1853 11.0771 18.7638V0.771114C11.0771 0.349572 11.495 0 11.9988 0C12.5027 0 12.9205 0.349572 12.9205 0.771114V18.7638C12.9205 19.1853 12.5027 19.5349 11.9988 19.5349Z" fill="#C6C2BB"/>
                  <path opacity="0.4" d="M17.5399 16.9647C17.036 16.9647 16.6182 16.6151 16.6182 16.1936V3.34167C16.6182 2.92013 17.036 2.57056 17.5399 2.57056C18.0437 2.57056 18.4616 2.92013 18.4616 3.34167V16.1936C18.4616 16.6151 18.0437 16.9647 17.5399 16.9647Z" fill="#C6C2BB"/>
                  <path d="M23.0789 14.394C22.5751 14.394 22.1572 14.0444 22.1572 13.6229V5.91174C22.1572 5.4902 22.5751 5.14062 23.0789 5.14062C23.5828 5.14062 24.0006 5.4902 24.0006 5.91174V13.6229C24.0006 14.0444 23.5828 14.394 23.0789 14.394Z" fill="#C6C2BB"/>
                </svg>
      </div>
              </div>
              <div className="contact">
                MADE WITH LOVE AND COFFEE
              </div>
              <a className="instagram" target="_blank" href="https://www.instagram.com/skep.tech/">Instagram</a>
            </div>
        </div>
    </div>
  )
})

export default ContactUs