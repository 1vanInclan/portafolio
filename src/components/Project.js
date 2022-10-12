import React from 'react'
import { Fade, Roll, Slide } from "react-awesome-reveal";
//  icons
import {ImEmbed2, ImSphere} from 'react-icons/im';

const Project = ({item}) => {
  return (
    <Slide delay={10} duration={500} triggerOnce>
          <div key={item.id} className=' w-70 h-[500px] bg-secondary rounded-xl flex flex-col items-center text-center'>
      <div className='mb-8 w-full h-[60%] rounded-t-xl object-none overflow-hidden'>
        <img className='w-full h-full ' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-2'>
        {item.category}
      </p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>
        {item.name}
      </h3>
      <div className='flex flex-row text-white'>
        <a className='cursor-pointer capitalize m-4 bg-accent hover:bg-accent-hover transition-all rounded-lg p-5 hover:animate-pulse' href={item.git} target="_blank"  >
            <ImEmbed2 className='text-xl'/>
        </a>
        <a className='cursor-pointer capitalize m-4 bg-accent hover:bg-accent-hover transition-all rounded-lg p-5 hover:animate-pulse' href={item.link} target="_blank" >
          <ImSphere className='text-xl'/>
        </a>
      </div>
    </div>
    </Slide>

    
    
  )
}

export default Project