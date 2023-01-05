// Documentos
import PDF from '../src/document/CV-ESP.pdf';
import Bigdata from '../src/document/BigData.pdf';
import IntroBBDD from '../src/document/IntroBBDD.pdf';
import azureCert from '../src/document/Az-900.pdf';

//  icons
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import {
  RiFileUserFill
} from 'react-icons/ri'

import {
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiHome,
  FiSmile,
  FiShield,
  FiLock,


} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';
import Project7 from './assets/img/projects/p7.webp';
import Project8 from './assets/img/projects/p8.webp';
import Project9 from './assets/img/projects/p9.webp';
import Project10 from './assets/img/projects/p10.webp';
import Project11 from './assets/img/projects/p11.webp';
import Project12 from './assets/img/projects/p12.webp';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/apollo.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/visual.png';
import SkillImg9 from './assets/img/skills/graphql.png';
import SkillImg10 from './assets/img/skills/mongo.png';
import SkillImg11 from './assets/img/skills/redux.png';
import SkillImg12 from './assets/img/skills/firebase.png';

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Formulario tarjeta',
    category: 'js',
    git: 'https://github.com/1vanInclan/formulario-tarjeta',
    link: 'https://1vaninclan.github.io/formulario-tarjeta/',
  },
  {
    id: '2',
    image: Project2,
    name: 'formulario de registro',
    category: 'js',
    git: 'https://github.com/1vanInclan/Intro-component-with-sign-up-form',
    link: 'https://1vaninclan.github.io/Intro-component-with-sign-up-form/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Directorio con tarjetas flip',
    category: 'js',
    git: 'https://github.com/1vanInclan/Tarjetas-flip',
    link: 'https://1vaninclan.github.io/Tarjetas-flip/',
  },
  {
    id: '4',
    image: Project4,
    name: 'Seccion de 4 caracteristicas',
    category: 'css',
    git: 'https://github.com/1vanInclan/Four-card-feature-section',
    link: 'https://1vaninclan.github.io/Four-card-feature-section/',
  },
  {
    id: '5',
    image: Project5,
    name: 'introduccion sencilla',
    category: 'css',
    git: 'https://github.com/1vanInclan/Huddle-landing-page-with-a-single-introductory-section',
    link: 'https://1vaninclan.github.io/Huddle-landing-page-with-a-single-introductory-section/',
  },
  {
    id: '6',
    image: Project6,
    name: 'tarjeta de perfil',
    category: 'css',
    git: 'https://github.com/1vanInclan/Profile-card-component',
    link: 'https://1vaninclan.github.io/Profile-card-component/',
  },
  {
    id: '7',
    image: Project7,
    name: 'Grid con precios',
    category: 'css',
    git: 'https://github.com/1vanInclan/Single-price-grid',
    link: 'https://1vaninclan.github.io/Single-price-grid/',
  },
  {
    id: '8',
    image: Project8,
    name: 'Seccion de comentarios',
    category: 'css',
    git: 'https://github.com/1vanInclan/Social-proof-section',
    link: 'https://1vaninclan.github.io/Social-proof-section/',
  },
  {
    id: '9',
    image: Project9,
    name: 'React socket bands',
    category: 'react',
    git: 'https://github.com/1vanInclan/Socket-Bandas',
    link: 'https://1vaninclan.github.io/socket-band-prod/',
  },
  {
    id: '10',
    image: Project10,
    name: 'React Rick & Morty',
    category: 'react',
    git: 'https://github.com/1vanInclan/react-rick-y-morty',
    link: 'https://1vaninclan.github.io/react-rick-y-morty/',
  },
  {
    id: '11',
    image: Project11,
    name: 'React Giphy Api',
    category: 'react',
    git: 'https://github.com/1vanInclan/giphy-react',
    link: 'https://1vaninclan.github.io/giphy-react/',
  },
  {
    id: '12',
    image: Project12,
    name: 'Journal app - Redux & Firebase',
    category: 'react',
    git: 'https://github.com/1vanInclan/diario-app',
    link: 'https://1vaninclan.github.io/diario-app/',
  }

];

// navigation
export const navigation = [
  {
    name: 'Home',
    href: 'home',
    icon: <FiHome/>,
  },
  {
    name: 'Sobre mi',
    href: 'about',
    icon: <FiSmile/>,
  },
  {
    name: 'Habilidades',
    href: 'skills',
    icon: <FiShield/>,
  },
  {
    name: 'Portafolio',
    href: 'portfolio',
    icon: <FiLock/>,
  },
  {
    name: 'Contacto',
    href: 'contact',
    icon: <FiMapPin/>,
  },
];

// social
export const social = [
  {
    icon: <RiFileUserFill/>,
    name: 'CV',
    href: PDF,
  },
  {
    icon: <FaLinkedin />,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/alberto-ivan-inclan/',
  },
  {
    icon: <FaGithub />,
    name: 'Github',
    href: 'https://github.com/1vanInclan',
  },
];


// Certificaciones
export const certifications = [
  {
    id: '1',
    name: 'Microsoft Azure Fundamentals AZ-900',
    date: 'Junio 2022',
    link: azureCert,
  },
  {
    id: '2',
    name: 'Big Data: Introducción, entorno y herramientas',
    date: 'Febrero 2021',
    link: Bigdata,
  },
  {
    id: '3',
    name: 'Introducción a bases de datos',
    date: 'Febrero 2021',
    link: IntroBBDD,
  },
];

// projects
export const projectsNav = [
  {
    name: 'ALL',
  },
  {
    name: 'CSS',
  },
  {
    name: 'JS',
  },
  {
    name: 'REACT',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name: 'HTML'
  },
  {
    image: SkillImg2,
    name: 'CSS'
  },
  {
    image: SkillImg3,
    name: 'Javascript'
  },
  {
    image: SkillImg4,
    name: 'React JS'
  },
  {
    image: SkillImg5,
    name: 'Apollo server'
  },
  {
    image: SkillImg6,
    name: 'Node JS'
  },
  {
    image: SkillImg7,
    name: 'GIT'
  },
  {
    image: SkillImg8,
    name: 'VS CODE'
  },
  {
    image: SkillImg9,
    name: 'GraphQL'
  },
  {
    image: SkillImg10,
    name: 'MongoDB'
  },
  {
    image: SkillImg11,
    name: 'Redux'
  },
  {
    image: SkillImg12,
    name: 'Firebase'
  }
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: '¿Tienes una pregunta?',
    subtitle: 'Aqui estoy para ayudarte',
    description: 'Enviame un correo a ivaninclan89@aragon.unam.mx',
  },
  {
    icon: <FiMapPin />,
    title: 'Locacion Actual',
    subtitle: 'Mexico, Ciudad de Mexico',
    description: 'Tlalpan',
  },
];
