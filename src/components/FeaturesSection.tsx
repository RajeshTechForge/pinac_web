import { motion } from "framer-motion";
import {
  FiShield,
  FiCpu,
  FiGlobe,
  FiClock,
  FiKey,
  FiCode,
} from "react-icons/fi";

const features = [
  {
    icon: (
      <FiShield className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
    ),
    title: "Privacy First",
    description:
      "All conversations, context, and data stay strictly on your local machine. Nothing is sent to third-party servers.",
  },
  {
    icon: (
      <FiCpu className="w-8 h-8 text-violet-400 group-hover:text-violet-300 transition-colors" />
    ),
    title: "Model Freedom",
    description:
      "Run offline models via Ollama or bring your own API keys for cloud-based AI. You choose the engine.",
  },
  {
    icon: (
      <FiGlobe className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
    ),
    title: "Real-Time Web Search",
    description:
      "Inject live context into your AI conversations natively. Avoid hallucinations by connecting your AI to the web.",
  },
  {
    icon: (
      <FiClock className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
    ),
    title: "Local Chat History",
    description:
      "Seamlessly revisit and continue past conversations anytime with a persistent local database.",
  },
  {
    icon: (
      <FiKey className="w-8 h-8 text-rose-400 group-hover:text-rose-300 transition-colors" />
    ),
    title: "Secure Auth",
    description:
      "Firebase Authentication handles user identity securely without compromising on your local chat privacy.",
  },
  {
    icon: (
      <FiCode className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
    ),
    title: "Open Source",
    description:
      "Fully open on GitHub. Inspect the code, customize it, and contribute to the future of developer tools.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Seamless Top Blend from Hero */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-0 pointer-events-none" />

      {/* Immersive glow bridging features */}
      <div className="absolute top-1/3 right-0 w-[800px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-violet-400 font-semibold tracking-wide uppercase text-sm">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500 mt-4">
            Uncompromised Power. <br /> Absolute Control.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

              <div className="relative h-full bg-neutral-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 ease-out transform group-hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-neutral-950 border border-neutral-800 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-neutral-100 mb-3 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed font-light line-clamp-3">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
