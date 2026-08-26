import { skillsData } from "../assets/assets"

const Skills = () => {
  return (
    <div id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text center mb-16">
                <h2 className="text-4xl sm:text-5xl font bold mb-6 text-center">
                   <span className="text-cyan-600">Technical</span>
                    Skills
                </h2>
                <p className="text-xl mb-6 max-w-3xl mx-auto text-center">Mastering the tools that power modern web experiences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {
                    skillsData.map((skill, index)=>(
                        <div key={index} className="p-6 border bg-teal-50/10
                        border-teal-600 rounded-xl text-center cursor-pointer hover:border-b-4
                        hover:border-b-teal-900 hover:border-r-5
                        hover:border-r-teal-900 hover:-translate-y-1
                        transition-all duration-250">
                            <div className="w-16 h-16 mx-auto rounded-full
                            flex items-center justify-center border border-grey-400 bg-grey-60 mb-5">
                                <skill.icon className="w-8 h-8 text-teal-800"/>
                                </div>
                                <h3 className="text-xl mb-2 font-bold text-cyan-600">{skill.title}</h3>
                                <p className="text-sm text-zinc-600">
                                    {skill.technologies.join(', ')}
                                </p>
                            </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Skills
