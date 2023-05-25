import React from 'react'
import { useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { linkedin, linktree, github, mail} from '../assets'



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(
    {
      name: '',
      email: '',
      message: '',
    }
  )
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {

  }
  return (
    <div className={`xl:mt-12 xl:flex-row flex-col-reverse gap-10 flex overflow-hidden ${styles.padding} bg-primary items-center justify-center`}  >
      <motion.div 
        variants={slideIn("right", "tween", 0.1, 1)}
        className='flex-0.75 p-8 rounded-2xl text-center'
      >
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h2 className={styles.sectionHeadText}>Contact Me</h2>
          <div  className='flex flex-wrap justify-center items-center gap-12 mt-10'>
          <a href='https://www.linkedin.com/in/aimen-moten/'><img src={linkedin} className='rounded-full w-36 h-36 hover:scale-125'/></a>
          <a href='https://linktr.ee/aimenmoten'><img src={linktree} className='rounded-full w-20 h-20 hover:scale-125'/></a>
          <a href='https://github.com/aimen-moten'><img src={github} className='rounded-full w-20 h-20 hover:scale-125'/></a>
          <a href="mailto:aimen.moten@gmail.com"><img src={mail} className='rounded-full w-20 h-20 hover:scale-125'/></a>
          </div>
          

          
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact,"contact");