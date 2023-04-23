import React from 'react'

function Services() {
  return (
    <div className="services-wrapper" data-scroll-section>
        <div className="services-container">
            <div className="services-title">
                Services:
            </div>
            <div className="wrap">
            <div className="service-title">Web Design / Development</div>
            <div className="services-description">
                In SkepTech our main aim is to contribute into a better looking an more <span className="highlight">user friendly</span> internet through designing and building modern-looking websites that matches the recent design trends as well as using <span className="highlight">cutting-edge</span> web development technologies while maintaining on delivering the <span className="highlight">best user experience</span> across all devices.
            </div>
            </div>
           <div className="wrap">
           <div className="service-title">3D Design</div>
            <div className="services-description">
            It’s also one of our aspects that <span className="highlight">we tend to contribute with our skills and time</span> into, since many websites and web-based applications are relying on 3D technologies and Immersive experiences nowadays.
            </div>
           </div>
           
            
        </div>
    </div>
  )
}

export default Services