import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaSchool,} from 'react-icons/fa6'
import { FaProjectDiagram } from 'react-icons/fa'
import Abhi from '../assets/Abhi.jpg'




export const assets = {
     Abhi
};


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Node.js', 'Express.js','MongoDB','Postman','RestAPI','Authentication','JwtToken']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['React', 'Html', 'Css', 'Tailwindcss']
    },
    {
        icon: FaDesktop,
        title: 'Web',
        technologies: ['Nginx', 'Windows', 'Wsgi', 'Server']
    },
    {
        icon: FaCode ,
        title: 'DevOps',
        technologies: [ 'Git', 'Github', 'Docker', 'Jenkins', 'CI/CD']
    },
    {
        icon: FaMobile,
        title: 'Mobile',
        technologies: ['React Native', 'Android', 'Flutter', 'Java']
    },
]



export const projectData = [
    {
        title: 'E-Commarce Website',
        description: 'Immersive shopping experience with python tailwind and react',
        image: 'https://img.freepik.com/premium-photo/ecommerce-website-banner-design_1281315-1759.jpg?w=2000',
        tech: ['React', 'Tailwindcss', 'Node.js', 'express.js', 'MongoDB']
    },
    {
        title: 'NoteBook',
        description: 'A modern furniture e-commerce platform offering customizable home and office furniture .',
        image: 'https://charatoon.com/photo/3626.png',
        tech: ['React', 'Tailwindcss', 'Python']
    },
    {
        title: 'Authentication System',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        image: 'https://static.vecteezy.com/system/resources/previews/003/836/933/original/authentication-concept-icon-user-authorization-login-personal-privacy-protection-with-password-cybersecurity-system-idea-thin-line-illustration-isolated-outline-drawing-vector.jpg',
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
        technologies : ['HTML','CSS','Javascript', 'React', 'Node.js','MongoDB',]
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['Bsc.Computer Science']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built 4 Project']
    },
]