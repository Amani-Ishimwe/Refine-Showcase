import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../constants';

const Writing: React.FC = () => {
  return (
    <section id="writing" className="memo-container section-padding border-t border-border/40">
      <div className="mb-12">
        <span className="label">Index / 06</span>
        <h2 className="text-3xl font-medium font-serif-italic">Selected Writing</h2>
        <p className="text-sm text-foreground/60 mt-2 max-w-sm">
          A collection of thoughts on product architecture and engineering culture.
        </p>
      </div>

      <div className="space-y-6">
        {ARTICLES.map((article) => (
          <Link key={article.id} to={`/writing/${article.id}`} className="group block">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-border/20 pb-6 gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {article.excerpt}
                </p>
              </div>
              <span className="font-mono text-[10px] text-muted uppercase tracking-widest shrink-0">{article.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Writing;
