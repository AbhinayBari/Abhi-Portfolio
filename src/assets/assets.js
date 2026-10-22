import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact,  FaSchool } from 'react-icons/fa6'
import Abhinay from '../assets/Abhinay.png'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    Abhinay
}

export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Python', 'Postgres', 'Redis', 'Next.js']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'Html', 'Css', 'Tailwindcss']
    },
    {
        icon: FaDesktop,
        title: 'Web',
        technologies: ['Nginx', 'Linux', 'Wsgi', 'Server']
    },
    {
        icon: FaCode ,
        title: 'DevOps',
        technologies: ['Linux', 'Git', 'Github', 'Docker', 'Jenkins', 'CI/CD']
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Android', 'Flutter', 'Java']
    },
]



export const projectData = [
    {
        title: 'Portfolio',
        description: 'Immersive Build My Personal Porfolio tailwind and react',
        image: 'https://images-platform.99static.com/QfA3hy0kI2_mRUqAWb_f70lPSc8=/127x158:1128x1159/500x500/top/smart/99designs-contests-attachments/131/131570/attachment_131570475',
        tech: ['Html', 'CSS', 'TailWind.CSS', 'React.js'],
        liveLink:"https://abhi-portfolio-sandy.vercel.app/"
    },
    {
        title: 'MERN Stack Restaurant',
        description: 'A modern Create Restaurant Order Food Website .',
        image:'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8ed8ad70062059.5b96e0430da17.jpg',
        tech: ['Html', 'CSS', 'JavaScript', 'React.js','Node.Js','MongoDB'],
        liveLink:"https://mern-stack-restaurant.vercel.app/"
    },
    {
        title: 'Collaboration',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Abmbivista',
        description: 'A mood-based interior design suggestion tool that uses AI',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['Django', 'Tailwindcss', 'Python', 'Rest']
    }
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Language',
        technologies : ['React','Tailwindcss','Node.Js','MongoDB','express.js']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['Bsc.Computer Sicence']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['updating...']
    },
]