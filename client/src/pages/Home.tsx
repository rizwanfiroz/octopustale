import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe2, Palette, Zap } from "lucide-react";
import heroVideo from "@/assets/videos/hero.mp4"; // Ensure build processes this
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";

export default function Home() {
  const { data: projects, isLoading, error } = useProjects();

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Brand Identity",
      description: "We build brands that speak louder than words. From logos to comprehensive guidelines.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-500" />,
      title: "Web Development",
      description: "High-performance websites built with cutting-edge technology for maximum impact.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and connect you with your ideal audience.",
    },
  ];

  // Fallback/Demo Data if API is empty
  const displayProjects = projects && projects.length > 0 ? projects : [
    {
      id: 1,
      title: "Neon Horizon",
      description: "Cyberpunk aesthetic branding for a tech startup.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Cyberpunk city
      category: "Branding",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Abstract Flow",
      description: "Motion graphics for a music festival.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80", // Abstract fluid art
      category: "Motion",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Minimalist Architecture",
      description: "Web design for an architecture firm.",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80", // Architecture
      category: "Web Design",
      createdAt: new Date(),
    },
    {
      id: 4,
      title: "Eco Future",
      description: "Campaign for sustainable energy.",
      imageUrl: "https://images.unsplash.com/photo-1497250681960-ef048c0ab947?w=800&q=80", // Green plant
      category: "Marketing",
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
                Design that <br /> Drives Results.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                We combine aesthetics with strategy to create digital products that not only look good but perform exceptionally.
              </p>
              <button className="flex items-center gap-2 text-white font-bold hover:text-accent transition-colors group">
                See All Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
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

      {/* Work Section */}
      <section id="work" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Selected Works</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold">Featured Projects</h2>
            </div>
            <div className="hidden md:block">
              <p className="text-right text-zinc-500 max-w-xs text-sm">
                A curation of our best work across branding, web design, and digital experiences.
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
        {/* Abstract shapes */}
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
                 {/* Creative Studio Workspace */}
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" 
                  alt="Studio Culture" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-xl shadow-xl hidden md:block">
                  <div className="text-4xl font-display font-bold text-accent">10+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
            
            <div>
              <h2 className="text-5xl font-display font-bold mb-6">We Are The<br />Creative Force.</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                Founded in 2023, AESTHETICS has been pushing the boundaries of what's possible in the digital realm. We believe in the power of design to transform businesses and connect people.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["Global Reach, Local Touch", "Award-Winning Design Team", "Full-Service Capabilities"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="text-accent w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                Let's Create <br />
                <span className="text-zinc-500">Something Epic.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-md">
                Ready to take your brand to the next level? Drop us a line and let's start the conversation.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</h4>
                  <a href="mailto:hello@aesthetics.studio" className="text-2xl font-display hover:text-accent transition-colors">hello@aesthetics.studio</a>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Socials</h4>
                  <div className="flex gap-4">
                    {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map((social) => (
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
          <p>© {new Date().getFullYear()} AESTHETICS Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
