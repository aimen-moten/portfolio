import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'


export function ProjectCard({index, name, description, tags, image, source_code_link}){
  return(
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.9)} animate={{ x: 100 }} initial={false}>
      <Tilt options={{max:45, scale:1, speed:450}} className="bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full">
        <div  className='relative w-full h-[230px]'>
          <img src={image} alt='name' className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
              <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '>
                <img src={github} alt='github' className='h-1/2 w-1/2 object-contain'/>
              </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='text-secondary mt-2 text-[14px]'>
            {description}
          </p>
        </div>
        <div className='mt-2 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt> 
    </motion.div>
  )
}


const Works = () => {
  return (
    <div className={`sm:mx-auto ${styles.padding}`}>
      <motion.div variants={textVariant()} className='mt-20 text-left'>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","",0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px] text-left'
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. To see my other projects, visit my <a href='https://github.com/aimen-moten'> <span className='text-violet-600'>GitHub</span></a>.
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

export default SectionWrapper(Works, "");