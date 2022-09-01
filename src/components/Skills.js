import React from 'react'
import { Fade, Roll, Slide } from "react-awesome-reveal";

// import skills data

import {skills} from '../data'

const Skills = () => {
  return <section className='bg-tertiary py-12' id='skills'>
    <div className='container mx-auto'>
      <Slide delay={10} duration={500} triggerOnce>
        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6 text-center'>Habilidades</h2>
      </Slide>
        <div className='grid grid-cols-10 md:grid-flow-row'>
        <Roll cascade delay={10} duration={500} triggerOnce>
        {skills.map((skills, index) => {
                return (
                <div className='flex items-center justify-center' key={index}>
                    <img src={skills.image} alt=""></img>
                </div>
                )
            })}
        </Roll>
        </div>
    </div>
  </section>
}

export default Skills