import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-lg bg-zinc-900">
        {/* Placeholder gradient if image fails or for loading */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />

        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-[1px] group-hover:backdrop-blur-[2px]">
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            <ArrowUpRight size={32} />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold font-display group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 mt-1 font-mono text-sm tracking-wide uppercase">
            {project.category}
          </p>
        </div>
        <span className="text-zinc-600 font-mono text-sm">0{index + 1}</span>
      </div>
    </motion.div>
  );
}
