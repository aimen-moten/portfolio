import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import Typewriter from 'typewriter-effect';
// import {Computers} from './canvas';
import {useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = "#contact";
    navigate(path);
  };
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[240px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient '/>
        </div> */}
        <div>
          <h1 className='sm:text-[30px] lg:text-[30px] text-left'>Hello, My Name is<br/><span className={`${styles.heroHeadText} text-[#915eff] `}>Aimen Moten</span></h1>
          <p className='whitespace-nowrap flex text-[30px]'>
            And I am&nbsp;
            <span className="whitespace-nowrap text-[#b2dcfa]">
              <Typewriter 
                  options={{
                    strings: ['An Incoming SWE Intern at IpserLab', 'An Information Technology Associates Program Intern','A Pakistan National Informatics Olympiad Gold Medalist','An Undergraduate Student','Freshman Chair at Women In Computer Science', 'Junior Chair for Computing Opportunities For Students of Color', 'The Chief Executive Officer at Zyana', 'A Former Content Writing Intern at Penumbra Digital', 'A Former Core Team Leader at Energy Clinic Pakistan', 'A College Counsellor at Sahaeli', 'The Lead Coding Mentor at Cyber Allies', 'The Chair at International Computer Science Association', 'A Life Long Learner', 'An Entrepreneur', 'A Travel Lover'],
                    autoStart: true,
                    loop: true,
                    
                  }}
                />
              </span>
          </p>
          <div className='text-left'>
          <a href="#contact" onClick={routeChange}>
            <button className='mt-5 bg-blue-300 hover:bg-blue-200 text-white font-bold py-2 px-4 border-b-4 border-blue-300 hover:border-blue-200 rounded'>Contact Me</button>
          </a>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero