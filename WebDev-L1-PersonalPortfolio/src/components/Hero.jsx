import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-semibold mb-4 tracking-wide">
              HELLO, I'M
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              {profile.firstName}{" "}
              <span className="text-cyan-400">{profile.lastName}</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mt-5">
              {profile.title}
            </h2>

            <p className="text-slate-400 text-lg leading-8 mt-6 max-w-xl">
              {profile.intro}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-bold transition hover:-translate-y-1"
              >
                View My Projects
              </a>

              <a
                href={profile.resume}
                download="resume.pdf"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-5 py-2 rounded-full font-bold transition hover:-translate-y-1"
              >
                Resume
              </a>

              <a
                href="#contact"
                className="border border-slate-700 hover:border-cyan-400 px-5 py-2 rounded-full font-bold transition hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl border-2 border-cyan-400/30 overflow-hidden shadow-2xl">
                <img
                  src={profile.photo}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
