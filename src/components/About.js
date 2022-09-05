import React from 'react'
import { Fade, Roll, Slide } from "react-awesome-reveal";

import Resumen from './Resumen';


const About = () => {
  return <section className='section bg-secondary' id='about'>
    <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
            {/* <img  className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt=''/> */}
            <div className='flex flex-col items-center text-center lg:items-start lg:text-center mb-10'>
                <div className='flex flex-col'>
                    <Slide cascade delay={10} duration={500} triggerOnce>
                    <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>
                        Sobre mi
                    </h2>
                    <p className='mb-4 text-accent'>Ingeniero en Computacion - Desarrollador Web</p>
                    <hr className='mb-8 opacity-5'/>
                    <p className='mb-8 text-start'>
                    ¡Qué tal! Mi nombre es Ivan y desde niño siempre me llamo mucho la atención, todo lo relacionado con la tecnología. Estudio ingeniería en computación y durante el proceso, me apasiono todo lo que conlleva esta hermosa carrera, desde la programación, la innovación, el computo en la nube, etc. Actualmente me encuentro en proceso de obtener mi título como Ingeniero, sin embargo, no he dejado de aprender cosas nuevas, que potenciadas con lo que aprendí en la facultad, puedo asegurar que soy una persona muy capaz de afrontar cualquier reto. Algo característico en mí, es que me agrada trabajar en equipo y superar retos complejos, junto con mis compañeros. Considero que el trabajo en equipo es fundamental, porque así el conocimiento se comparte y todos aprendemos. Actualmente me sigo incursionando en nuevas tecnologías para aprender y desarrollar cosas en distintas áreas.
                    <br/>Posdata: Me gustan mucho las tortugas. 😍
                    </p>
                    </Slide>                    
                </div>
                {/* <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all' to='contact'>Contact me</button> */}
            </div>
        </div>
        <Slide delay={10} duration={500} triggerOnce>
            <Resumen />
        </Slide>
    </div>
  </section>

};

export default About