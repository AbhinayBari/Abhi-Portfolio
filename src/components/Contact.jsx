import { FaArrowRight } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="Contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text center mb-17">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Get My
                    <span className="text-cyan-800"> Contact</span>
                </h1>
                <p className="text-center">Have a project in mind or want to discuss potencial opportunities?</p>
            </div>
            <div className="max-w-3xl mx-auto">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input className="px-4 py-3 w-full border border-zinc-600 rounded outline-none rounded-xl"
                            placeholder="Enter Name" type="text"></input>
                        </div>
                        <div>
                            <input className="px-4 py-3 w-full border border-zinc-600 rounded outline-none rounded-xl"
                            placeholder="Enter Email" type="email"></input>
                        </div>
                    </div>
                     <div>
                        <input className="px-4 py-3 w-full border border-zinc-600 rounded outline-none rounded-xl"
                        placeholder="Enter Subject"
                         type="text"/>
                     </div>
                      <div>
                        <textarea className="px-4 py-3 w-full border h-40 border-zinc-600 rounded outline-none rounded-xl"
                        placeholder="Enter Message"
                         type="textarea"/>
                     </div>
                     <div className="flex items-center justify-center">
                        <button className="flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white text-center cursor-pointer
                        hover:bg-zinc-900 transition rounded-full">Send Message
                        < FaArrowRight className="text-sm" />
                        </button>
                     </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
