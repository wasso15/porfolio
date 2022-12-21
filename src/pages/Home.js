import React from 'react'
import Fullpage,{FullPageSections, FullpageSection, FullpageNavigation  } from '@ap.cx/react-fullpage';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { Card } from '../components/Card';
import { Cards } from '../components/Cards';
import ButtonSecondary from '../components/ButtonSecondary';
import { Gallery } from '../components/Gallery';


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
          <div className=' bg-[#222A35] bg-LineTech bg-cover h-screen w-screen text-white '>
            <Header/>
            <Hero/>
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
           <div className=' bg-[#222A35]  h-screen w-screen text-white '>
              <SectionTitle color ={'#fffff'}> Récompense </SectionTitle>
              <Gallery/>
              {/* <ButtonSecondary> En Savoir Plus </ButtonSecondary> */}
          </div>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <h1> Screen 4 </h1>
        </FullpageSection>

      </FullPageSections>
   </Fullpage>
  )
}

export default Home