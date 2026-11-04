import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
