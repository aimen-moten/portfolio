import React, { useId } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
// import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import {moten} from "../assets";
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
    <div className={`px-20 py-[64px] flow-root bg-[#191919]`} id='About'>
        <div className='float-left text-left'>
          <motion.div variants={textVariant()} >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>

          <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-left text-[17px] mt-4 text-[white] max-w-3xl leading-[30px]'>
          My name is Aimen Moten (pronounced ey-mahn) and I am a sophomore at <a href='https://www.depauw.edu/'><span className='text-[#b2dcfa]'>DePauw University</span> </a>in Greencastle, Indiana.
          <br/>
          <br/>
          At DePauw, I am majoring in <span className='text-[#b2dcfa]'>Computer Science</span>, with an intended minor in <span className='text-[#b2dcfa]'>Data Science and Economics</span>. With a strong interest in community growth, I hope to harness the powers of Software Development to innovate, inspire and improve. I strive to influence my peers on campus and faciltate them in every way possible. I am also an entrepreneur, ITAP intern, freshman chair at WiCS, health-tech content writer, college counselling volunteer, a solo-traveller, a fried-chicken enthusiast and a gym-freak (hopefully one day)!
          <br/>
          <br/>
          Born in London, United Kingdom and raised in Karachi, Pakistan, I was an amalgamation of the two cultures till I arrived in Greencastle, Indiana and fell in love with the American small-town culture. I am always happy to connect and learn more about you whilst sharing my own experiences, leadership and culture so please do not hesitate to reach out.
          </motion.p>
        </div>
        <div>
          <img src={moten} className='h-80 w-80 mt-[100px] lg:float-right'/>
        </div>
      </div>
      
    </>
  )
}

export default About;