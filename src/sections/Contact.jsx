import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useInView, useTransform, useSpring } from 'framer-motion';
import ContactCard from '../components/ContactCard';

export default function Contact() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
    
    // Mouse position for spotlight effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Scroll-based animations
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

    // Contact data
    const contactInfo = [
        {
            type: 'email',
            value: 'nishitapothana@gmail.com',
            label: 'Email',
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.934 7.686L10.53 10.56 8 11.94l-2.53-1.38L1.934 13.069A2 2 0 0 0 3 14h10a2 2 0 0 0 1.066-2.931ZM15 12.735v-.735l-5.708-3.424L15 5.265v7.47Z" />
                </svg>
            ),
        },
        {
            type: 'github',
            value: 'github.com/Nishita2309',
            label: 'GitHub',
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.88-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            ),
        },
        {
            type: 'linkedin',
            value: 'https://www.linkedin.com/in/nishita-pothana-840438216/',
            label: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.018-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1-.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            ),
        },
        {
            type: 'location',
            value: 'Hyderabad, India',
            label: 'Location',
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 8z" />
                </svg>
            ),
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="min-h-screen relative overflow-hidden px-6 sm:px-8 lg:px-10 flex flex-col items-center justify-center"
            style={{ '--mouse-x': `${mousePosition.x}%`, '--mouse-y': `${mousePosition.y}%` }}
        >
            {/* Animated Background Elements */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y, opacity }}
            >
                <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl" />
                <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg" />
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl" />
            </motion.div>

            <div className="max-w-7xl mx-auto w-full relative z-10 py-20 flex flex-col items-center gap-5">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center w-full"
                >
                    <motion.div 
                        className="flex items-center justify-center gap-4 sm:gap-8 mb-12 lg:mb-16"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "auto" } : {}}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="w-16 sm:w-24 lg:w-32 h-[1px] bg-teal-500/50" />
                        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm font-medium">
                            Get In Touch
                        </p>
                        <div className="w-16 sm:w-24 lg:w-32 h-[1px] bg-teal-500/50" />
                    </motion.div>
 
                    <motion.h2 
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="block text-white mb-6">Let's Create</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                            Something Amazing
                        </span>
                    </motion.h2>
 
                    <motion.div 
                        className="h-1.5 w-32 sm:w-48 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto mt-12 lg:mt-16"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformOrigin: 'center' }}
                    />
                </motion.div>
 
                {/* Main CTA Card - Centered Premium Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center"
                >
                    <ContactCard delay={0.1} className="w-full max-w-5xl">
                        <div className="flex flex-col items-center justify-center text-center py-12 sm:py-20 lg:py-24 px-6 sm:px-10">
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
                                Ready to Collaborate?
                            </h3>
                             
                            <p className="text-zinc-400 text-xl lg:text-2xl leading-relaxed mb-14 max-w-3xl mx-auto font-light">
                                I'm always excited to work on innovative projects and collaborate with creative minds. 
                                Let's build something extraordinary together.
                            </p>
 
                            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center items-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="relative group/btn w-full sm:w-auto"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-2xl blur-2xl opacity-40 group-hover/btn:opacity-60 transition-opacity duration-500" />
                                    <motion.a
                                        href="mailto:nishita@example.com"
                                        className="relative inline-flex items-center justify-center w-full sm:w-auto px-16 py-9 bg-white text-black font-bold rounded-2xl transition-all duration-300 overflow-hidden text-lg tracking-wide"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="relative z-10">Start Conversation</span>
                                    </motion.a>
                                </motion.div>
 
                                <motion.a
                                    href="/resume.pdf"
                                    download
                                    className="inline-flex items-center justify-center w-full sm:w-auto px-16 py-9 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 font-bold text-lg group tracking-wide"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 1.4, duration: 0.8 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <svg className="w-6 h-6 mr-3 text-teal-400 group-hover:scale-110 transition-transform" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a.5.5 0 0 1 1 0v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2a.5.5 0 0 1 .5-.5z" />
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>
                                    Download Resume
                                </motion.a>
                            </div>
                        </div>
                    </ContactCard>
                </motion.div>
 
                {/* Contact Info Cards - Responsive Grid Arrangement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 w-full mt-20 lg:mt-32">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={item.type}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.6 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex"
                        >
                            <motion.a
                                href={item.type === 'email' ? `mailto:${item.value}` : item.type === 'location' ? '#' : item.value}
                                target={item.type === 'github' || item.type === 'linkedin' ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="group relative flex flex-col items-center justify-center w-full p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 text-center"
                                whileHover={{ y: -10 }}
                            >
                                {/* Subtle Glow */}
                                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/5 rounded-3xl blur-2xl transition-all duration-500" />
                                
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="p-5 bg-teal-500/10 rounded-2xl text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div className="text-white font-bold text-xl mb-2 tracking-tight">{item.label}</div>
                                    <div className="text-zinc-500 text-sm font-medium group-hover:text-zinc-300 transition-colors duration-300 truncate w-full max-w-[180px]">
                                        {item.value}
                                    </div>
                                </div>
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

