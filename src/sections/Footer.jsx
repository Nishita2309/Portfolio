import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useInView, useTransform, AnimatePresence } from 'framer-motion';
import FooterSocialLink from '../components/FooterSocialLink';

export default function Footer() {
    const footerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end start"]
    });

    const isInView = useInView(footerRef, { once: false, margin: "-100px" });
    const [showBackToTop, setShowBackToTop] = useState(false);
    
    // Mouse position for spotlight effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (footerRef.current) {
                const rect = footerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100
                });
            }
        };

        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll-based animations
    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

    // Social links data
    const socialLinks = [
        {
            href: 'https://github.com/Nishita2309',
            label: 'GitHub',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-1.305 0-2.214-.962-2.214-2.214 0-.616.331-1.128.828-1.387 1.098-.263.96-.263 1.98 0 3.573 1.655 3.573 3.951z"/>
                </svg>
            ),
            external: true
        },
        {
            href: 'https://linkedin.com/in/nishita2309',
            label: 'LinkedIn',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14v19h14v-19h-14zm-6 6h4v8h-4v-8h-4zm9.5 1.5h-3v-3h3v3h3v-3h-3z"/>
                </svg>
            ),
            external: true
        },
        {
            href: 'mailto:nishita@example.com',
            label: 'Email',
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.83 0v5.26L12 19.74a2 2 0 00-2.83 0L3 13.26a2 2 0 002.83 0z"/>
                    <path d="M3 8l7.89 5.26a2 2 0 002.83 0v5.26L12 19.74a2 2 0 00-2.83 0L3 13.26a2 2 0 002.83 0z"/>
                </svg>
            ),
            external: false
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            ref={footerRef}
            className="relative overflow-hidden"
            style={{ '--mouse-x': `${mousePosition.x}%`, '--mouse-y': `${mousePosition.y}%` }}
        >
            {/* Animated Background Elements */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y, opacity }}
            >
                <div className="absolute top-10 left-20 w-24 h-24 bg-teal-500/10 rounded-full blur-xl" />
                <div className="absolute top-20 right-16 w-16 h-16 bg-cyan-500/10 rounded-full blur-lg" />
                <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl" />
            </motion.div>

            {/* Cinematic Divider */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
                style={{ transformOrigin: 'center' }}
            >
                <motion.div
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                />
            </motion.div>

            <div className="max-w-8xl xl:max-w-10xl mx-auto w-full relative z-10 px-6 lg:px-12 py-16 lg:py-24">
                
                {/* Main Footer Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-12 lg:space-y-16"
                >
                    {/* Developer Branding */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                            <span className="block">Nishita</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                                Full Stack Developer
                            </span>
                        </h2>
                        <motion.p 
                            className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            Crafting digital experiences with passion and precision
                        </motion.p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4"
                    >
                        {socialLinks.map((link, index) => (
                            <FooterSocialLink
                                key={link.label}
                                {...link}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    {/* Tech Stack Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                            <span className="text-zinc-400 text-sm">Built with</span>
                            <span className="text-teal-400 font-medium">React</span>
                            <span className="text-zinc-400 text-sm">+</span>
                            <span className="text-cyan-400 font-medium">Tailwind CSS</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Copyright Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="border-t border-white/10 pt-8 lg:pt-12"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
                        <motion.p 
                            className="text-zinc-500 text-sm"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1.6, duration: 0.8 }}
                        >
                            © 2026 Nishita Portfolio. All rights reserved.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1.8, duration: 0.8 }}
                            className="flex items-center gap-2"
                        >
                            <span className="text-zinc-500 text-sm">Crafted with</span>
                            <span className="text-red-500">❤️</span>
                            <span className="text-zinc-500 text-sm">and code</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50 group"
                    >
                        <div className="relative px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-teal-500/30 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 text-white">
                                <path d="M5 15l7-7 7 7" />
                                <path d="M12 8V4" />
                            </svg>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}
