import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES, PROFILE_CONFIG } from '../constants';
import SEOHead from '../components/SEOHead';

const WritingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="editorial-container py-16">
        <SEOHead title="Article Not Found" />
        <div className="skeuo-card p-8 space-y-4 max-w-lg">
          <h1 className="text-2xl font-bold text-fg">Article not found.</h1>
          <Link to="/" className="skeuo-btn">
            <span>← Return Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={`${article.title} — Writing`} description={article.excerpt} />
      <article className="memo-container pt-6 pb-16 space-y-6">
        <header className="skeuo-card p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between text-xs text-muted font-bold">
            <Link to="/" className="hover:text-fg">← Home</Link>
            <span>{article.date} · {article.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-fg">{article.title}</h1>
          <p className="text-xs sm:text-sm text-muted">{article.excerpt}</p>
        </header>

        <div className="skeuo-card p-6 sm:p-8 space-y-6">
          {article.sections.map((sec) => (
            <section key={sec.heading} className="space-y-2">
              <h2 className="text-lg font-bold text-fg">{sec.heading}</h2>
              {sec.body.map((p, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-muted font-bold">{PROFILE_CONFIG.fullName}</span>
            <Link to="/services/technical-documentation-architecture" className="skeuo-btn">
              <span>Documentation Service</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default WritingDetails;
