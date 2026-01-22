import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <main>
                {children}
            </main>
            <footer className="memo-container py-12 border-t border-border/40 text-sm text-muted">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest">© 2026 Product Professional</p>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-widest text-muted/60">
                        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                        <a href="#" className="hover:text-foreground transition-colors">Peerlist</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
