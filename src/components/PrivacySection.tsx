import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="py-40 relative overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Top transition mask */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Magical entry line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.6)]" />

      {/* Intense dark glowing background elements */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-color-dodge" />
        {/* Subtle mesh/dots */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neutral-950 border border-neutral-800 shadow-[0_0_50px_rgba(255,255,255,0.05)] mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <FiLock className="w-10 h-10 text-neutral-300 relative z-10" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700 tracking-tighter mb-8 shadow-black drop-shadow-2xl">
            What happens in your machine, <br className="hidden md:block" />
            <span className="text-white bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              stays in your machine.
            </span>
          </h2>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            We built PINAC Workspace because we were tired of being the product.
            Your conversations, ideas, and context are stored locally in a
            SQLite vault. No third-party data harvesting. No mandatory cloud
            syncing. No invisible telemetry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-white/5 pt-12">
            {[
              { stat: "0%", label: "Cloud Telemetry" },
              { stat: "100%", label: "Local SQLite DB" },
              { stat: "AES-256", label: "Encrypted API Keys" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-3xl font-bold text-neutral-200 tracking-tight">
                  {item.stat}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-widest mt-2">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
