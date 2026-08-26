import { FaArrowRight } from "react-icons/fa";
import Abhi from '../assets/Abhi.jpg'
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-800 dark:text-white mb-6">
              <span className="text-zinc-500">
                MERN Stack Backend
              </span>
              <br />
              <span className="text-cyan-500">
                Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
              I am a MERN Stack Backend Developer with a passion for
              building scalable and efficient web applications. I have
              experience in developing RESTful APIs, working with databases,
              and implementing authentication and authorization mechanisms.
              I am always eager to learn new technologies and improve my
              skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                Check My Work
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                Contact Me
                <FaArrowRight />
              </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-center ">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden img-shadow">

              {/* Profile Image */}
              <img
                src={Abhi}
                alt="Abhinay Bari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;