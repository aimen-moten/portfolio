import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import {moten} from "../assets";
import { SectionWrapper } from '../hoc';

const ServiceCard = (props) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5*(props.index), 0.75)}
      className='w-full blue-red-gradient p-[1px] rounded-[20px] shadow-card'>
      

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#c8a1b2] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
      <img src={props.icon} alt={props.title} className='w-16 h-16 object-contain' />
      <h3 className='text-white text-[20px] font-bold text-center'>
        {props.title}
      </h3>
      </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <div className={`${styles.paddingX} text-left flow-root py-[64px]`}>
        <div className='float-left'>
          <motion.div variants={textVariant()} >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>

          <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-left text-[17px] mt-4 text-[white] max-w-3xl leading-[30px]'>
          My name is Aimen Moten (pronounced ey-mahn) and I am a freshman at DePauw University in Greencastle, Indiana.
          <br/>
          <br/>
          At DePauw, I am majoring in Computer Science, with an intended minor in Data Science and Economics. With a strong interest in community growth, I hope to harness the powers of Software Development to innovate, inspire and improve. I strive to influence my peers on campus and faciltate them in every way possible. I am also an entrepreneur, ITAP intern, freshman chair at WiCS, health-tech content writer, college counselling volunteer, a solo-traveller, a fried-chicken enthusiast and a gym-freak (hopefully one day)!
          <br/>
          <br/>
          Born in London, United Kingdom and raised in Karachi, Pakistan, I was an amalgamation of the two cultures till I arrived in Greencastle, Indiana and fell in love with the American small-town culture. I am always happy to connect and learn more about you whilst sharing my own experiences, leadership and culture so please do not hesitate to reach out.
          </motion.p>
        </div>
        <div>
          <img src={moten} className='h-80 w-80 mt-[100px] lg:float-right hover:scale-125'/>
        </div>
      </div>
      {/* <div className={`${styles.paddingX} mt-20 flex flex-wrap gap-10 items-center justify-center`}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div> */}
    </>
  )
}

export default SectionWrapper(About, "about");