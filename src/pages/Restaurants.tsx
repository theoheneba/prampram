import React from 'react';
import { Utensils, MapPin, Clock, Phone } from 'lucide-react';

export default function Restaurants() {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Restaurants in Prampram</h1>
          <p className="text-xl">Savor local and international cuisine in our coastal town</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Ocean View Restaurant"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Ocean View Restaurant</h2>
              <p className="text-gray-600 mb-4">
                Fresh seafood and traditional Ghanaian dishes with a spectacular view.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Prampram Beach Road</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Phone className="w-4 h-4 mr-2" />
                <span>+233 20 123 4567</span>
              </div>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 w-full">
                Make Reservation
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Prampram Kitchen"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Prampram Kitchen</h2>
              <p className="text-gray-600 mb-4">
                Authentic local cuisine in a cozy, family-friendly atmosphere.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Town Center</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>12:00 PM - 9:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Phone className="w-4 h-4 mr-2" />
                <span>+233 20 987 6543</span>
              </div>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 w-full">
                Make Reservation
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Sunset Café"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Sunset Café</h2>
              <p className="text-gray-600 mb-4">
                International cuisine and cocktails with stunning sunset views.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Lighthouse Area</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>4:00 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Phone className="w-4 h-4 mr-2" />
                <span>+233 20 456 7890</span>
              </div>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 w-full">
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}