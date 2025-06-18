
import React from 'react';

export const CerebralNexus = () => {
    const academicPillars = ['Science & Technology', 'Humanities & Social Sciences', 'Arts & Design', 'Global Citizenship'];

    return (
        <section id="cerebral-nexus" className="min-h-screen py-20 relative flex flex-col items-center justify-center bg-charcoal-grey">
            {/* Custom Particle Background */}
            <div className="absolute inset-0 z-0">
                {Array.from({ length: 60 }).map((_, i) => (
                    <div
                        key={i}
                        className="nexus-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center">
                <h2 className="font-poppins text-4xl md:text-5xl font-bold text-off-white mb-4">
                    The Cerebral Nexus
                </h2>
                <p className="font-nunito text-lg text-off-white/80 max-w-2xl mx-auto mb-12">
                    Where disciplines connect and new ideas are born. Explore our core academic pillars.
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {academicPillars.map(pillar => (
                        <div key={pillar} className="glass-card p-8 rounded-xl text-center">
                             <h3 className="font-poppins text-2xl font-bold text-energetic-red">{pillar}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
