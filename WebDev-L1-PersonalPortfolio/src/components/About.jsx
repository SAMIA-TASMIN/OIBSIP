import SectionHeading from "./SectionHeading";
import { profile, skills } from "../data";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="ABOUT ME" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: who I am */}
          <div>
            <p className="text-slate-400 leading-8 text-lg">
              I am a CSE student at{" "}
              <span className="text-white font-semibold">
                {profile.university}
              </span>
              . I am currently developing my skills in frontend development and
              working on academic and personal projects.
            </p>

            <p className="text-slate-400 leading-8 text-lg mt-5">
              I believe in learning by doing. Every project gives me an
              opportunity to improve my coding, problem-solving, design, and
              development skills.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border border-slate-800 rounded-xl p-5 hover:border-cyan-400 transition">
                <p className="text-2xl font-bold text-cyan-400">CSE</p>
                <p className="text-slate-400 mt-1">Student</p>
              </div>
              <div className="border border-slate-800 rounded-xl p-5 hover:border-cyan-400 transition">
                <p className="text-2xl font-bold text-cyan-400">Web</p>
                <p className="text-slate-400 mt-1">Developer</p>
              </div>
            </div>
          </div>

          {/* Right: skills */}
          <div id="skills">
            <h3 className="text-2xl font-bold text-white mb-5">My Skills</h3>

            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div
                    className="bg-cyan-400 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
