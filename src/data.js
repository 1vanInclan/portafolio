// Documentos
import PDF from '../src/document/CV.pdf';
import Bigdata from '../src/document/BigData.pdf';
import IntroBBDD from '../src/document/IntroBBDD.pdf';

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
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/p1.jpg';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.png';
import Project5 from './assets/img/projects/p5.png';
import Project6 from './assets/img/projects/p6.png';
import Project7 from './assets/img/projects/p7.png';
import Project8 from './assets/img/projects/p8.png';
import Project9 from './assets/img/projects/p9.png';
import Project10 from './assets/img/projects/p10.png';
import Project11 from './assets/img/projects/p11.png'


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

];

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'Sobre mi',
    href: 'about',
  },
  {
    name: 'Habilidades',
    href: 'skills',
  },
  {
    name: 'Portafolio',
    href: 'portfolio',
  },
  {
    name: 'Contacto',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <RiFileUserFill/>,
    href: PDF,
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/alberto-ivan-inclan/',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/1vanInclan',
  },
];


// Certificaciones
export const certifications = [
  {
    id: '1',
    name: 'Microsoft Azure Fundamentals',
    date: 'Junio 2022',
    link: 'https://www.credly.com/badges/1a301dfc-4ba2-428a-9033-4aaeb9b701ee/linked_in_profile'
  },
  {
    id: '2',
    name: 'Big Data: Introducción, entorno y herramientas',
    date: '2021',
    link: Bigdata,
  },
  {
    id: '3',
    name: 'Introducción a bases de datos',
    date: '2021',
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
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
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
    description: 'Enviame un correo a ivaninclan88@aragon.unam.mx',
  },
  {
    icon: <FiMapPin />,
    title: 'Locacion Actual',
    subtitle: 'Mexico, Ciudad de Mexico',
    description: 'Tlalpan',
  },
];
