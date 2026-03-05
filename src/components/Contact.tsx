import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="memo-container section-padding border-t border-border">
            <div className="flex flex-col gap-12 md:gap-20 text-center items-center">
                <div>
                    <span className="label">Contact</span>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 leading-[1.1] max-w-xl">
                        Ready to discuss your <span className="font-serif italic text-muted">next product</span>?
                    </h2>
                </div>

                <div className="flex flex-col gap-10 items-center">
                    <p className="text-sm md:text-base text-muted leading-relaxed font-light max-w-sm m-0">
                        I specialize in structural engineering and design strategy.
                    </p>

                    <a href="mailto:amanisamuel10@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-xl md:text-3xl font-medium text-fg hover:text-muted transition-all duration-300 w-fit">
                        amanisamuel10@gmail.com
                        <span className="group-hover:translate-x-3 transition-transform duration-300">→</span>
                    </a>

                    <div className="flex justify-center gap-x-10 gap-y-4 pt-12 border-t border-border w-full">
                        <a href="https://www.linkedin.com/in/amani-ishimwe-409825331/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-muted hover:text-fg font-semibold">LinkedIn</a>
                        <a href="https://github.com/Amani-Ishimwe" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-muted hover:text-fg font-semibold">GitHub</a>
                        <a href="https://peerlist.io/amaniishimwe36" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-muted hover:text-fg font-semibold">Peerlist</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
