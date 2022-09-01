import React from 'react'

// import components
import Projects from '../components/Projects';
import { Fade, Roll, Slide } from "react-awesome-reveal";

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary '>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <Slide delay={10} duration={500} triggerOnce>
                <h2 className='section-title'>
                    Mis ultimos trabajos
                </h2>
                <p className='subtitle'>
                    Te presento algunos proyectos que he realizado en cursos y por mi cuenta.
                    Los botones debajo de cada uno de ellos estan asignados para ver el codigo y su demo :)
                </p>
                </Slide>                
            </div>
            <Projects />
        </div>
    </section>
  )
}

export default Portfolio