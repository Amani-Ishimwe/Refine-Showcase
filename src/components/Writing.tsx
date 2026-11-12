import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../constants';

const Writing: React.FC = () => {
  return (
    <section id="writing" className="section-padding">
      <div className="editorial-container space-y-6">
        <span className="label">09 · Writing & Perspectives</span>

        <div className="grid grid-cols-1 gap-4 items-stretch">
          {ARTICLES.map((article) => (
            <Link
              key={article.id}
              to={`/writing/${article.id}`}
              className="skeuo-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:-translate-y-0.5 transition-transform"
            >
              <div className="space-y-1">
                <span className="text-[11px] text-muted font-bold">
                  {article.category} · {article.readTime}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-fg">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted">
                  {article.excerpt}
                </p>
              </div>

              <span className="skeuo-btn-secondary self-start sm:self-center shrink-0">
                <span>Read</span>
                <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
