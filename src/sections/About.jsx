export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center px-6 py-32"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

                <div>
                    <p className="text-zinc-500 uppercase tracking-[0.3em] mb-6">
                        About
                    </p>

                    <h2 className="text-5xl font-bold leading-tight">
                        Building futuristic digital experiences.
                    </h2>
                </div>

                <div>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                        I’m a Computer Science student passionate about full-stack
                        development, AI systems, and immersive user experiences.

                        I specialize in React, Django, modern frontend systems,
                        animations, and interactive web experiences.
                    </p>
                </div>

            </div>
        </section>
    )
}
