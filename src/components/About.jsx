import { profileData, assets} from "../assets/assets"
import { FaCode } from 'react-icons/fa'



const About = () => {
  return (
    <div id="About" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-cyan-800">About</span>
                        <span>Me</span>
                    </h2>
                    <p className="text-md mb-2 leading-9">
                        I am a passionate MERN Stack Developer fresher with knowledge of React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, and CSS. I am a quick learner and looking for an opportunity to grow my skills and contribute to real-world projects.
                    </p>
                    <p className="text-md mb-2 leading-9">
                        My approach combines technical experties with creative design thinking to build applications that are not only functional but also visually stunnig
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-7">
                        {
                            profileData.map((data, index)=>(
                                <div key={index} className="w-full h-55 sm:w-50 p-6 border border-zinc-400 rounded
                               hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-r-4
                               hover:border-b-zinc-900
                               hover:border-r-zinc-900 transition duration-300 hover:-translate-y-1">
                                    <FaCode className="text-3xl mb-4" />
                                    <h1 className="text-xl font-bold mb-4">{data.title}</h1>
                                    <p>{data.technologies.join(', ')}</p>
                                    </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-center md:justify-center">
                    <div className="rounded overflow-hidden relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden img-shadow">
                        <img className='w-full h-full object-cover'
                        src={assets.Abhi} alt="Profile"/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
