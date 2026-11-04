import { useState, useCallback } from "react";
import SectionHeading from "./SectionHeading";
import CertificateModal from "./CertificateModal";
import { certificates } from "../data";

export default function Achievements() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="achievements" className="py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="ACHIEVEMENTS"
          title="Certifications"
          subtitle="Certifications and professional training programs I have completed to strengthen my technical skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {certificates.map((cert) => (
            <article
              key={cert.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition hover:-translate-y-2"
            >
              <div className="h-52 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  loading="lazy"
                  onClick={() => setActive(cert)}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <span className="text-cyan-400 text-sm font-semibold">
                  CERTIFICATION
                </span>
                <h3 className="text-xl font-bold mt-2">{cert.title}</h3>
                <p className="text-slate-400 text-sm mt-3 leading-6">
                  {cert.description}
                </p>
                <p className="text-slate-500 text-sm mt-3">{cert.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CertificateModal certificate={active} onClose={close} />
    </section>
  );
}
