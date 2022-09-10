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
                    ¡Hola! Mi nombre es Iván, y desde niño siempre me llamó mucho la atención todo lo relacionado a la tecnología. Estudié ingeniería en computación y durante la experiencia, me apasionó todo lo que conlleva esta hermosa carrera, desde la programación, la innovación, hasta el cómputo en la nube, etc.
                    <br/>
                    Actualmente me encuentro en proceso de obtener mi título como Ingeniero. Sin embargo, no he dejado de capacitarme y aprender cosas nuevas, de mantenerme en constante actualización, que potenciadas con lo que aprendí en la facultad, puedo asegurar que soy una persona muy capaz de afrontar cualquier desafío.
                    <br/>
                    Algo característico en mí, es que me agrada trabajar en equipo y superar retos complejos, junto con mis compañeros. Considero que el trabajo en grupo es fundamental, porque así el conocimiento se comparte y todos aprendemos.
                    <br/>
                    En estos momentos, sigo incursionando en nuevas tecnologías para aprender y desarrollar en distintas áreas.
                    <br/>
                    Posdata: Me gustan mucho las tortugas. 😍
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