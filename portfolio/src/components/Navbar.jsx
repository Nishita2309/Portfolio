export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                <h1 className="text-xl font-bold tracking-widest">
                    NISHITA
                </h1>

                <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-zinc-400">
                    <a href="#about" className="hover:text-white transition">
                        About
                    </a>

                    <a href="#projects" className="hover:text-white transition">
                        Projects
                    </a>

                    <a href="#skills" className="hover:text-white transition">
                        Skills
                    </a>

                    <a href="#contact" className="hover:text-white transition">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}
