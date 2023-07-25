import React from 'react'
import GSAP from 'gsap'
import { useRef, useEffect} from 'react'
import DevMo from '/src/assets/devMo.png'
import GallerSkep from '/src/assets/GallerySkep.png'
import laptop from '/src/assets/laptop.png'
import CK from '/src/assets/CK.png'
function projects() {
  const cards = document.querySelectorAll('.project-name')
  const refff = useRef(null)
  
  useEffect(() =>{
    const refrences = document.querySelectorAll('.project-name')
    const observer = new IntersectionObserver(
      entries =>{
        entries.forEach(entry =>{
          // entry.target.classList.toggle('show', entry.isIntersecting)
          if(entry.isIntersecting)
          GSAP.to(entry.target,{
            opacity: 1,
            y: 0,
            duration: 1
          })
          // console.log(entry.target)
        })
        
      },{
        threshold: 0,
        }
    )
    refrences.forEach(reference=>{
      observer.observe(reference)
    })
  },[])
  

  const projects = [
    {
  
      name: 'DevMohamed Portofolio',
      url: DevMo,
      link: 'https://devmohamed.netlify.app/',
      dTitle: 'DEV / UX / 3D',
      description: 'This was one of the first projects in skeptech that we were proud to execute using 3D design and implementation through blender and three.js to create this immersive CV experience using visual storytelling'
    },
    {
      name: 'Circle K: Dedicated App',
      url: CK,
      link: 'https://www.behance.net/gallery/142011903/UXUI-Circle-K-Egypt-App-(Unofficial)',
      dTitle: 'UX / UI',
      description: 'Circle K is a dedicated mobile application for coffee ordering. The projects primary goal is to provide a seamless and user-friendly experience for customers to order their coffee quickly and efficiently. The application includes features such as personalized drink customization, multiple payment options, and the ability to save favorite orders for future use. The design also incorporates a loyalty points system, allowing customers to earn rewards and discounts for frequent orders'
    },
    {
      name: 'Mission bicycle: Website',
      url: laptop,
      link: 'https://www.behance.net/gallery/149359567/UX-UI-Mission-Bicycle-Company-Redesign',
      dTitle: 'WEB / UX',
      description: 'Mission Bicycles is a custom bicycle store that provides unique and personalized bikes to customers. The company’s website offers a seamless and user-friendly experience, allowing customers to easily browse through various bike models and customize their preferred options. Additionally, the website has a built-in system that allows users to preview their customized bike before placing an order.'
    },
    {
      name: 'SkepTech Gallery',
      url: GallerSkep,
      link: 'https://galleryskeptech.netlify.app/',
      dTitle: 'WEB / UX',
      description: 'The website design project for the online non-commercial photography gallery aimed to create a visually engaging and user-friendly interface to showcase the collection of photographs. The design was meant to highlight the uniqueness and individuality of each photographer while also providing an easy-to-use platform for browsing and exploring the gallery.'
    }
  ]
  return (
    <div className="projects-wrapper" id="projects-container" data-scroll-section>
      <div className="project-container" >
        
        <div  className="projects-title"><span className='projects-number'>#00</span> Projects</div>
        {
          projects.map((project, index) =>(
            <div className="project" key={index}>
              <ul>
                <li>
                  <a className='tdn' href={project.link}> 
                    <span className="project-name">
                      <span className='project-number'>
                        #0{index+1}
                      </span>
                      {project.name} 
                    </span>
                  </a>
                    <img src={project.url}>
                    </img>
                  <div className="projects-description"data-scroll data-scroll-sticky data-scroll-target="#projects-container">
                    <div className="project-title">{project.dTitle}</div><div className="project-desc">
                      {project.description}
                    </div>
                  </div>
                  <div className="dash">
                  </div>
                </li>
              </ul>
              
            </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default projects