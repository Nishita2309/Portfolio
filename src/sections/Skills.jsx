import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useInView, useTransform, useSpring } from 'framer-motion';
import SkillCard from '../components/SkillCard';

export default function Skills() {
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
    const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Skills data with categories
    const skillsData = [
        // Frontend Development
        { skill: 'React', level: 95, category: 'Frontend', featured: true },
        { skill: 'Next.js', level: 90, category: 'Frontend' },
        { skill: 'Vite', level: 85, category: 'Frontend' },
        { skill: 'Tailwind CSS', level: 95, category: 'Frontend' },
        { skill: 'Framer Motion', level: 88, category: 'Frontend' },
        { skill: 'GSAP', level: 82, category: 'Frontend' },
        { skill: 'TypeScript', level: 92, category: 'Frontend' },
        
        // Backend Development
        { skill: 'Node.js', level: 88, category: 'Backend', featured: true },
        { skill: 'Express', level: 85, category: 'Backend' },
        { skill: 'FastAPI', level: 90, category: 'Backend' },
        { skill: 'Django', level: 87, category: 'Backend' },
        { skill: 'Python', level: 94, category: 'Backend' },
        
        // AI / Machine Learning
        { skill: 'scikit-learn', level: 85, category: 'AI/ML', featured: true },
        { skill: 'TensorFlow', level: 78, category: 'AI/ML' },
        { skill: 'NASA NeoWs API', level: 82, category: 'AI/ML' },
        { skill: 'Skyfield', level: 80, category: 'AI/ML' },
        
        // Databases
        { skill: 'PostgreSQL', level: 86, category: 'Database' },
        { skill: 'SQLite', level: 88, category: 'Database' },
        { skill: 'Drizzle ORM', level: 84, category: 'Database' },
        
        // Blockchain
        { skill: 'Blockchain', level: 75, category: 'Blockchain' },
        { skill: 'Smart Contracts', level: 70, category: 'Blockchain' },
        
        // Tools & Deployment
        { skill: 'Git & GitHub', level: 92, category: 'Tools', featured: true },
        { skill: 'Supabase', level: 85, category: 'Tools' },
        { skill: 'Recharts', level: 83, category: 'Tools' },
        { skill: 'Lenis', level: 80, category: 'Tools' },
    ];

    // Group skills by category
    const categories = [
        { name: 'Frontend Development', skills: skillsData.filter(s => s.category === 'Frontend') },
        { name: 'Backend Development', skills: skillsData.filter(s => s.category === 'Backend') },
        { name: 'AI / Machine Learning', skills: skillsData.filter(s => s.category === 'AI/ML') },
        { name: 'Database & ORM', skills: skillsData.filter(s => s.category === 'Database') },
        { name: 'Blockchain', skills: skillsData.filter(s => s.category === 'Blockchain') },
        { name: 'Tools & Deployment', skills: skillsData.filter(s => s.category === 'Tools') },
    ];

    return (
        <section
            ref={sectionRef}
            id="skills"
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
                            Technical Expertise
                        </p>
                        <div className="w-32 h-[1px] bg-teal-500/50" />
                    </motion.div>

                    <motion.h2 
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="block text-white mb-4">Skills &</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                            Technologies
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

                {/* Skills Categories */}
                <div className="space-y-32 lg:space-y-40">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1 + categoryIndex * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Category Header */}
                            <motion.h3 
                                className="text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-12"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 1.2 + categoryIndex * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {category.name}
                            </motion.h3>

                            {/* Skills Grid */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.2,
                                        },
                                    },
                                }}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.skill}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1 },
                                        }}
                                    >
                                        <SkillCard 
                                            {...skill}
                                            index={skillIndex}
                                            isInView={isInView}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Tech Pills */}
                <motion.div
                    className="absolute top-20 right-10 flex flex-col gap-3 pointer-events-none"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {['React', 'TypeScript', 'Node.js'].map((tech, index) => (
                        <motion.div
                            key={tech}
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.3
                            }}
                            className="px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium backdrop-blur-sm"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
