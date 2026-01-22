import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ARTICLES } from '../constants';

const WritingDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = ARTICLES.find(a => a.id === id);

    if (!article) return (
        <Layout>
            <div className="memo-container pt-32 pb-24">
                <Link to="/" className="label hover:text-foreground transition-colors mb-12 inline-block">← Back to Registry</Link>
                <div className="text-sm text-foreground/60">Article not found in registry.</div>
            </div>
        </Layout>
    );

    return (
        <Layout>
            <article className="memo-container pt-32 pb-24">
                <Link to="/" className="label hover:text-foreground transition-colors mb-12 inline-block">← Back to Registry</Link>

                <header className="mb-16">
                    <div className="flex justify-between items-baseline border-b border-border/60 pb-4 mb-8">
                        <h1 className="text-3xl font-medium">{article.title}</h1>
                        <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{article.date}</span>
                    </div>
                </header>

                <div className="prose prose-stone max-w-none">
                    <p className="text-sm text-foreground/60 italic leading-relaxed mb-12 border-l border-accent/20 pl-6">
                        Summary of professional insight captured for internal registry and methodology review.
                    </p>
                    <div className="space-y-12 text-sm leading-relaxed text-foreground/80 font-normal">
                        <p>{article.excerpt}</p>
                        <div className="h-[1px] w-12 bg-border/40" />
                        <p className="text-xs text-muted leading-relaxed italic">
                            [ Full article content is available in the internal knowledge base.
                            This brief serves as a high-level conceptual anchor for the portfolio registry. ]
                        </p>
                    </div>
                </div>

                <div className="divider" />

                <div className="pt-8 text-center text-muted/40">
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] leading-relaxed">
                        End of Briefing / Captured by Samuel Amani
                    </p>
                </div>
            </article>
        </Layout>
    );
};

export default WritingDetails;
