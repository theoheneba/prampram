import React from 'react';
import { Calendar } from 'lucide-react';

export default function News() {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Latest News from Prampram</h1>
          <p className="text-xl">Stay updated with the latest developments and stories from our community</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Development News"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>March 15, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">New Beach Resort Development Announced</h2>
              <p className="text-gray-600 mb-4">
                A major international hotel chain has announced plans to develop a luxury beach resort in Prampram, marking a significant milestone in the town's tourism development. The project is expected to create hundreds of local jobs and boost the local economy.
              </p>
              <button className="text-blue-900 font-semibold">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Cultural News"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>March 12, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Cultural Festival Returns Next Month</h2>
              <p className="text-gray-600 mb-4">
                The annual Prampram Cultural Festival is set to return next month, featuring traditional performances, art exhibitions, and celebrations of local heritage. The event is expected to draw visitors from across Ghana and beyond.
              </p>
              <button className="text-blue-900 font-semibold">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}