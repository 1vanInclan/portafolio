import {useState, useEffect} from 'react'

// import projects data
import {projectsData, projectsNav} from '../data';


import { AnimationOnScroll } from 'react-animation-on-scroll';

// import components
import Project from './Project';


const Projects = () => {

  const [item, setItem] = useState({name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);


  useEffect(() => {
    // get projects base on item
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index)
  }

  return (
    <div>
      {/* nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-row flex-wrap justify-evenly items-center text-white bg-secondary rounded-full'>
          {projectsNav.map((item, index) => {
            return (
              <li onClick={(e) => {
                handleClick(e, index);
              }} className={`${active === index ? 'text-accent font-bold' : 'text-white'} cursor-pointer capitalize m-3  hover:animate-pulse`} 
              key={index} >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects grid */}
      <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true}>
        <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
          {projects.map((item) => {
            return <Project item={item} key={item.id}/>;
          })}
        </section>
      </AnimationOnScroll>
      
    </div>
  )
}

export default Projects;

// 'bg-accent hover:bg-accent-hover transition-all rounded-lg mb-2'