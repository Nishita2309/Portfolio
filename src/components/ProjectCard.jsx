import { motion } from 'framer-motion';

export default function ProjectCard({ 
    title, 
    description, 
    image, 
    technologies, 
    githubUrl, 
    liveUrl, 
    featured,
    index,
    isInView 
}) {
    // Unified vertical card structure for both featured and regular projects
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
                delay: 0.3 + index * 0.1, 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ y: -5 }}
            className="group relative h-full flex flex-col"
        >
            {/* Featured Badge */}
            {featured && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-400 text-white text-xs font-bold rounded-full"
                >
                    Featured
                </motion.div>
            )}

            <div className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-700 group-hover:bg-white/10 flex-1 flex flex-col ${featured ? 'min-h-[520px]' : 'min-h-[420px]'}`}>
                
                {/* Project Image - Unified for all cards */}
                <div className={`relative overflow-hidden flex-shrink-0 ${featured ? 'h-64 lg:h-72' : 'h-48 lg:h-56'}`}>
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Quick Actions Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                    >
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-1.305 0-2.214-.962-2.214-2.214 0-.616.331-1.128.828-1.387 1.098-.263.96-.263 1.98 0 3.573 1.655 3.573 3.951z"/>
                            </svg>
                        </motion.a>
                        
                        <motion.a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Content - Flex Grow with Enhanced Padding */}
                <div className={`flex-1 flex flex-col ${featured ? 'p-10 lg:p-12' : 'p-8 lg:p-10'}`}>
                    {/* Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className={`flex flex-wrap gap-2 mb-6 ${featured ? 'max-h-24' : 'max-h-20'} overflow-y-auto`}
                    >
                        {technologies.slice(0, featured ? 12 : 6).map((tech, techIndex) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.02, duration: 0.4 }}
                                className={`px-3 py-1.5 bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium rounded-full ${featured ? 'px-4 py-2' : 'px-3 py-1.5'}`}
                            >
                                {tech}
                            </motion.span>
                        ))}
                        {technologies.length > (featured ? 12 : 6) && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.1 + (featured ? 0.24 : 0.12), duration: 0.4 }}
                                className={`px-3 py-1.5 bg-white/10 border border-white/20 text-white/60 text-xs font-medium rounded-full ${featured ? 'px-4 py-2' : 'px-3 py-1.5'}`}
                            >
                                +{technologies.length - (featured ? 12 : 6)} more
                            </motion.span>
                        )}
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                        className={`font-bold text-white mb-5 group-hover:text-teal-400 transition-colors duration-300 ${featured ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    >
                        {title}
                    </motion.h3>

                    {/* Description - Flex Grow */}
                    <motion.p 
                        className={`text-zinc-400 leading-relaxed mb-8 flex-1 ${featured ? 'text-lg lg:text-xl' : 'text-sm lg:text-base'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    >
                        {description}
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                        className={`flex gap-4 mt-auto ${featured ? 'gap-5' : 'gap-4'}`}
                    >
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group ${featured ? 'px-7 py-4 rounded-xl gap-4' : 'px-5 py-3 rounded-lg gap-3'}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg width={featured ? "18" : "16"} height={featured ? "18" : "16"} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-1.305 0-2.214-.962-2.214-2.214 0-.616.331-1.128.828-1.387 1.098-.263.96-.263 1.98 0 3.573 1.655 3.573 3.951z"/>
                            </svg>
                            <span>{featured ? 'View Code' : 'Code'}</span>
                        </motion.a>
                        
                        <motion.a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-3 px-5 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-400 hover:from-teal-500 hover:to-cyan-500 hover:text-white transition-all duration-300 group ${featured ? 'px-7 py-4 rounded-xl gap-4' : 'px-5 py-3 rounded-lg gap-3'}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg width={featured ? "18" : "16"} height={featured ? "18" : "16"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            <span>{featured ? 'Live Demo' : 'Live Demo'}</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
}
