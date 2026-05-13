import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useInView, useTransform } from 'framer-motion';
import { LineChart } from 'lucide-react';
import {
    SiDjango,
    SiDrizzle,
    SiExpress,
    SiFastapi,
    SiFramer,
    SiGithub,
    SiGsap,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiScikitlearn,
    SiSqlite,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from 'react-icons/si';

/**
 * Brand / tech icons (Simple Icons). Keys match labels for aria-tooltips.
 * Recharts has no SI glyph — use a neutral chart icon.
 */
const SKILL_ICON_MAP = {
    React: SiReact,
    'Next.js': SiNextdotjs,
    Vite: SiVite,
    'Tailwind CSS': SiTailwindcss,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    'Framer Motion': SiFramer,
    GSAP: SiGsap,
    'Node.js': SiNodedotjs,
    Express: SiExpress,
    Django: SiDjango,
    FastAPI: SiFastapi,
    Python: SiPython,
    'scikit-learn': SiScikitlearn,
    SQLite: SiSqlite,
    PostgreSQL: SiPostgresql,
    'Drizzle ORM': SiDrizzle,
    'Git & GitHub': SiGithub,
    Supabase: SiSupabase,
    Recharts: LineChart,
};

/** Skill stack grouped by category — icons only in UI; labels kept for accessibility. */
const SKILL_GROUPS = [
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
    },
    {
        title: 'Animation & UI',
        skills: ['Framer Motion', 'GSAP'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Django', 'FastAPI', 'Python'],
    },
    {
        title: 'AI / ML',
        skills: ['scikit-learn'],
    },
    {
        title: 'Databases',
        skills: ['SQLite', 'PostgreSQL', 'Drizzle ORM'],
    },
    {
        title: 'Tools & Deployment',
        skills: ['Git & GitHub', 'Supabase', 'Recharts'],
    },
];

export default function Skills() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

    const pillVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
            style={{
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`,
            }}
        >
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y, opacity }}>
                <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl" />
                <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg" />
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl" />
                <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-teal-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
            </motion.div>

            <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-stretch justify-center text-center lg:max-w-4xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 w-full text-center sm:mb-16 lg:mb-20"
                >
                    <motion.div
                        className="mb-8 flex items-center justify-center gap-4 sm:gap-8 lg:mb-10 lg:gap-10"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.15, duration: 0.8 }}
                    >
                        <div className="h-px w-12 bg-teal-500/50 sm:w-20 lg:w-28" />
                        <p className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500 sm:text-sm">
                            Technical Expertise
                        </p>
                        <div className="h-px w-12 bg-teal-500/50 sm:w-20 lg:w-28" />
                    </motion.div>

                    <motion.h2
                        className="font-black tracking-tighter text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl"
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="block text-white mb-3 sm:mb-4">Skills &</span>
                        <span className="block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </motion.h2>

                    <motion.div
                        className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 sm:mt-10 sm:w-36 lg:mt-12"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformOrigin: 'center' }}
                    />

                    <div className="mt-8 flex w-full justify-center px-2 sm:mt-10 lg:mt-12">
                        <motion.p
                            className="max-w-xl text-center text-balance font-light leading-relaxed text-zinc-400 sm:text-lg lg:text-xl lg:leading-relaxed"
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            A focused toolkit for cinematic interfaces, intelligent systems, and production-ready full-stack
                            platforms — crafted with precision and motion.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Category blocks */}
                <div className="flex w-full flex-col items-stretch gap-14 sm:gap-16 lg:gap-20">
                    {SKILL_GROUPS.map((group, groupIndex) => (
                        <motion.article
                            key={group.title}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.5 + groupIndex * 0.07,
                                duration: 0.75,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="w-full max-w-full"
                        >
                            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500 sm:mb-6 sm:text-xs">
                                {group.title}
                            </h3>

                            <motion.div
                                className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-3.5"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.28 + groupIndex * 0.06,
                                        },
                                    },
                                }}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {group.skills.map((name) => {
                                    const Icon = SKILL_ICON_MAP[name];
                                    return (
                                        <motion.span
                                            key={name}
                                            variants={pillVariants}
                                            title={name}
                                            whileHover={{
                                                y: -3,
                                                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group relative inline-flex cursor-default"
                                            aria-label={name}
                                        >
                                            <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-teal-500/0 via-teal-400/35 to-cyan-400/0 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                                            <span
                                                className="relative inline-flex size-[52px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors duration-300 group-hover:border-teal-500/35 group-hover:bg-white/[0.08] group-hover:text-white group-hover:shadow-[0_0_28px_-8px_rgba(45,212,191,0.45)] sm:size-14 md:size-[60px]"
                                                style={{
                                                    backgroundImage:
                                                        'radial-gradient(120% 120% at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(45, 212, 191, 0.07) 0%, transparent 55%)',
                                                }}
                                            >
                                                {Icon ? (
                                                    <Icon
                                                        className="size-[26px] shrink-0 text-current sm:size-7 md:size-8"
                                                        aria-hidden
                                                    />
                                                ) : (
                                                    <span className="text-[10px] font-medium leading-tight text-zinc-500">
                                                        ?
                                                    </span>
                                                )}
                                            </span>
                                        </motion.span>
                                    );
                                })}
                            </motion.div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
