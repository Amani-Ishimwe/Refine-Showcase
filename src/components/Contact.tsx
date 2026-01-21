import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="container-custom section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">06 / Contact</span>
                    <h2 className="text-4xl font-medium tracking-tight mb-8">Ready to start with a clarity call?</h2>
                    <p className="text-muted leading-relaxed font-light max-w-[400px]">
                        Direct inquiries for new projects or advisory roles. Usually responding within 24 hours.
                    </p>
                </div>
                <div className="flex flex-col justify-end items-start md:items-end gap-6 font-mono text-sm uppercase tracking-widest">
                    <a href="mailto:hello@productprofessional.com" className="hover:text-accent transition-colors border-b border-border py-2 w-full md:w-auto text-left md:text-right">
                        Email: hello@example.com
                    </a>
                    <a href="#" className="hover:text-accent transition-colors border-b border-border py-2 w-full md:w-auto text-left md:text-right">
                        LinkedIn / ProductEngineer
                    </a>
                    <a href="#" className="hover:text-accent transition-colors border-b border-border py-2 w-full md:w-auto text-left md:text-right">
                        GitHub / CodeClear
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
