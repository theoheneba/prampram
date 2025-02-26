import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Events in Prampram</h1>
          <p className="text-xl">Discover the vibrant cultural celebrations and events that make Prampram unique</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Homowo Festival"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Homowo Festival</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>August 2024</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Prampram Town Center</span>
              </div>
              <p className="text-gray-600 mb-4">
                Experience the traditional Homowo festival, a celebration of harvest and cultural heritage. Witness traditional dances, music, and the famous sprinkling of "kpokpoi."
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Prampram Cultural Festival"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Prampram Cultural Festival</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>December 2024</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Prampram Beach</span>
              </div>
              <p className="text-gray-600 mb-4">
                Join the annual cultural festival celebrating Prampram's heritage with traditional performances, art exhibitions, and local cuisine.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}