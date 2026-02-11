import { motion } from "framer-motion";
import heroVideo from "@/assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for readability */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm bg-white/5 uppercase tracking-widest">
            Digital Creative Studio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-extrabold leading-[0.9] tracking-tighter mb-8">
            WE CRAFT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
              DIGITAL DREAMS
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-zinc-300 leading-relaxed mb-10">
            We are a global creative agency designing future-ready brands and immersive digital experiences that captivate and inspire.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              View Our Work
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
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
        <span className="text-xs uppercase tracking-widest opacity-60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
