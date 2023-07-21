import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { ZYANA } from '../assets'
import { ZyanaShoot } from '../assets'
import { fadeIn } from '../utils/motion'
import { useNavigate } from "react-router-dom";




const Feedbacks = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = "https://www.instagram.com/zyana.co_official/";
    window.open(path, '_blank');
  };

  return (
    <div className={`lg:grid grid-cols-2 mt-20 px-20 py-12 bg-[#191919]`} id='startups'>
      <div className='text-left max-w-2xl'>
        <motion.div variants={textVariant()} className='text-left'>
            <p className={styles.sectionSubText}>My Passion</p>
            <h2 className={styles.sectionHeadText}>Startup</h2>
        </motion.div>
        <motion.p 
          variants={fadeIn("","",0.1, 1)}
          className='mt-3 text-white text-[17px] max-w-3xl leading-[30px] text-left'
        >
        As a woman of South Asian descent working in the field of technology, I frequently encountered discouragement and criticism for aspiring to achieve what some considered "unrealistic goals." Society often imposed traditional gender roles on me, suggesting that my place was in the kitchen or in "soft" professions unrelated to STEM. These pervasive remarks not only demoralized me but also affected my peers facing similar challenges.
        &nbsp; <br/>
        <br/>
        However, I chose to transform this frustration into motivation, leading me to establish <a href='https://www.instagram.com/zyana.co_official/'><span className='text-[#b2dcfa]'>Zyana</span></a>. Zyana is more than just a brand; it is a symbol of empowerment. Our mission is to address the prevalent discrimination prevalent in our society, which extends beyond gender biases and encompasses factors such as skin color, body type, and other forms of prejudice. At Zyana, we are passionate about redefining self-expression and embracing empowerment. We believe that everyone, regardless of their background or identity, deserves the opportunity to break free from societal limitations.
        &nbsp; <br/>
        <br/> 
       
        </motion.p>
          
            
      </div>
      <div className='ml-auto'>
        <img src={ZYANA} className=' rounded-full scale-75'/>
      </div>
    </div>

  )
}

export default SectionWrapper(Feedbacks,"startup");