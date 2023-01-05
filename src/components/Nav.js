import React from 'react'

// Import navigation data
import {navigation} from '../data';

// Import link
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <ul className='flex items-center space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li className=' text-white hover:text-accent cursor-pointer' key={index}>
              <Link 
                to={item.href} 
                activeClass='active bg-secondary p-2 rounded-full' 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className='flex flex-row items-center gap-1 transition-all duration-300'
                >
                      {item.icon}
                      {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav