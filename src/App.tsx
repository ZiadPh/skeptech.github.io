
// Imports
import './styles/App.scss'
import Nav from './components/nav/nav'
import Hero from './components/hero/hero'
import Projects from './components/projects/projects'
import About from './components/about/about'
import Services from './components/services/services'
import Contact from './components/contact-us/contactus'
import {useEffect, useRef, useState} from 'react'
import ThreeCanvas from './components/canvas3d/Canvas3d'






//Render Function
const App: React.FC = () => {

  //Scroll Refs and Function
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
 
  


  const scrollToSection = (target: string) => {
    switch (target) {
      case 'section1':
        if (section1Ref && section1Ref.current) {
          section1Ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      case 'section2':
        if (section2Ref && section2Ref.current) {
          section2Ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
        case 'section3':
        if (section3Ref && section3Ref.current) {
          section3Ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
        case 'section4':
          if (section4Ref && section4Ref.current) {
            section4Ref.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
          break;
      // Add cases for other sections if needed
      default:
        break;
    }
  };

  //Scroll Function
  const [scrollTop, setScrollTop] = useState(0);
  
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  
    const scrolled = (winScroll / height);
  
    setScrollTop(scrolled); // Update scrollTop first
  };
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  



  //LocomotiveScroll
  const id = useRef(null)
  const containerRef = useRef(null)

  //Preloader
  const [preloader, setPreloader] = useState(true)
  const [timer,setTimer] = useState(3)


 
  return (
    <> 

      {/* { preloader? <div className='loader-wrapper absolute'>
        <h1>SKEPTECH</h1>
      </div>: */}
        
        <>
        {/* <LocomotiveScrollProvider

        
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
          }
        }
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
       
      > */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
        <main data-scroll-container ref={containerRef}>
            <ThreeCanvas scrollProgress={scrollTop} />
            <Nav scrollToSection={scrollToSection} />
            <Hero ref={section4Ref} />
            <Projects ref={section1Ref}/>
            <About ref={section2Ref} />
            <Services/>
            <Contact ref={section3Ref}/>
             
        </main>
      {/* </LocomotiveScrollProvider> */}
      
    </>

     

    </>
    
 
  )
}

export default App
