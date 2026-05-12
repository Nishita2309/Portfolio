import { motion } from 'framer-motion';

export default function FooterSocialLink({ 
    href, 
    label, 
    icon, 
    index,
    external = false 
}) {
    return (
        <motion.a
            href={href}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : ''}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
                delay: 0.3 + index * 0.1, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ 
                y: -3, 
                scale: 1.1,
                transition: { duration: 0.3 }
            }}
            className="relative group"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Link Container */}
            <div className="relative flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300">
                <div className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                    {icon}
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {label}
                </span>
            </div>
        </motion.a>
    );
}
