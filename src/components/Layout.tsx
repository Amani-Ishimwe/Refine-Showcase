import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <main>
                {children}
            </main>
            <footer className="memo-container py-20 border-t border-border mt-16 text-center">
                <div className="flex flex-col items-center gap-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
                        Design & Code © 2026 / Kigali
                    </p>
                    <div className="flex items-center gap-x-8 font-semibold text-[10px] uppercase tracking-[0.2em] text-muted">
                        <a href="https://www.linkedin.com/in/amani-ishimwe-409825331/" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">LinkedIn</a>
                        <a href="https://github.com/Amani-Ishimwe" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">GitHub</a>
                        <a href="https://peerlist.io/amaniishimwe36" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">Peerlist</a>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Layout;
