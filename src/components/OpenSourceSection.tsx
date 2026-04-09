import { motion } from "framer-motion";
import { FiGithub, FiStar } from "react-icons/fi";
import BannerImg from "@/assets/image/header.png";

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="py-24 relative overflow-hidden">
      {/* Cinematic Glowing Dividers */}
      <div className="absolute top-0 inset-x-0 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[300px] w-1/3 mx-auto bg-gradient-to-b from-cyan-900/20 to-transparent blur-[100px] rounded-b-full pointer-events-none blend-screen" />
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-cyan-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-black backdrop-blur-xl relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

          <div className="p-12 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-6 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-medium uppercase tracking-widest">
                <FiGithub /> Transparency Guaranteed
              </div>
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Open Source. <br className="hidden md:block" />
                Free Forever.
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light text-lg">
                Built by developers, for developers. We believe privacy tools
                must be auditable. Inspect our code, run it completely offline,
                and contribute to the movement.
              </p>

              <div className="pt-4">
                <a
                  href="https://github.com/RajeshTechForge/pinac_workspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <FiStar className="w-5 h-5 fill-black" />
                  Star on GitHub
                </a>
              </div>
            </motion.div>

            <div className="w-full md:w-80 h-64 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden relative">
              <img
                src={BannerImg}
                alt="Pinac-Workspace"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
