import { motion } from 'framer-motion';

export default function SkillCard({ 
    skill, 
    level, 
    category, 
    index, 
    isInView,
    featured = false 
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
                delay: 0.2 + index * 0.1, 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
            className={`relative group ${featured ? 'col-span-1 md:col-span-2' : ''}`}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
            
            {/* Main Card */}
            <div className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 group-hover:border-teal-500/30 group-hover:bg-white/10 ${featured ? 'min-h-[180px]' : 'min-h-[140px]'}`}>
                
                {/* Featured Badge */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="absolute -top-2 -right-2 z-20 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-400 text-white text-xs font-bold rounded-full"
                    >
                        Expert
                    </motion.div>
                )}

                {/* Category Label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="absolute top-4 left-4 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full"
                >
                    <span className="text-teal-400 text-xs font-medium">
                        {category}
                    </span>
                </motion.div>

                {/* Skill Content */}
                <div className="p-6 lg:p-8">
                    {/* Skill Name */}
                    <motion.h3 
                        className={`text-white font-bold mb-4 group-hover:text-teal-400 transition-colors duration-300 ${featured ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    >
                        {skill}
                    </motion.h3>

                    {/* Proficiency Level */}
                    {level && (
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={isInView ? { opacity: 1, width: '100%' } : {}}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                            className="mb-4"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-zinc-400 text-sm">Proficiency</span>
                                <span className="text-teal-400 text-sm font-medium">{level}%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${level}%` } : {}}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Floating Particles */}
                    <div className="absolute top-2 right-2 flex gap-1">
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.5
                            }}
                            className="w-1 h-1 bg-teal-400 rounded-full"
                        />
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.5 + 0.2
                            }}
                            className="w-1 h-1 bg-cyan-400 rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Hover Spotlight */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20, 251, 231, 0.1) 0%, transparent 50%)',
                }}
            />
        </motion.div>
    );
}
