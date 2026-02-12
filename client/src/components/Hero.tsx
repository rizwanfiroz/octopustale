import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />{" "}
        {/* Overlay for readability */}
        <img
          src={heroBg}
          alt="Modern tech office"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display font-extrabold tracking-tighter mb-8 leading-tight text-white text-[clamp(2.4rem,5.5vw,6rem)]">
            <span className="block">BUILDING THE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              WORLD'S CODE
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-300 leading-relaxed mb-10">
            We are a premier software development partner for global innovators.
            Engineering scalable, high-performance solutions for clients across
            six continents.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              See Our Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full font-bold text-white hover:bg-white/10 transition-all duration-300"
            >
              Partner With Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-60 text-white">
          Explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
