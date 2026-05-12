import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Import project images
import project1Image from '../assets/images/project_1.png';
import project2Image from '../assets/images/project_2.png';
import project3Image from '../assets/images/project_3.png';
import project4Image from '../assets/images/project_4.png';
import project5Image from '../assets/images/project_5.png';

export default function Projects() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
    
    // Scroll-based animations
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    
    // Mouse interaction for glow effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-100, 100]), { damping: 25, stiffness: 200 });
    const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-100, 100]), { damping: 25, stiffness: 200 });

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

    // Projects data
    const projects = [
        {
            id: 1,
            title: "Asteroid Mining using ML and Blockchain",
            description: "A comprehensive full-stack application that predicts asteroid mining profitability using Machine Learning, performs orbit simulations with Skyfield, and records mining operations on a Python-based blockchain.",
            image: project1Image,
            technologies: ["FastAPI", "Python", "scikit-learn", "Skyfield", "SQLite3", "Blockchain", "NASA NeoWs API", "React 19", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Recharts", "React Router v7"],
            githubUrl: "https://github.com/Nishita2309/asteroid-mining-platform",
            liveUrl: "https://asteroid-mining-platform.vercel.app/",
            featured: true
        },
        {
            id: 2,
            title: "Earth Stress Analyzer",
            description: "A web application for analyzing disaster impact (flood and wildfire) using satellite imagery spectral indices. Built with Next.js and designed for Indian state regions.",
            image: project2Image,
            technologies: ["TypeScript", "Next.js"],
            githubUrl: "https://github.com/Nishita2309/earth-stress-analyzer",
            liveUrl: "https://github.com/Nishita2309/earth-stress-analyzer",
            featured: false
        },
        {
            id: 3,
            title: "Blockchain-secured Earth Observation Data Platform",
            description: "A decentralized marketplace and secure repository for Earth Observation data using blockchain technology for secure geospatial datasets and transactions.",
            image: project3Image,
            technologies: ["React", "Vite", "Node.js", "Express", "Drizzle ORM", "TypeScript", "Tailwind CSS"],
            githubUrl: "https://github.com/Nishita2309/Blockchain_secured_Earth_Observation_Data_Platform",
            liveUrl: "https://github.com/Nishita2309/Blockchain_secured_Earth_Observation_Data_Platform",
            featured: false
        },
        {
            id: 4,
            title: "Restaurant Ingredient Supply Store",
            description: "A Django web application for browsing and managing restaurant ingredient supplies, including shopping cart, deals, premium products, and order tracking.",
            image: project4Image,
            technologies: ["Django", "Python", "SQLite", "Django staticfiles"],
            githubUrl: "https://github.com/Nishita2309/restaurant-ingredient-supply-store",
            liveUrl: "https://github.com/Nishita2309/restaurant-ingredient-supply-store",
            featured: false
        },
        {
            id: 5,
            title: "CheckPoint App",
            description: "A modern savings tracker web app that helps users create financial goals, monitor savings habits, and stay motivated through a clean responsive UI.",
            image: project5Image,
            technologies: ["HTML", "CSS", "Vanilla JavaScript", "Supabase Authentication", "PWA"],
            githubUrl: "https://github.com/Nishita2309/CheckPoint_App/tree/main",
            liveUrl: "https://checkpoint-tracker.netlify.app/",
            featured: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 80, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.8
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative min-h-screen flex items-center justify-center px-6 py-48 lg:py-56 overflow-hidden"
        >
            {/* Animated Background Glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] min-w-[600px] min-h-[600px] bg-teal-500/3 rounded-full blur-[200px] pointer-events-none"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity
                }}
            />

            <div className="max-w-7xl xl:max-w-8xl mx-auto w-full relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-96 lg:mb-[28rem]"
                >
                    <motion.div 
                        className="flex items-center justify-center gap-8 mb-12"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "auto" } : {}}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="w-32 h-[1px] bg-teal-500/50" />
                        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm font-medium">
                            Projects
                        </p>
                        <div className="w-32 h-[1px] bg-teal-500/50" />
                    </motion.div>

                    <motion.h2 
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="block text-white mb-4">Selected</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                            Work
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

                {/* All Projects - Unified Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-32 mt-80 lg:mt-[24rem] max-w-8xl xl:max-w-10xl mx-auto w-full"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group h-full"
                        >
                            <ProjectCard 
                                {...project}
                                index={index}
                                isInView={isInView}
                                featured={project.featured}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mt-32 lg:mt-40"
                >
                    <motion.a
                        href="https://github.com/Nishita2309"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-500 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View All Projects</span>
                        <motion.svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <path d="M11 3L9 1L7 3M9 1V8M9 1H4C2.89543 1 2 1.89543 2 3V17C2 18.1046 2.89543 19 4 19H16C17.1046 19 18 18.1046 18 17V3C18 1.89543 17.1046 1 16 1H9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
