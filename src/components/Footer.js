import React from 'react'

// Import social media
import {social} from '../data'



const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                {/* Social icons */}
                <div className='flex space-x-6 items-center justify-center'>
                    {social.map((item, index) => {
                        return(
                            <a className='text-accent text-4xl' href={item.href} key={index} target="_blank" rel="noreferrer">
                                {item.icon}
                            </a>
                        );                            
                    })}
                </div>
                {/* copyright */}
                <p>&copy; 2022 Ivan Inclan. All rights reserved.</p>
                {/* title */}
                <a href='#'>
                    <h1 className='text-xl'>Ivan IA</h1>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer