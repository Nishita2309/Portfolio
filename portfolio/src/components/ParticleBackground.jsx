import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#050505",
                },
            },

            fpsLimit: 120,

            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },

                    onHover: {
                        enable: true,
                        mode: "grab",
                    },

                    resize: true,
                },

                modes: {
                    push: {
                        quantity: 4,
                    },

                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.6,
                        },
                    },
                },
            },

            particles: {
                color: {
                    value: "#ffffff",
                },

                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                },

                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },

                    random: false,
                    speed: 0.5,
                    straight: false,
                },

                number: {
                    density: {
                        enable: true,
                    },

                    value: 50,
                },

                opacity: {
                    value: 0.2,
                },

                shape: {
                    type: "circle",
                },

                size: {
                    value: { min: 1, max: 4 },
                },
            },

            detectRetina: true,
        }),
        [],
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="fixed inset-0 -z-10"
        />
    );
}