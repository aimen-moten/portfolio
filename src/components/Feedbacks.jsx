import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { ZYANA } from '../assets'
import { ZyanaShoot } from '../assets'
import { fadeIn } from '../utils/motion'


const Feedbacks = () => {
  return (
    <div className={`flow-root mt-20 px-20 py-12 bg-tertiary`}>
      <div className='text-left max-w-2xl float-left'>
        <motion.div variants={textVariant()} className='text-left'>
            <p className={styles.sectionSubText}>My Passion</p>
            <h2 className={styles.sectionHeadText}>Startup</h2>
        </motion.div>
        <motion.p 
          variants={fadeIn("","",0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-left'
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis augue a pellentesque fermentum. Sed ligula neque, porttitor vehicula feugiat molestie, mattis eu arcu. Nunc in lacus et justo iaculis commodo eget et sapien. Sed non ipsum vitae augue molestie vestibulum at at diam. Duis venenatis libero ut urna suscipit mattis sed eu metus. Etiam at tincidunt odio. Morbi in lobortis magna, in placerat urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        &nbsp; <br/>
        <br/>
  Sed a ornare urna, in sagittis quam. Donec egestas lacus eget viverra faucibus. Integer sagittis elit libero, ac feugiat tortor tempor non. Pellentesque purus ipsum, molestie eget aliquam nec, fermentum at nisl. Pellentesque nisl eros, porta scelerisque neque a, venenatis fermentum arcu. 
        </motion.p>
      </div>
      <div className='float-right'>
        <img src={ZYANA} className='max-w-xl max-w-xl rounded-full scale-75'/>
      </div>
    </div>

  )
}

export default Feedbacks;