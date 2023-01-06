
//  icons
import {ImEmbed2, ImEarth} from 'react-icons/im';


const Project = ({item}) => {
  return (

        <div key={item.id} className=' w-70 h-[500px] bg-secondary rounded-xl flex flex-col items-center text-center'>
          <div className='mb-8 w-full h-[60%] rounded-t-xl object-none overflow-hidden'>
            <img className='w-full h-full ' src={item.image} alt='' />
          </div>
          <p className='capitalize text-accent text-sm mb-2'>
            {item.category}
          </p>
          <h3 className='text-xl font-semibold capitalize mb-3'>
            {item.name}
          </h3>
          <div className='flex flex-row text-secondary '>
            <a className='cursor-pointer capitalize m-4 bg-accent hover:bg-accent-hover hover:text-white rounded-lg p-5 hover:animate-pulse  duration-300 ' href={item.git} target="_blank" rel="noreferrer"  >
              <ImEmbed2 className='text-2xl'/>
            </a>
            <a className='cursor-pointer capitalize m-4 bg-accent hover:bg-accent-hover hover:text-white  rounded-lg p-5 hover:animate-pulse duration-300' href={item.link} target="_blank" rel="noreferrer" >
              <ImEarth className='text-2xl'/>
            </a>
          </div>
        </div>
  
  )
}

export default Project