export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-6 py-32"
        >

            <div className="text-center max-w-3xl">

                <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
                    Contact
                </p>

                <h2 className="text-6xl font-bold mb-10">
                    Let’s Build Something Amazing.
                </h2>

                <a
                    href="mailto:yourmail@gmail.com"
                    className="inline-block px-10 py-5 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
                >
                    Contact Me
                </a>

            </div>

        </section>
    )
}
