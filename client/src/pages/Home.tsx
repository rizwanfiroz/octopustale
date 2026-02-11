import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe2, Palette, Zap } from "lucide-react";
import globalReachVideo from "@/assets/videos/global-reach.mp4";

export default function Home() {
  const { data: projects, isLoading, error } = useProjects();

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Custom Software",
      description: "Tailored solutions built from the ground up to solve your unique business challenges.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-500" />,
      title: "Global Scalability",
      description: "Architecture designed to support users worldwide with low latency and high availability.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Rapid Innovation",
      description: "Agile methodologies that turn ideas into production-ready software in record time.",
    },
  ];

  // Fallback/Demo Data if API is empty
  const displayProjects = projects && projects.length > 0 ? projects : [
    {
      id: 1,
      title: "Global FinTech Hub",
      description: "A secure, cross-border payment platform serving millions of users.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?w=800&q=80",
      category: "FinTech",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "AI Logistics Engine",
      description: "Real-time supply chain optimization for international shipping.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      category: "AI/ML",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "HealthConnect Global",
      description: "Telemedicine platform connecting doctors and patients across continents.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "HealthTech",
      createdAt: new Date(),
    },
    {
      id: 4,
      title: "Smart City Grid",
      description: "IoT infrastructure management for modern urban environments.",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
      category: "IoT",
      createdAt: new Date(),
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Software that <br /> Scales the World.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                We combine deep technical expertise with global perspective to build software that defines industries.
              </p>
              <button className="flex items-center gap-2 text-white font-bold hover:text-accent transition-colors group">
                Explore Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Video Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
        >
          <source src={globalReachVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Engineering Without Borders.
          </motion.h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            From Silicon Valley to Singapore, we partner with visionary companies to deliver world-class digital products.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Case Studies</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold">Global Impact</h2>
            </div>
            <div className="hidden md:block">
              <p className="text-right text-zinc-500 max-w-xs text-sm">
                A selection of high-impact software solutions we've delivered for international clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {isLoading ? (
              <div className="col-span-2 text-center py-20 text-zinc-500">Loading projects...</div>
            ) : error ? (
              <div className="col-span-2 text-center py-20 text-red-500">Error loading projects.</div>
            ) : (
              displayProjects.map((project, idx) => (
                <div key={project.id} className={idx % 2 === 1 ? "md:mt-24" : ""}>
                  <ProjectCard project={project} index={idx} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-100 skew-x-12 translate-x-20 z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071823991-b9671f30c46f?w=800&q=80" 
                  alt="Global Team" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-xl shadow-xl hidden md:block">
                  <div className="text-4xl font-display font-bold text-accent">50+</div>
                  <div className="text-sm font-medium">Countries Reached</div>
                </div>
              </motion.div>
            </div>
            
            <div>
              <h2 className="text-5xl font-display font-bold mb-6">Your Global<br />Tech Partner.</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                We are a distributed team of engineers, designers, and strategists. We don't just build software; we build the future of global commerce and communication.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["24/7 Global Support", "Elite Engineering Talent", "Scalable Enterprise Solutions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-accent w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                Build for the <br />
                <span className="text-zinc-500">Entire Planet.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-md">
                Ready to scale your idea globally? Let's talk about how we can help you build the next big thing.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Inquiries</h4>
                  <a href="mailto:build@global.dev" className="text-2xl font-display hover:text-accent transition-colors">build@global.dev</a>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Socials</h4>
                  <div className="flex gap-4">
                    {["LinkedIn", "GitHub", "Twitter", "Medium"].map((social) => (
                      <a key={social} href="#" className="hover:text-accent transition-colors">{social}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10 text-center text-zinc-500 text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Global Dev Collective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
