import React from 'react'
import Fullpage,{FullPageSections, FullpageSection, FullpageNavigation  } from '@ap.cx/react-fullpage';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';


const Home = () => {
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
          <div className=' bg-[#222A35] h-screen w-screen text-white '>
            <Header/>
            <Hero/>
             
          </div>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <h1> Screen 2 </h1>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <h1> Screen 3 </h1>
        </FullpageSection>

      </FullPageSections>
   </Fullpage>
  )
}

export default Home