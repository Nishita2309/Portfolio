import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center px-6 relative">

            <div className="max-w-6xl w-full">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6"
                >
                    Full Stack Developer
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-8xl lg:text-[10rem] leading-none font-black uppercase"
                >
                    Nishita
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-10 max-w-xl"
                >
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        I build cinematic digital experiences, AI-powered applications,
                        and modern full-stack platforms using React, Django, and motion design.
                    </p>
                </motion.div>

            </div>

        </section>
    )
}
