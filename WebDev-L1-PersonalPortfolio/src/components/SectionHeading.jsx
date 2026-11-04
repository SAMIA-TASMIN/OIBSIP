export default function SectionHeading({ eyebrow, title, subtitle, className = "mb-14" }) {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-cyan-400 font-semibold">{eyebrow}</p>
      <h2 className="text-4xl font-extrabold mt-2">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
