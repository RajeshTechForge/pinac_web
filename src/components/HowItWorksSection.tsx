import { motion } from "framer-motion";

const steps = [
  {
    num: "01/03",
    title: "Choose your model.",
    description:
      "Launch PINAC and select your preferred power source. Connect to local Ollama instances for 100% offline usage, or input your API keys for leading cloud models like OpenAI or Anthropic.",
  },
  {
    num: "02/03",
    title: "Chat and search.",
    description:
      "Engage with your AI, seamlessly pulling in live web context using the integrated search toggle. Get hallucination-free answers backed by actual internet sources.",
  },
  {
    num: "03/03",
    title: "Own your data.",
    description:
      "When the session ends, your history is saved securely to your local hard drive via SQLite. No cloud backups, no invisible telemetry. Your machine, your vault.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Cinematic Glowing Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none blend-screen" />

      {/* Amibent Background */}
      <div className="absolute top-1/4 left-0 w-1/2 h-[500px] bg-violet-900/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:flex items-end justify-between border-b border-white/10 pb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-tight">
            How it operates. <br />
            <span className="font-light tracking-tight text-neutral-400">
              Zero frictionless.
            </span>
          </h2>
          <p className="max-w-md text-neutral-500 mt-6 md:mt-0 font-medium">
            A workflow designed for professionals who demand speed, security,
            and absolute sovereignty over their tools.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line Desktop */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative group"
              >
                {/* Number / Node */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center text-violet-400 text-sm font-semibold group-hover:border-violet-500/50 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all z-10 relative">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-mono text-neutral-600 tracking-widest">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-200 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed font-light text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
