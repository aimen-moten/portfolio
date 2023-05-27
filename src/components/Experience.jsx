import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {motion} from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'
import {styles} from "../styles"
import {experiences} from "../constants";
import {SectionWrapper} from "../hoc";
import { textVariant } from '../utils/motion';


const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement  
    contentArrowStyle={{borderRight: '7px solid #232631'}} 
    contentStyle={{background: '#C9E6FB', color: 'black'}}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex items-center justify-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className='w-[90%] h-[90%] object-contain rounded-full'
        />
      </div>
    }
    
    >
      
      <div>
        <h3 className='text-black text-[24px] font-bold'>
          {experience.title}
        </h3>
        <p className='text-black text-[16px] font-semibold' style={{margin: 0}}> 
          {experience.company_name}
        </p>
      </div>
      <ul className='list-disc ml-5 mt-5 space-y-2 text-left'>
            {experience.points.map((point, index) => (
              <li key={experience-point-`${index}`} className='text-black-100 pl-1 tracking-wider text-[14px]'> 
                {point}
              </li>
            ))}
        </ul>
      <div className='vertical-timeline-element-date m-0 text-left'>
      <span className={`${styles.timeline}`}>{experience.date}</span>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div className='p-[64px] bg-[#0000]'>
      <motion.div variants={textVariant()} className='mt-20'>
          <p className={styles.sectionSubText}>Current and Previous Positions</p>
          <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience}/>
            ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work");