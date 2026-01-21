import React from 'react';

const HowIWork: React.FC = () => {
    const pillars = [
        {
            title: "Curiosity & Problem Solving",
            desc: "I don't start with solutions. I start with questions to uncover the 'why' behind the 'what'."
        },
        {
            title: "Daily Discipline",
            desc: "High-quality results are the byproduct of consistent, daily effort and structured routines."
        },
        {
            title: "Clean, Maintainable Code",
            desc: "I write for the human who reads the code tomorrow, prioritizing clarity over cleverness."
        },
        {
            title: "User-Centered Design",
            desc: "Thoughtful design is invisible. I focus on reducing friction and creating intuitive paths."
        },
        {
            title: "Documentation as Standard",
            desc: "If it's not documented, it's not finished. Clear handoffs and setup notes are non-negotiable."
        },
        {
            title: "Full Project Ownership",
            desc: "I manage milestones and stakeholder expectations from the first discovery call to launch."
        }
    ];

    return (
        <section id="process" className="bg-foreground text-background">
            <div className="container-custom section-padding">
                <div className="mb-20">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">02 / Mindset</span>
                    <h2 className="text-3xl font-medium max-w-[500px]">How I translate mindset into practice.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="space-y-4">
                            <span className="font-mono text-accent text-sm">0{idx + 1}</span>
                            <h3 className="text-xl font-medium pt-2 border-t border-background/20">{pillar.title}</h3>
                            <p className="text-sm text-background/60 leading-relaxed font-light">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
