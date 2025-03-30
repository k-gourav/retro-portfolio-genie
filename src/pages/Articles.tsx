
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

interface Article {
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  link: string;
}

const Articles: React.FC = () => {
  const articles: Article[] = [
    {
      title: "Building Reliable Web Services: Lessons from the Trenches",
      publication: "Tech Monthly",
      date: "June 2023",
      excerpt: "An in-depth look at my experience building resilient web services that can handle high traffic and unexpected failures.",
      link: "#"
    },
    {
      title: "The Evolution of JavaScript Frameworks",
      publication: "Web Developer Magazine",
      date: "April 2023",
      excerpt: "Examining how JavaScript frameworks have evolved over the past decade and where they're headed next.",
      link: "#"
    },
    {
      title: "Leading Technical Teams in Remote Environments",
      publication: "Leadership Today",
      date: "March 2023",
      excerpt: "Strategies for effectively managing and motivating distributed technical teams across different time zones.",
      link: "#"
    },
    {
      title: "Decentralized Apps: The Future of Web3",
      publication: "Blockchain Insider",
      date: "January 2023",
      excerpt: "How decentralized applications are reshaping our interaction with the internet and digital services.",
      link: "#"
    },
    {
      title: "Mobile-First Development: Best Practices",
      publication: "App Development Journal",
      date: "November 2022",
      excerpt: "A guide to designing and developing applications with mobile users as the primary focus.",
      link: "#"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          Published Articles
        </h1>
      </div>
      
      <div className="mb-8 retro-section">
        <h2 className="text-3xl font-retro text-retro-red mb-4 text-center">My Technical Publications</h2>
        
        <p className="font-mono text-center mb-4">
          Articles I've written for various technology publications and industry journals.
        </p>
        
        <div className="flex justify-center">
          <FileText size={32} className="text-retro-blue" />
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {articles.map((article, index) => (
          <div key={index} className="retro-section hover:border-retro-blue transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-retro text-xl text-retro-blue">{article.title}</h3>
              <span className="font-mono text-sm border border-black px-1 bg-gray-100">
                {article.date}
              </span>
            </div>
            
            <div className="font-mono italic mb-2">
              Published in <span className="font-bold">{article.publication}</span>
            </div>
            
            <p className="font-mono mb-4">{article.excerpt}</p>
            
            <a 
              href={article.link} 
              className="retro-button font-retro text-sm inline-flex items-center no-underline text-black"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} className="mr-1" />
              Read Full Article
            </a>
          </div>
        ))}
      </div>
      
      <div className="retro-section mb-8">
        <h3 className="font-retro text-xl text-retro-blue mb-4 text-center">Want Me to Write for Your Publication?</h3>
        
        <p className="font-mono text-center mb-4">
          I'm available for technical writing on topics related to software development, leadership, 
          emerging technologies, and digital transformation.
        </p>
        
        <div className="text-center">
          <a href="/contact" className="retro-button font-retro inline-block">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
