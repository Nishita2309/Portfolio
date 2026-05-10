import { motion } from 'framer-motion'

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10">

            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="glow top-0 left-0"
            />

            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -100, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="glow bottom-0 right-0"
            />

        </div>
    )
}
