import React, {useState} from 'react'

// import navigation data
import {navigation} from '../data'

// import icons
import {XIcon} from '@heroicons/react/outline';
import {MenuAlt3Icon} from '@heroicons/react/outline';
import {social} from '../data';


// import framer motion
import { motion } from 'framer-motion';

// import link
import { Link } from 'react-scroll';



const NavMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stifness: 160,
        damping: 60,
      },
    },
  };


  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };



  return (
    <nav className='relative'>
      {/* menu icon */}
      <div onClick={()=> setIsOpen(true)} className='cursor-pointer text-white'>
        <MenuAlt3Icon className='w-8 h-8'/>
      </div>

    {/* Circle */}
    <motion.div 
    variants={circleVariants} 
    initial='hidden' 
    animate={isOpen ? 'visible' : 'hidden'} 
    className='w-4 h-4 rounded-full bg-secondary fixed top-0 right-0'>
    </motion.div>

    {/* Menu */}
    <motion.ul
    variants={ulVariants}
    initial='hidden'
    animate={isOpen ? 'visible' : ''}
    className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
      {/* close icon */}
      <div onClick={()=> setIsOpen(false)} className='cursor-pointer absolute top-8 right-8'>
        <XIcon className='w-8 h-8'/>
      </div>
      {/* Contenido */}
      <ul className='flex flex-col w-full pl-10 gap-5 mb-10'>
      {
        navigation.map((item, index)=> {
          return (
          <li key={index} className='w-full'>
            <Link 
            to={item.href} 
            activeClass='text-accent'
            spy={true}
            smooth={true} 
            duration={500} 
            offset={-70} 
            className='flex flex-row items-center justify-start gap-2 text-xl cursor-pointer capitalize'
            onClick={()=> setIsOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
          
          );
        })
      }
      </ul>
      {
        <ul className='w-full flex justify-around'>
        {social.map((item, index) => {
          return (
            <li className='flex flex-col justify-center items-center  text-accent' key={index}>
              <a className='text-4xl' href={item.href} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
              <p>{item.name}</p>
            </li>
          )
        })}
        </ul>
      }
    </motion.ul>

    </nav>
  )
}

export default NavMobile;