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
        title: 'Portfolio',
        description: 'Immersive My Porfolio Website About Me Skills Section And Porjects',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/016/208/590/small_2x/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg',
        tech: ['React', 'Tailwind.Css', 'Node.js', 'express.js', 'MongoDB']
        
        
    },
    {
        title: 'MERN Stack Restaurant',
        description: 'Immpresive Food Order Restaurant Can Use People Morning BreckFast, And Dinner',
        image: 'https://static.vecteezy.com/system/resources/previews/007/923/422/non_2x/master-chef-logo-design-template-vector.jpg',
        tech: ['React', 'CSS', 'Node.js', 'MongoDB','Javascript'],
        liveLink:"https://mern-stack-restaurant.vercel.app/",
    },
    {
        title: 'NoteBook',
        description: 'User Can Create Notes And Edit, update, and Delete notes',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/009/359/021/small_2x/open-book-illustration-semi-realistic-notebook-design-in-navy-blue-background-simple-minimal-and-easy-to-edit-vector.jpg',
        tech: ['React', 'Tailwindcss', 'Node.js', 'Express.js', 'MongoDB'],
        liveLink:"https://notebook-app-livid.vercel.app/"
    },
    {
        title: 'Coming Soon',
        description: '',
        image: 'https://static.vecteezy.com/system/resources/previews/001/826/283/large_2x/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg',
        tech: ['']
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