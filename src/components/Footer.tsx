import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-subtle">
          &copy; {new Date().getFullYear()} Amani Samuel. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-subtle font-medium">
          <a href="#" className="hover:text-text transition-colors">Twitter</a>
          <a href="#" className="hover:text-text transition-colors">GitHub</a>
          <a href="#" className="hover:text-text transition-colors">LinkedIn</a>
          <a href="mailto:amanisamuel10@gmail.com" className="hover:text-text transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};
