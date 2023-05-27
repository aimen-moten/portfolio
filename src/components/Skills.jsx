import React from "react";
import { html } from "../assets";
import { css } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from '../utils/motion'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { technologies } from '../constants'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function SkillCard(props){
    return (
        <div className="bg-[#C9E6FB] w-48 h-48 flex justify-evenly items-center flex-col rounded-full">
            <img src={props.img} alt={props.name} className=' w-24 h-24 object-contain '></img>
            <h3 className="text-black font-bold">{props.name}</h3>
        </div>
    )
}

export default function Skills(){
    return (<div className="mt-20 justify-center carousel w-full h-full p-20 bg-[#191919]">
        <div>
            <motion.div variants={textVariant()} className='mt-12'>
            <p className={styles.sectionSubText}>Languages, Frameworks And Tools</p>
            <h2 className={styles.sectionHeadText}>Skills</h2>
        </motion.div>
        </div>
        <div className="items-center mt-5 mx-auto w-full p-10 mb-10">
        
        <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={1}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    customTransition="all 1s linear"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                    transitionDuration={1000}
                    >
                    
                    
                    {technologies.map((tech) => (
                        <img className="scale-[50%]" src={tech.icon} alt={tech.name}></img>
                    ))}
                
                    {/* <div><img src={html}></img></div>
                    <div><img src={html}></img></div>
                    <div><img src={html}></img></div>
                    <div><img src={html}></img></div>
                    <div><img src={html}></img></div>
                    <div><img src={html}></img></div>
                    <div><img src={html}></img></div><div><img src={css}></img></div><div><img src={css}></img></div> */}
                    
            </Carousel>

        </div>  
       
    </div>)
    
}