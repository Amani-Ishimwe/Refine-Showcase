import React from 'react';
import { Link } from 'react-router-dom';

const Writing: React.FC = () => {
  const articles = [
    {
      title: "Documentation as a Professional Skill",
      date: "Oct 2025",
      excerpt: "Why the best engineers treat READMEs and design docs with the same rigor as their codebase."
    },
    {
      title: "Design Thinking for Engineers",
      date: "Aug 2025",
      excerpt: "Moving beyond pixels: how to use a designer's mindset to architect better technical systems."
    },
    {
      title: "Building Products with Empathy",
      date: "Jun 2025",
      excerpt: "How deep user understanding leads to cleaner features and more durable products."
    }
  ];

  return (
    <section id="writing" className="container-custom section-padding">
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">03 / Thinking</span>
        <h2 className="text-3xl font-medium">Curated insights on products and process.</h2>
      </div>

      <div className="space-y-12">
        {articles.map((article, idx) => {
          const id = idx === 0 ? "documentation" : idx === 1 ? "design-thinking" : "empathy";
          return (
            <Link key={idx} to={`/writing/${id}`} className="group block cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8 mb-4">
                <span className="font-mono text-xs text-muted uppercase shrink-0">{article.date}</span>
                <h3 className="text-2xl font-medium group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
              <p className="max-w-[600px] text-muted text-sm leading-relaxed md:ml-[100px]">
                {article.excerpt}
              </p>
              <div className="mt-6 md:ml-[100px] h-[1px] w-full bg-border transition-all group-hover:bg-accent"></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Writing;
