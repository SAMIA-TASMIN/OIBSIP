import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

const inputClass =
  "w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 transition";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Opens the visitor's email app with the message pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Portfolio Contact from " + form.name;
    const body =
      "Name: " + form.name + "\n" +
      "Email: " + form.email + "\n\n" +
      "Message:\n" + form.message;

    window.location.href =
      "mailto:" + profile.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's Connect"
          subtitle="Have a project, collaboration idea, or just want to say hello? Feel free to reach out."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="w-full space-y-5">
            <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-6">
              <p className="text-cyan-400 font-semibold">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-300 mt-2 inline-block hover:text-cyan-400 transition"
              >
                {profile.email}
              </a>
            </div>

            <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-6">
              <p className="text-cyan-400 font-semibold">Location</p>
              <p className="text-slate-300 mt-2">{profile.location}</p>
            </div>

            <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-6">
              <p className="text-cyan-400 font-semibold">Social</p>
              <p className="text-slate-300 mt-2">
                {profile.socials.map((s, i) => (
                  <span key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition"
                    >
                      {s.label}
                    </a>
                    {i < profile.socials.length - 1 && " • "}
                  </span>
                ))}
              </p>
            </div>

            <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-6">
              <p className="text-cyan-400 font-semibold">Phone</p>
              <a
                href={profile.phoneLink}
                className="text-slate-300 mt-2 inline-block hover:text-cyan-400 transition"
              >
                {profile.phone}
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-7"
          >
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />

            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mt-5 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />

            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mt-5 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            ></textarea>

            <button
              type="submit"
              className="w-full mt-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
