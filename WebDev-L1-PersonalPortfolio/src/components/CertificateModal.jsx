import { useEffect } from "react";

export default function CertificateModal({ certificate, onClose }) {
  // Close on ESC + lock body scroll while open
  useEffect(() => {
    if (!certificate) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-6 text-white text-4xl hover:text-cyan-400 transition z-[110]"
      >
        &times;
      </button>

      <div className="max-w-6xl max-h-[90vh] flex items-center justify-center">
        <img
          src={certificate.image}
          alt={certificate.alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
