import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const WritingDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const articles: Record<string, any> = {
        "documentation": {
            title: "Documentation as a Professional Skill",
            date: "Oct 2025",
            content: `The best engineers I've worked with don't treat documentation as a chore. They treat it as a fundamental feature of the product. 

When you write a README, a design doc, or API documentation, you are doing more than just explaining code. You are providing clarity, reducing friction for others, and ensuring the longevity of the system.

Clarity is a competitive advantage. Highly documented systems are easier to maintain, faster to scale, and more approachable for new team members.`
        },
        "design-thinking": {
            title: "Design Thinking for Engineers",
            date: "Aug 2025",
            content: "Design is not about how things look; it's about how they work. For engineers, design thinking means understanding the constraints of the user before writing a single line of code..."
        },
        "empathy": {
            title: "Building Products with Empathy",
            date: "Jun 2025",
            content: "Empathy in engineering is the ability to place yourself in the user's workflow. It's about spotting the small annoyances that, when scaled, become major obstacles to product success."
        }
    };

    const article = id ? articles[id] : null;

    if (!article) return <div>Article not found</div>;

    return (
        <Layout>
            <div className="container-custom pt-32 pb-24 max-w-[800px]">
                <Link to="/" className="font-mono text-[10px] uppercase text-accent mb-12 inline-block hover:underline">← Back to Home</Link>

                <header className="mb-16">
                    <span className="font-mono text-xs text-muted uppercase tracking-widest mb-4 block">{article.date}</span>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">{article.title}</h1>
                </header>

                <div className="prose prose-stone max-w-none">
                    <p className="text-xl leading-relaxed font-light text-subtle italic mb-12 border-l-2 border-accent pl-8">
                        This article explores the intersection of disciplined engineering and professional communication.
                    </p>
                    <div className="space-y-8 text-lg leading-[1.8] font-light">
                        {article.content.split('\n\n').map((para: string, i: number) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WritingDetails;
