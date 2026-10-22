import { projectData } from '../assets/assets'

const Work = () => {
  return (
    <div id="work" className="py-20 bg-[#05051f]">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="mb-16 text-center bg-[#05051f]">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-cyan-500">
            Here are some of my web development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#05051f]">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border border-zinc-200 bg-[#05051f] hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-56 overflow-hidden bg-[#05051f] object-cover">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300 bg-[#05051f]"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="p-6 bg-[#05051f] object-cover">
                <h3 className="text-xl font-bold text-cyan-500 mb-3">
                  {project.title}
                </h3>

                <p className="text-white text-sm leading-6 mb-4 bg-[#05051f] object-cover">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 bg-[#05051f]">
                  {project.tech.filter(Boolean).map((language, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-semibold hover:bg-cyan-600 transition"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-zinc-800 text-white rounded-lg text-sm font-semibold hover:bg-zinc-700 transition"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Work
