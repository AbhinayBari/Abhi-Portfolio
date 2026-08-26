import { FaArrowRight } from 'react-icons/fa'
import { navMenu } from '../assets/assets'
const Navbar = () => {
    return (
        <div className="fixed w-full py-4 z-50 Backdrop-blur-md bg-white/30 border-b border-white/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                     <div className="text-2xl font-bold text-black shadow-lg px-4 py-2 rounded-full bg-white border border-white logo">
                        {/*Logo*/}
                        <span className ="text-zinc-500" >THE ~ </span>
                        <span className="text-cyan-500 font-orbitron">ABHINAY BARI.</span>
                    </div>
                    {/*Navigation Menu*/}
                     <div className="hidden md:flex space-x-8 border border-white rounded-full px-12 py-4 bg-white shadow-xl text-black cursor-pointer hover:scale-105 transition duration-300 ease-in-out navmenu">
                        {
                         navMenu.map((item, index) => (
                        <a className="navmenu" key={index} href={`#${item}`}>{item}</a>
                        ))}
                    </div>
                    {/*button*/}
                    <div>
                        <a href= "/Abhinay Bari cv.pdf" download>
                            <button className='px-10 py-5 border border-cyan-800 rounded-full text-cyan-800 font-bold hover:bg-cyan-800 hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer shadow-xl hover:scale-105'>
                                Check Resume
                                <FaArrowRight className="text-cyan-800 text-sm" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default Navbar