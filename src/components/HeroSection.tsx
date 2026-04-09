import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload, FiGithub } from "react-icons/fi";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background parallax (moves slower, recedes)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Text foreground parallax (moves faster, fades out)
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // App image 3D receding effect
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const imageRotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const imageZ = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[130vh] flex flex-col items-center pt-24 overflow-hidden bg-black selection:bg-violet-500/30"
      style={{ perspective: "1500px" }}
    >
      {/* Background radial glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center mt-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            v3.0 Open Source Release
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-neutral-500 tracking-tighter mb-6 leading-[1.1]">
            Your AI. Your Rules. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              Your Machine.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A privacy-first, cross-platform workspace. Run local models or
            connect your cloud keys. Zero telemetry, absolute freedom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
            <a
              href="#"
              className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-neutral-200 transition-all font-semibold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <FiDownload className="w-5 h-5" />
              Download for Desktop
            </a>
            <a
              href="https://github.com/RajeshTechForge/pinac_workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              <FiGithub className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </motion.div>

        {/* App UI Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            bounce: 0.4,
          }}
          style={{
            scale: imageScale,
            rotateX: imageRotateX,
            z: imageZ,
            y: imageY,
            transformStyle: "preserve-3d",
          }}
          className="mt-20 relative max-w-6xl mx-auto origin-top"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-20 pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900/50 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <img
              src="https://raw.githubusercontent.com/RajeshTechForge/pinac_workspace/main/assets/UI-Design.png"
              alt="PINAC Workspace UI"
              className="w-full h-auto object-cover opacity-90 border-t border-white/5"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-neutral-500"
      >
        <span className="text-xs tracking-widest uppercase mb-2">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
      </motion.div>
    </section>
  );
}
