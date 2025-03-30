
import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset submitted status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="retro-header">
        <h1 className="text-xl sm:text-2xl font-pixel">
          Send Me An Email
        </h1>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-yellow-300 px-3 py-1 border-2 border-black">
          <Mail className="mr-2" />
          <span className="font-retro text-xl blink">EMAIL</span>
          <Mail className="ml-2" />
        </div>
      </div>
      
      <div className="retro-section">
        {submitted ? (
          <div className="text-center py-8">
            <div className="inline-block mx-auto border-2 border-black p-6 bg-green-100">
              <h3 className="font-retro text-2xl text-retro-blue mb-3">Message Sent!</h3>
              <p className="font-mono">Thank you for your message. I'll get back to you as soon as possible.</p>
              <div className="mt-4">
                <img src="https://i.imgur.com/rYjuJYp.gif" alt="Thank you" className="h-12 mx-auto" />
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="font-mono">
            <div className="mb-4">
              <label className="block mb-2 font-retro">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-2 bg-white"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-retro">
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-2 bg-white"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-retro">
                Your Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full border-2 border-black p-2 bg-white"
              />
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="retro-button font-retro text-xl"
              >
                <span className="flex items-center">
                  <Send className="mr-2" size={18} />
                  Send Message
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-block border border-black bg-gray-200 p-2 font-mono text-sm">
          <p>Alternatively, you can reach me at:</p>
          <a href="mailto:contact@devinsmith.com" className="font-bold">contact@devinsmith.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
