import React, { useEffect } from 'react'
import Fullpage,{FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { Cards } from '../components/Cards';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { Maps } from '../components/Maps';
import heroData from '../heroData';
import { useCycle } from 'framer-motion';


const Home = () => {
  const {hero0, hero1, hero2, hero3}= heroData
  const [currentHero, setCurrentHero ]=useCycle(hero0, hero1, hero2, hero3); 
 
  useEffect(() => {

    const timeOut = setTimeout(setCurrentHero, 5000);
    return () => clearTimeout(timeOut);
  }, [currentHero, setCurrentHero]);    
  
  const SectionStyle= {
        height:'100vh', 
        width: '100%', 
      }
  return (
    <Fullpage>
  <FullpageNavigation/>
      <FullPageSections>

      {/* header Section */}
        <FullpageSection style={SectionStyle}>
          <div className=' bg-[#222A35]  bg-cover h-screen w-screen bg-LineTech text-white '>
            <Header/>
            <Hero heroData={currentHero}/>
          </div>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
            <div className=' bg-[#F4F4F5] bg-LineTech bg-cover h-screen w-screen text-white '>
              <SectionTitle color ={'#222A35'}> Réalisation </SectionTitle>
              <Cards> Web developpement </Cards>
              <Cards> Machine Learnings & Graphisme </Cards>
            </div>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
           <div className=' bg-[#222A35]  h-screen w-screen bg-LineTech text-white '>
              <SectionTitle color ={'#fffff'}> Récompense </SectionTitle>
              <Gallery/>
          </div>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <div className=' bg-[#F4F4F5] h-screen w-screen bg-LineTech text-white '>
              <div className=' h-[90%] flex'>
                  <div className=' w-full border md:w-1/2'> 
                      <SectionTitle color ={'#222A35'}> Contact </SectionTitle>
                      <ContactForm/>
                  </div>
                  <div className='hidden md:block w-1/2 bg-[#FFCC01]'> 
                      <Maps/>
                   </div>
              </div>

              <div className='bg-[#222A35] h-full'>
                <Footer/>
              </div>
          </div>
        </FullpageSection>

      </FullPageSections>
   </Fullpage>
  )
}

export default Home