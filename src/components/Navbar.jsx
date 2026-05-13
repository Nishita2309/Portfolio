export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="w-full h-16 flex items-center justify-between">
                {/* LOGO */}
                <h1 className="text-2xl font-black tracking-wide">
                    NISHITA
                </h1>

                {/* LINKS */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12 uppercase tracking-[0.25em] text-sm text-zinc-400">
                    <a
                        href="#about"
                        className="hover:text-white transition duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-white transition duration-300"
                    >
                        Projects
                    </a>

                    <a
                        href="#skills"
                        className="hover:text-white transition duration-300"
                    >
                        Skills
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-white transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>

        </nav>
    )
}
