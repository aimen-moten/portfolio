import React from 'react'
import {BallCanvas} from "./canvas"
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { fadeIn } from '../utils/motion'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ServiceCard = (props) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 1, 0.75)}
      className='w-full p-[1px] blue-red-gradient rounded-[20px] shadow-card'>
      

      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#C9E6FB] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
      <img src={props.icon} alt={props.name} className='w-16 h-16 object-contain' />
      <h3 className='text-black text-[20px] font-bold text-center'>
        {props.name}
      </h3>
      </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <div className='bg-[#0000] p-[64px]'>
      <motion.div variants={textVariant()} className='mt-12'>
          <p className={styles.sectionSubText}>Languages, Frameworks And Tools</p>
          <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      
      
      <div className={`${styles.paddingX} mt-20 flex gap-10 flex-wrap items-center justify-center carousel`}>
      {technologies.map((tech) => (
        <div className='w-30 h-30' key={tech.name}>
          <ServiceCard icon={tech.icon} name={tech.name}></ServiceCard>
        </div>
      ))}
      </div>
    </div>
    
  )
}

export default Tech