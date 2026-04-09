import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-tighter">
              P
            </span>
          </div>
          <span className="text-white font-bold tracking-tight text-xl">
            PINAC
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <button
            onClick={() => scrollTo("features")}
            className="hover:text-white transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="hover:text-white transition-colors"
          >
            How it Works
          </button>
          <button
            onClick={() => scrollTo("privacy")}
            className="hover:text-white transition-colors"
          >
            Privacy
          </button>
          <button
            onClick={() => scrollTo("open-source")}
            className="hover:text-white transition-colors"
          >
            Open Source
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RajeshTechForge/pinac_workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <div className="h-6 w-px bg-white/10 hidden md:block"></div>
          <Link
            to="/auth/sign-in"
            className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-all border border-white/5 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
