export default function ProjectCard({ title, desc }) {
    return (
        <div className="group border border-white/10 bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition duration-500">

            <div className="h-[300px] bg-zinc-900 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt="project"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
            </div>

            <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">
                    {title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    )
}
