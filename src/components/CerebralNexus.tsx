import React from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 

export const CerebralNexus = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#020818",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#61E8E1",
                },
                links: {
                    color: "#F4D03F",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (!init) {
        return null;
    }

    const academicPillars = ['Science & Technology', 'Humanities & Social Sciences', 'Arts & Design', 'Global Citizenship'];

    return (
        <section id="cerebral-nexus" className="min-h-screen py-20 relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0">
                 <Particles id="tsparticles" options={particlesOptions} />
            </div>
            <div className="relative z-10 text-center">
                <h2 className="font-exo text-4xl md:text-5xl text-parchment-white mb-4 tracking-mind elysian-text-glow">
                    The Cerebral Nexus
                </h2>
                <p className="font-sora text-lg text-lunar-teal max-w-2xl mx-auto mb-12 leading-heart">
                    Where disciplines connect and new ideas are born. Explore our core academic pillars.
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {academicPillars.map(pillar => (
                        <div key={pillar} className="elysian-card">
                             <h3 className="font-exo text-2xl text-alchemic-gold tracking-mind">{pillar}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
