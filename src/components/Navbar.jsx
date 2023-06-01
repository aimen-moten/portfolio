import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {styles} from "../styles";
import {navLinks} from "../constants";
import {logo, menu, close} from "../assets";


export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 sticky`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
        to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }} 
      >
        <img src={logo} alt="logo" className='w-44 h-44 object-contain'/>
        <p className='text-white text-[28px] font-bold cursor-pointer flex'>
          Aimen &nbsp; <span className='sm:block hidden'>Moten</span>
        </p>
    </Link>
    <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#b2dcfa]"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img  src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=> setToggle(!toggle)}
          />
        </div>

        <div className={`${!toggle ? 'hidden' : 'flex' } p-6 dark-pink absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
          <ul className='list-none gap-4 flex justify-end items-start flex-col '>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-[#b2dcfa]"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}
