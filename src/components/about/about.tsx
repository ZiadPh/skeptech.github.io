import React from 'react'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-wrapper" data-scroll-section>
        <div className="about-container">
            <div className="about-title">
                What is Skeptech?
            </div>
            
            <div className="about-description">
                <span className="highlight">SkepTech</span> is an Independent collective of Developers and Designers are capable of executing a wide range of visual design services and support to other contemporary artists and organizations. Motivated by cutting-edge technologies to innovate and produce top notch quality products.
            </div>
        </div>
    </div>
  )
})

export default About