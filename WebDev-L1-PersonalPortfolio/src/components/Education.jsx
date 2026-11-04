import SectionHeading from "./SectionHeading";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="EDUCATION" title="My Academic Journey" />

        <div className="relative border-l-2 border-slate-700 ml-4">
          {education.map((item, i) => (
            <div
              key={item.title}
              className={`relative pl-10 group ${
                i !== education.length - 1 ? "pb-12" : ""
              }`}
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950 transition-all duration-300 group-hover:bg-cyan-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_#22d3ee]"></div>

              <div className="transition-all duration-300 group-hover:translate-x-2">
                <p className="text-cyan-400 font-semibold">{item.label}</p>

                <h3 className="text-2xl font-bold mt-2 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>

                {item.school && (
                  <p className="text-slate-300 mt-2">{item.school}</p>
                )}

                <p className="text-slate-400 mt-3 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
