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
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative h-full flex flex-col"
        >
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/30 transition-all duration-700 group-hover:bg-white/10 flex-1 flex flex-col min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]">
                {/* Featured Badge */}
                {featured && (
                    <div
                        className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap"
                    >
                        Featured
                    </div>
                )}
                
                {/* Project Image - Unified for all cards */}
                <div className="relative overflow-hidden flex-shrink-0 h-56 lg:h-60">
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
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.88-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
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
                <div className={`flex-1 flex flex-col items-center text-center ${featured ? 'p-8 lg:p-9' : 'p-7 lg:p-8'}`}>
                    {/* Technologies */}
                    <div
                        className={`flex flex-wrap justify-center gap-2 mb-6 ${featured ? 'max-h-24' : 'max-h-20'} overflow-y-auto w-full`}
                    >
                        {technologies.slice(0, featured ? 12 : 6).map((tech) => (
                            <span
                                key={tech}
                                className={`px-3 py-1.5 bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium rounded-full ${featured ? 'px-4 py-2' : 'px-3 py-1.5'}`}
                            >
                                {tech}
                            </span>
                        ))}
                        {technologies.length > (featured ? 12 : 6) && (
                            <span
                                className={`px-3 py-1.5 bg-white/10 border border-white/20 text-white/60 text-xs font-medium rounded-full ${featured ? 'px-4 py-2' : 'px-3 py-1.5'}`}
                            >
                                +{technologies.length - (featured ? 12 : 6)} more
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 
                        className={`font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300 ${featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'}`}
                    >
                        {title}
                    </h3>

                    {/* Description - Flex Grow */}
                    <p 
                        className={`text-zinc-400 leading-relaxed mb-8 flex-1 ${featured ? 'text-lg lg:text-xl' : 'text-sm lg:text-base'}`}
                    >
                        {description}
                    </p>

                    {/* Action Buttons */}
                    <div
                        className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-auto w-full justify-center"
                    >
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex w-full min-[480px]:w-auto sm:flex-1 sm:min-w-[140px] max-w-sm items-center justify-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group ${featured ? 'px-7 py-4 rounded-xl gap-4' : 'px-5 py-3 rounded-lg gap-3'}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg width={featured ? "18" : "16"} height={featured ? "18" : "16"} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.88-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <span>{featured ? 'View Code' : 'Code'}</span>
                        </motion.a>
                        
                        <motion.a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex w-full min-[480px]:w-auto sm:flex-1 sm:min-w-[140px] max-w-sm items-center justify-center gap-3 px-5 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-400 hover:from-teal-500 hover:to-cyan-500 hover:text-white transition-all duration-300 group ${featured ? 'px-7 py-4 rounded-xl gap-4' : 'px-5 py-3 rounded-lg gap-3'}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg width={featured ? "18" : "16"} height={featured ? "18" : "16"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            <span>{featured ? 'Live Demo' : 'Live Demo'}</span>
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
}
