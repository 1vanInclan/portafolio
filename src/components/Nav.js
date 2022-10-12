import React from 'react'

// Import navigation data
import {navigation} from '../data';

// Import link
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li className='text-white hover:text-accent cursor-pointer ' key={index}>
              <Link 
                to={item.href} 
                activeClass='active underline underline-offset-4 decoration-solid' 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className='transition-all duration-300'>
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