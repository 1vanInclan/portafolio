



// import animation
import Typewriter from 'typewriter-effect';

// import imagen
import ajolote from '../assets/img/ajolote.png';
import particles from '../assets/img/wallpaper5.svg';


const Hero = () => {

  return (
    <section  id='home' className='lg:h-[85vh] flex items-center bg-cover bg-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden '  style={{ backgroundImage : `url(${particles})`}}>
        <div className='container mx-auto h-full'>
          <div className='flex items-center h-full pt-8'>
            {/* left side */}
            <div className='flex-1 flex flex-col items-center lg:items-start'>
              <p className='text-4xl lg:text-6xl  text-accent mb-[22px]'>Iván Inclán</p>
              <h1 className='text-2xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-light md:tracking-[-2px] pb-8 md:pt-6 md:pb-12 text-center lg:text-left'  >
              <Typewriter
                options={{
                  strings: ['Ingeniero en computación'],
                  delay: 'natural',
                  deleteSpeed: 'natural',
                  autoStart: true,
                  loop: true,
                }}
              />
              </h1>
              {/* <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p> */}
              {/* <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>work with me</button> */}

            </div>
            {/* right side */}
            <div className='hidden lg:flex flex-1 justify-center items-center h-4/5'>
              <img src={ajolote} alt='' className='h-4/5 shake'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero