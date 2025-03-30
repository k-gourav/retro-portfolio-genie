
import React from 'react';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blogs: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of AI in Software Development",
      excerpt: "How artificial intelligence is transforming the way we build and maintain software applications.",
      date: "May 15, 2023",
      readTime: "8 min",
      category: "Technology",
      image: "https://placehold.co/600x400/blue/white?text=AI+Development"
    },
    {
      id: "2",
      title: "Building Scalable Web Applications",
      excerpt: "Best practices for designing web applications that can handle growth and increased user demand.",
      date: "April 3, 2023",
      readTime: "12 min",
      category: "Web Development",
      image: "https://placehold.co/600x400/teal/white?text=Scalable+Apps"
    },
    {
      id: "3",
      title: "The Role of a CTO in Modern Startups",
      excerpt: "How the CTO position has evolved and what it means for today's technology-driven startups.",
      date: "March 21, 2023",
      readTime: "6 min",
      category: "Leadership",
      image: "https://placehold.co/600x400/purple/white?text=CTO+Role"
    },
    {
      id: "4",
      title: "Blockchain: Beyond Cryptocurrency",
      excerpt: "Exploring practical applications of blockchain technology in various industries and sectors.",
      date: "February 12, 2023",
      readTime: "10 min",
      category: "Blockchain",
      image: "https://placehold.co/600x400/green/white?text=Blockchain"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          Blog Posts
        </h1>
      </div>
      
      <div className="mb-8 retro-section">
        <h2 className="text-3xl font-retro text-retro-red mb-4 text-center">My Thoughts & Ideas</h2>
        
        <p className="font-mono text-center mb-4">
          I write about technology, leadership, innovation, and the future of software development.
        </p>
      </div>
      
      <div className="space-y-6 mb-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="retro-section hover:border-retro-blue transition-colors">
            <div className="md:flex">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-40 object-cover border border-black"
                />
              </div>
              
              <div className="md:w-2/3">
                <h3 className="font-retro text-xl text-retro-blue mb-2">{post.title}</h3>
                
                <div className="flex flex-wrap gap-3 mb-3 text-sm font-mono">
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime} read
                  </span>
                  <span className="flex items-center">
                    <Tag size={14} className="mr-1" />
                    {post.category}
                  </span>
                </div>
                
                <p className="font-mono mb-3">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="flex items-center font-retro text-retro-blue hover:underline"
                >
                  Read More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center retro-section">
        <button className="retro-button font-retro" disabled>
          Previous
        </button>
        
        <div className="flex space-x-2">
          <span className="w-8 h-8 flex items-center justify-center font-retro bg-retro-blue text-white border border-black">
            1
          </span>
          <span className="w-8 h-8 flex items-center justify-center font-retro border border-black hover:bg-gray-200 cursor-pointer">
            2
          </span>
          <span className="w-8 h-8 flex items-center justify-center font-retro border border-black hover:bg-gray-200 cursor-pointer">
            3
          </span>
        </div>
        
        <button className="retro-button font-retro">
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
