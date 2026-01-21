import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen pt-16">
            <main>
                {children}
            </main>
            <footer className="container-custom py-12 border-t border-border mt-12 text-sm text-muted">
                <div className="flex justify-between items-center">
                    <p>© 2026 Product Professional Portfolio</p>
                    <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest">
                        <a href="#" className="hover:text-foreground">Email</a>
                        <a href="#" className="hover:text-foreground">LinkedIn</a>
                        <a href="#" className="hover:text-foreground">GitHub</a>
                        <a href="#" className="hover:text-foreground">Peerlist</a>
                        <a href="#" className="hover:text-foreground">Behance</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
