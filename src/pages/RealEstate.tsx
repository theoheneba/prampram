import React from 'react';
import { Home, MapPin, Phone, Mail } from 'lucide-react';

export default function RealEstate() {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Real Estate in Prampram</h1>
          <p className="text-xl">Discover your dream property in Ghana's emerging coastal destination</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Beachfront Villa"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Beachfront Villa</h2>
              <p className="text-gray-600 mb-4">
                Luxurious 4-bedroom villa with private beach access and panoramic ocean views.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Prampram Beach Road</span>
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-4">$450,000</div>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 w-full">
                Contact Agent
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Modern Apartment"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Modern Apartment</h2>
              <p className="text-gray-600 mb-4">
                Contemporary 2-bedroom apartment in a secure complex with community facilities.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Central Prampram</span>
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-4">$180,000</div>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 w-full">
                Contact Agent
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Investment Land"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Investment Land</h2>
              <p className="text-gray-600 mb-4">
                Prime development land with approved permits, perfect for commercial projects.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>New Development Area</span>
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-4">$120,000</div>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 w-full">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}