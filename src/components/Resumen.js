import React from 'react'

import { certifications } from '../data';

const Resumen = () => {
  return (
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3'>Resumen</h2>
                <div className='flex flex-col flex-wrap lg:flex-row justify-between w-full text-center lg:text-left text-white'>
                    <div className='pt-2 lg:w-5/12'>
                        <h2 className='text-3xl lg:text-4xl font-light mb-3'>Formacion Academica</h2>
                        <div className=' bg-tertiary rounded-lg'>
                            <ul className="list-none text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-3xl lg:leading-[1.2] font-light md:tracking-[-2px] md:pt-2 md:pb-1 p-2">
                                <h2 className='font-bold lg:pb-1'>Licenciatura en Ingenieria en Computacion</h2>
                                <span className='bg-secondary text-white'>2016 - 2020</span>
                                <p className='lg:pb-1 lg:pt-1'>UNAM, Facultad de Estudios Superiores Aragón</p>
                                <p>Pasante, 100% de créditos.</p>
                            </ul>
                        </div>
                    </div>
                    <div className='pt-2 lg:w-5/12'>
                        <div>
                            <h2 className='text-3xl lg:text-4xl font-light mb-3'>Experencia Profesional</h2>
                            <div className='items-start bg-tertiary rounded-lg'>
                                <ul className="list-none text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-3xl lg:leading-[1.2] font-light md:tracking-[-2px] md:pt-2 md:pb-1 p-2">
                                    <h2 className='font-bold lg:pb-1'>Desarrollador FullStack</h2>
                                    <span className='bg-secondary text-white'>2021 - 2022</span>
                                    <p className='lg:pb-1 lg:pt-1'>DGTIC, Dirección General de Cómputo y de Tecnologías de Información y Comunicación</p>
                                    <ul className='list-disc list-inside'>
                                        <li>Desarrollo web</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2 lg:w-5/12'>
                        <div>
                            <h2 className='text-3xl lg:text-4xl font-light mb-3'>Cursos y certificaciones</h2>
                            <div className='flex bg-tertiary rounded-lg justify-center'>
                                <ul className="list-none text-2xl leading-[44px] md:text-3xl md:leading-tight lg:text-3xl lg:leading-[1.2] font-light md:tracking-[-2px] md:pt-2 md:pb-1 p-2">
                                {certifications.map((item, index) => {
                                    return (
                                        <div className='mb-2' key={index}>
                                            <h2 className='font-bold pb-1'>{item.name}</h2>
                                            <span className='bg-secondary text-white mb-2'>{item.date}</span>
                                            <a href={item.link} className='ml-4 pl-2 pr-2 bg-accent hover:bg-accent-hover hover:animate-pulse text-white rounded-lg'>Link</a>
                                        </div>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}



export default Resumen;
