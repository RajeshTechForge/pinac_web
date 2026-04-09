import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Top connection divider */}
      <div className="absolute top-0 inset-x-0 h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-violet-900/10 to-transparent" />

      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[800px] h-[400px] bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 shadow-inner items-center justify-center mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-full animate-pulse shadow-[0_0_30px_rgba(139,92,246,0.5)]" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 shadow-black drop-shadow-2xl">
            Take{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Control
            </span>{" "}
            of Your Context.
          </h2>

          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12">
            Finally, an AI desktop environment that respects your privacy.
            Download PINAC Workspace today and experience absolute freedom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-semibold">
            <a
              href="#"
              className="group relative flex items-center justify-center gap-2 px-10 py-5 bg-white text-black rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <FiDownload className="w-5 h-5" />
              Download PINAC
            </a>
            <a
              href="https://github.com/RajeshTechForge/pinac_workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto gap-2 px-10 py-5 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/5 backdrop-blur-md transition-colors"
            >
              Contribute on GitHub
              <FiArrowRight className="w-4 h-4 ml-2 opacity-50" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
