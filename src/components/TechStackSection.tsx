import { motion } from "framer-motion";

const technologies = [
  { name: "React", description: "UI Architecture", id: "react" },
  { name: "Tailwind CSS", description: "Utility Styling", id: "tailwind" },
  { name: "TypeScript", description: "Type Safety", id: "typescript" },
  { name: "Electron", description: "Cross-Platform Wrapper", id: "electron" },
  { name: "FastAPI", description: "Python Backend", id: "fastapi" },
  { name: "Ollama", description: "Local AI Models", id: "ollama" },
  { name: "Vite", description: "Blazing Fast Build", id: "vite" },
  { name: "Firebase", description: "Identity Auth", id: "firebase" },
];

export default function TechStackSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient background spanning from CTA layer below */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-violet-900/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-semibold tracking-widest uppercase text-xs mb-4 inline-block">
            Engine Room
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">
            Modern, fast, and battle-tested.
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-16 font-light">
            Built on the shoulders of giants. We chose tools that guarantee
            speed, predictability, and local execution power.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex flex-col items-center justify-center p-6 bg-neutral-900/30 rounded-2xl border border-white/5 hover:border-violet-500/30 hover:bg-neutral-900/50 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default"
            >
              <h3 className="text-xl font-bold tracking-tight text-neutral-200 group-hover:text-violet-300 transition-colors mb-2">
                {tech.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-mono group-hover:text-neutral-400 transition-colors">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
