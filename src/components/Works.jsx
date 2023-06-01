import React from 'react'
import { motion } from 'framer-motion'

import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'


export function ProjectCard({index, name, description, tags, image, source_code_link}){
  return(
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.9)} animate={{ x: 100 }} initial={false}>
      <div className="bg-[#C9E6FB] rounded-2xl p-5 sm:w-[360px] w-full">
        <div  className='relative w-full h-[230px]'>
          <img src={image} alt='name' className='w-full h-full object-cover rounded-2xl'/>
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>
            {name}
          </h3>
          <p className='text-black mt-2 text-[14px]'>
            {description}
          </p>
        </div>
        <div className='flex flex-wrap justify-center '>
        <div className='mt-5 flex flex-wrap gap-2 justify-start text-[16px] text-[#191919]'>
        Skills:
          {tags.map((tag) => (
            <p key={tag.name}>
              {tag.name}
            </p>
          ))}
        </div>
        <div className='relative flex justify-end m-3 card-img_hover '>
              <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '>
                <img src={github} alt='github' className='h-1/2 w-1/2 object-contain'/>
              </div>
          </div>
          </div>
      </div> 
    </motion.div>
  )
}


const Works = () => {
  return (
    <div className={`mx-auto px-20 py-[64px] flow-root`} id='projects'>
      <motion.div variants={textVariant()} className='mt-20 text-center'>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex items-center justify-center'>
        <motion.p
          variants={fadeIn("","",0.1, 1)}
          className='mt-3 text-white text-[20px] '
        >
           To see all my projects, visit my <a href='https://github.com/aimen-moten'> <span className='text-[#b2dcfa]'>GitHub</span></a>.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-5'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index = {index}
            {...project}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Works;