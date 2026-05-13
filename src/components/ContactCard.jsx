import { motion } from 'framer-motion';

export default function ContactCard({ 
    children, 
    className = '', 
    delay = 0 
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
                delay, 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            className={`relative group ${className}`}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
            
            {/* Main Card */}
            <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 group-hover:border-teal-500/30 group-hover:bg-white/10 p-7 sm:p-8 lg:p-10">
                
                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>

            {/* Hover Spotlight */}
            <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20, 251, 231, 0.1) 0%, transparent 50%)',
                }}
            />
        </motion.div>
    );
}
