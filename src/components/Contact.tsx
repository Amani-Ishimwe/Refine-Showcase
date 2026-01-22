import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="memo-container section-padding border-t border-border/40">
            <div className="flex flex-col gap-10">
                <div>
                    <span className="label text-foreground/40 mb-2 block font-mono text-[10px] uppercase tracking-[0.2em]">Index / 08</span>
                    <h2 className="text-4xl font-medium tracking-tight mb-4 font-serif-italic">Ready to discuss your product?</h2>
                    <p className="text-base text-foreground/70 leading-relaxed font-normal max-w-sm">
                        I specialize in structural engineering and design strategy. Inquiries are usually reviewed within 24 hours.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    <a href="mailto:samuel.amani@example.com" className="text-2xl font-medium underline underline-offset-12 decoration-border/40 hover:decoration-foreground transition-all w-fit">
                        samuel.amani@example.com
                    </a>

                    <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4">
                        <a href="#" className="label hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="label hover:text-foreground transition-colors">GitHub</a>
                        <a href="#" className="label hover:text-foreground transition-colors">Peerlist</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
