import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion';
import profileImage from "../assets/images/profile.png";

export default function About() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
    
    // Scroll-based animations
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
    
    // Mouse interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { damping: 25, stiffness: 200 });
    const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-50, 50]), { damping: 25, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        const currentRef = sectionRef.current;
        if (currentRef) {
            currentRef.addEventListener('mousemove', handleMouseMove);
        }
        
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [mouseX, mouseY]);

    // Animated counters
    const [counters, setCounters] = useState({ projects: 0, experience: 0, skills: 0 });
    
    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setCounters({ projects: 25, experience: 3, skills: 15 });
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    // Tech stack items
    const techStack = [
        { name: 'React', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'AI/ML', level: 75 },
        { name: 'GSAP', level: 85 },
        { name: 'Tailwind', level: 95 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-h-screen flex items-center justify-center px-6 py-40 lg:py-48 overflow-hidden"
        >
            {/* Animated Background Glow */}
            <motion.div
                className="absolute top-1/2 right-0 w-[60vw] h-[60vw] min-w-[400px] min-h-[400px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: '30%',
                    translateY: '-50%',
                    opacity
                }}
            />

            <div className="max-w-6xl xl:max-w-7xl mx-auto w-full relative z-10 px-4 lg:px-8">
                <motion.div 
                    style={{ scale }}
                    className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center"
                >
                    {/* Text Content - Left Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-10 lg:space-y-14 order-1 lg:order-1"
                    >
                        {/* Section Header */}
                        <motion.div variants={itemVariants} className="space-y-5 lg:space-y-6">
                            <motion.div 
                                className="flex items-center gap-6"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "auto" } : {}}
                                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="w-20 h-[1px] bg-teal-500/50" />
                                <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm font-medium">
                                    About Me
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Cinematic Typography */}
                        <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter">
                                <span className="block text-white mb-2">Building</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                                    Digital Futures
                                </span>
                            </h2>
                            <motion.div 
                                className="h-1 w-32 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mt-6"
                                initial={{ scaleX: 0 }}
                                animate={isInView ? { scaleX: 1 } : {}}
                                transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                style={{ transformOrigin: 'left' }}
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p 
                            variants={itemVariants}
                            className="text-zinc-400 leading-relaxed text-lg md:text-xl lg:text-2xl font-light max-w-md lg:max-w-lg"
                        >
                            I'm a Computer Science student crafting immersive digital experiences at the intersection of 
                            <span className="text-teal-400 font-medium"> full-stack development</span> and 
                            <span className="text-cyan-400 font-medium"> artificial intelligence</span>.
                        </motion.p>

                        {/* Stats Grid */}
                        <motion.div 
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-8 lg:gap-12 pt-8 lg:pt-10"
                        >
                            {[
                                { value: counters.projects, label: 'Projects', suffix: '+' },
                                { value: counters.experience, label: 'Years', suffix: '' },
                                { value: counters.skills, label: 'Skills', suffix: '+' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center px-2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                                >
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white tabular-nums mb-3">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1 + index * 0.1 }}
                                        >
                                            {stat.value}
                                        </motion.span>
                                        {stat.suffix}
                                    </div>
                                    <div className="text-zinc-500 text-sm uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Image - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative order-2 lg:order-2 flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative group w-full max-w-sm lg:max-w-xs">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                            
                            {/* Image Container */}
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-1 hover:border-teal-500/30 transition-all duration-500">
                                <motion.img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                                    style={{ filter: 'contrast(1.05) brightness(1.02)' }}
                                />
                            </div>
                            
                            {/* Floating Accent */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500/20 rounded-full blur-lg"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
