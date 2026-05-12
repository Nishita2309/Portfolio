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
            value: 'nishita@example.com',
            label: 'Email',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.83 0v5.26L12 19.74a2 2 0 00-2.83 0L3 13.26a2 2 0 002.83 0z"/>
                    <path d="M3 8l7.89 5.26a2 2 0 002.83 0v5.26L12 19.74a2 2 0 00-2.83 0L3 13.26a2 2 0 002.83 0z"/>
                </svg>
            )
        },
        {
            type: 'github',
            value: 'github.com/Nishita2309',
            label: 'GitHub',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-1.305 0-2.214-.962-2.214-2.214 0-.616.331-1.128.828-1.387 1.098-.263.96-.263 1.98 0 3.573 1.655 3.573 3.951z"/>
                </svg>
            )
        },
        {
            type: 'linkedin',
            value: 'linkedin.com/in/nishita2309',
            label: 'LinkedIn',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14v19h14v-19h-14zm-6 6h4v8h-4v-8h-4zm9.5 1.5h-3v-3h3v3h3v-3h-3z"/>
                </svg>
            )
        },
        {
            type: 'location',
            value: 'San Francisco, CA',
            label: 'Location',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-5.5 12.5-12.5S21 3 21 10z"/>
                    <path d="M21 10c0 7-5.5 12.5-12.5S21 3 21 10z"/>
                    <path d="M12 22s-4 0-8-8-8 4 4 4 4"/>
                </svg>
            )
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="min-h-screen relative overflow-hidden"
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

            <div className="max-w-8xl xl:max-w-10xl mx-auto w-full relative z-10 px-6 lg:px-12 py-24 lg:py-32">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 lg:mb-32"
                >
                    <motion.div 
                        className="flex items-center justify-center gap-8 mb-12"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "auto" } : {}}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="w-32 h-[1px] bg-teal-500/50" />
                        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm font-medium">
                            Get In Touch
                        </p>
                        <div className="w-32 h-[1px] bg-teal-500/50" />
                    </motion.div>

                    <motion.h2 
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="block text-white mb-4">Let's Create</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                            Something Amazing
                        </span>
                    </motion.h2>

                    <motion.div 
                        className="h-1 w-40 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mx-auto mt-12"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformOrigin: 'center' }}
                    />
                </motion.div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <ContactCard delay={0.1}>
                            <div className="space-y-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                                    Connect With Me
                                </h3>
                                 
                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.a
                                            key={item.type}
                                            href={item.type === 'email' ? `mailto:${item.value}` : item.type === 'location' ? '#' : item.value}
                                            target={item.type === 'github' || item.type === 'linkedin' ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-teal-500/30 transition-all duration-300 group"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                        >
                                            <div className="text-teal-400">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{item.label}</div>
                                                <div className="text-zinc-400 text-sm">{item.value}</div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </ContactCard>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center justify-center"
                    >
                        <ContactCard delay={0.3}>
                            <div className="text-center space-y-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                                    Ready to Collaborate?
                                </h3>
                                 
                                <p className="text-zinc-300 leading-relaxed mb-8 max-w-md">
                                    I'm always excited to work on innovative projects and collaborate with creative minds. 
                                    Let's build something extraordinary together.
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative inline-block"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-2xl blur-xl opacity-50" />
                                    <motion.a
                                        href="mailto:nishita@example.com"
                                        className="relative px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 group overflow-hidden"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="relative z-10">Start Conversation</span>
                                    </motion.a>
                                </motion.div>

                                <div className="flex gap-4 justify-center mt-6">
                                    <motion.a
                                        href="/resume.pdf"
                                        download
                                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 hover:border-teal-500/30 transition-all duration-300 group"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 1.8, duration: 0.6 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2h-4zm-6 6h4v8h-4v-8h-4zm9.5 1.5h-3v-3h3v3h3v-3h-3z"/>
                                        </svg>
                                        Download Resume
                                    </motion.a>
                                </div>
                            </div>
                        </ContactCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
