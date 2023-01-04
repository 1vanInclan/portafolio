import React from 'react'

// import components
import Projects from '../components/Projects';


const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary '>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>

                <h2 className='section-title'>
                    Portafolio
                </h2>
                <p className='subtitle'>
                Te presento algunos proyectos que he realizado en cursos y por mi cuenta. Los botones debajo de cada uno de ellos están asignados para ver el código y su demo ✌
                </p>
              
            </div>
            <Projects />
        </div>
    </section>
  )
}

export default Portfolio