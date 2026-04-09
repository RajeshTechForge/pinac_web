import { FiGithub } from "react-icons/fi";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-950 py-12 border-t border-white/5 text-sm font-medium relative z-10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-white font-bold text-xs tracking-tighter">
              P
            </span>
          </div>
          <span className="text-white font-bold tracking-tight text-lg">
            PINAC
          </span>
          <span className="text-neutral-600 font-mono text-xs ml-2">
            v3.0 • MIT License
          </span>
        </div>

        <div className="flex items-center gap-6 text-neutral-500">
          <button
            onClick={() => scrollTo("features")}
            className="hover:text-neutral-300 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("privacy")}
            className="hover:text-neutral-300 transition-colors"
          >
            Privacy
          </button>
          <button
            onClick={() => scrollTo("open-source")}
            className="hover:text-neutral-300 transition-colors"
          >
            Source
          </button>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-neutral-600">
            Built by{" "}
            <a
              href="https://github.com/RajeshTechForge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white/20"
            >
              @RajeshTechForge
            </a>
          </p>
          <a
            href="https://github.com/RajeshTechForge/pinac_workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="GitHub Repository"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
