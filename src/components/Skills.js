import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

// import skills data

import {skills} from '../data'

const Skills = () => {
  return <section className='bg-tertiary py-12' id='skills'>
    <div className='container mx-auto'>
        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6 text-center'>Habilidades</h2>
        
        <div className='grid grid-cols-10 md:grid-flow-row'>
          {skills.map((skills, index) => {
              return (
                    <div className='flex items-center justify-center' key={index}>
                      <AnimationOnScroll animateIn='animate__rollIn' animateOnce={true}>
                        <img src={skills.image} alt=""></img>
                      </AnimationOnScroll>
                    </div>
                  )
              })}        
        </div>

                  
    </div>
  </section>
}

export default Skills