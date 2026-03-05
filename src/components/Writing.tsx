import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../constants';

const Writing: React.FC = () => {
  return (
    <section id="writing" className="memo-container section-padding border-t border-border">
      <div className="mb-24">
        <span className="label">Selected Writing</span>
        <h2 className="max-w-xl leading-tight">
          Thoughts on <span className="text-accent/90">architecture</span>, culture, and technical execution.
        </h2>
      </div>

      <div className="space-y-12">
        {ARTICLES.map((article) => (
          <Link key={article.id} to={`/writing/${article.id}`} className="group block relative p-10 -m-10 hover:bg-surface/30 rounded-3xl transition-all duration-500 border border-transparent hover:border-border/50">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="flex flex-col gap-4 max-w-2xl">
                <span className="font-mono text-[9px] text-accent/60 uppercase tracking-widest">{article.date}</span>
                <h3 className="text-2xl font-medium group-hover:text-accent transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-base text-foreground/50 leading-relaxed font-light">
                  {article.excerpt}
                </p>
              </div>
              <div className="shrink-0 pt-1">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-500 font-mono text-xs">
                  →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default Writing;
