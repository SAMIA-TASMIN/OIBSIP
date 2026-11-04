import SectionHeading from "./SectionHeading";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="MY WORK"
          title="Featured Projects"
          subtitle="Some projects I have worked on while learning and practicing development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2"
            >
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-7">
                <span className="text-cyan-400 text-sm font-semibold">
                  {project.tech}
                </span>

                <h3 className="text-2xl font-bold mt-3">{project.title}</h3>

                <p className="text-slate-400 leading-7 mt-3">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-cyan-400 font-semibold hover:text-cyan-300"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
