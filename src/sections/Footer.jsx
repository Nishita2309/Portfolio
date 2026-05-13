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
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.88-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            ),
            external: true
        },
        {
            href: 'https://www.linkedin.com/in/nishita-pothana-840438216/',
            label: 'LinkedIn',
            icon: (
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.018-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1-.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            ),
            external: true
        },
        {
            href: 'mailto:nishita@example.com',
            label: 'Email',
            icon: (
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.934 7.686L10.53 10.56 8 11.94l-2.53-1.38L1.934 13.069A2 2 0 0 0 3 14h10a2 2 0 0 0 1.066-2.931ZM15 12.735v-.735l-5.708-3.424L15 5.265v7.47Z" />
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
            className="relative overflow-hidden px-6 sm:px-8 lg:px-10"
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

            <div className="max-w-7xl mx-auto w-full relative z-10 py-14 sm:py-16 lg:py-24">
                
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
