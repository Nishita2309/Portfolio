import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const menuLinks = [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="w-full h-16 flex items-center justify-between">
                {/* LOGO */}
                <h1 className="text-2xl font-black tracking-wide relative z-50 text-white">
                    NISHITA
                </h1>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12 uppercase tracking-[0.25em] text-sm text-zinc-400">
                    {menuLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-white transition duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* MOBILE MENU TOGGLE BUTTON */}
                <button
                    onClick={toggleMenu}
                    className="flex md:hidden text-white relative z-50 p-2 focus:outline-none transition-transform active:scale-90"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE DRAWER */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8"
                    >
                        <div className="flex flex-col items-center gap-8 text-center">
                            {menuLinks.map((link, idx) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                                    className="text-2xl font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition duration-300"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
