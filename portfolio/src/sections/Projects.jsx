import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-32"
        >

            <div className="max-w-7xl mx-auto">

                <div className="mb-20">
                    <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
                        Projects
                    </p>

                    <h2 className="text-6xl font-bold">
                        Selected Work
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    <ProjectCard
                        title="AI Voice Assistant"
                        desc="Voice-enabled assistant for visually impaired students using OCR and AI summarization."
                    />

                    <ProjectCard
                        title="Restaurant Supply Platform"
                        desc="Modern full-stack e-commerce platform for restaurant ingredient supply management."
                    />

                </div>

            </div>

        </section>
    )
}
