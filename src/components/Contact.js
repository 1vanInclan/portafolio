import React from 'react'

// import contact data
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {contact} from '../data'



const Contact = () => {
  return (
    <section className='section bg-secondary' id='contact'>
        <div className='container mx-auto animate__animated animate__fadeInLeft'>
            {/* section title */}
            <div className='flex flex-col items-center text-center'>
               
                <h2 className='section-title'>
                    Contactame
                </h2>
                <p className='subtitle'>
                    Actualmente resido en La Ciudad de Mexico.
                </p>
               
                
            </div>
            <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true} duration={2}>

            
            <div className='flex flex-col lg:gap-x-8 lg:flex-row '>
                {/* info */}
                <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                    
                    {contact.map((item,index) => {
                        const {icon, title, subtitle, description} = item;
                        return (
                            <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                    {icon}
                                </div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='text-accent font-normal'>{description}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                    
                </div>
                <div className='flex justify-center'>
                <iframe className='rounded-xl w-96 h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101380.88915852073!2d-99.20754228833964!3d19.213109154122026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00961fed5cf7%3A0x83cd46d9ff2d651f!2sTlalpan%2C%20CDMX!5e0!3m2!1ses!2smx!4v1661646920286!5m2!1ses!2smx" allowFullScreen=""  referrerPolicy="no-referrer-when-downgrade" title='maps'></iframe>
                </div>
                
            </div>
            </AnimationOnScroll>

        </div>
    </section>
  )
}

export default Contact