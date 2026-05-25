import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Subtle parallax for the glowing accent
    const glowX = useTransform(springX, [-0.5, 0.5], [-100, 100]);
    const glowY = useTransform(springY, [-0.5, 0.5], [-100, 100]);

    // Subtle parallax for text
    const textX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
    const textY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX / innerWidth - 0.5;
            const y = e.clientY / innerHeight - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const title = "NISHITA";
    const letters = title.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 100,
            rotateX: -90,
        },
    };

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-10 pt-24 pb-24 sm:pb-28">

            {/* Glowing Accent */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />

            <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center relative z-10">

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-3 sm:gap-4 mb-6 text-center"
                >
                    <div className="w-8 sm:w-12 h-[1px] bg-white/30" />
                    <p className="uppercase tracking-[0.3em] text-zinc-400 text-xs md:text-sm font-medium">
                        Creative Developer & AI Enthusiast
                    </p>
                    <div className="w-8 sm:w-12 h-[1px] bg-white/30" />
                </motion.div>

                {/* Giant Typography */}
                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    style={{ x: textX, y: textY, perspective: 1000 }}
                    className="text-[clamp(4.5rem,16vw,12rem)] md:text-[clamp(6rem,12vw,13rem)] font-black uppercase leading-none tracking-tighter flex items-center overflow-hidden text-white"
                >
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            variants={child}
                            className="origin-bottom inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 md:mt-10 max-w-2xl text-center"
                >
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                        I build cinematic digital experiences, AI-powered applications,
                        and modern full-stack platforms using React, Django, and motion design.
                    </p>

                    <div className="mt-10">
                        <MagneticButton
                            className="rounded-full border border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-semibold relative overflow-hidden group text-center"
                            style={{ padding: '20px 48px' }}
                            href="#projects"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Explore Work
                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </MagneticButton>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="uppercase tracking-[0.2em] text-[9px] text-zinc-500 font-bold">Scroll</span>
                <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-white absolute top-0"
                    />
                </div>
            </motion.div>

        </section>
    );
}
