const skills = [
    'React',
    'Django',
    'Tailwind',
    'GSAP',
    'Framer Motion',
    'Python',
    'JavaScript',
    'AI APIs',
]

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen flex items-center px-6 py-32"
        >

            <div className="max-w-7xl mx-auto w-full">

                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
                    Skills
                </p>

                <h2 className="text-6xl font-bold mb-20">
                    Tools & Technologies
                </h2>

                <div className="flex flex-wrap gap-6">

                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-lg"
                        >
                            {skill}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}
