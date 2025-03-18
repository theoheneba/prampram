import React from 'react';
import { Compass, MapPin, Star } from 'lucide-react';

export default function ThingsToDo() {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Things to Do in Prampram</h1>
          <p className="text-xl">Explore the best activities and attractions in our coastal paradise</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/377826121.jpg?k=9490f000051a38914f7eb68c1459fbb177fe0903dde0570d722cf784a8e374df&o=&hp=1"
              alt="Beach Activities"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Prampram Beach</h2>
              <p className="text-gray-600 mb-4">
                Enjoy swimming, sunbathing, and water sports at our pristine beaches. Perfect for families and adventure seekers.
              </p>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Prampram Beach Front</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://visitghana.com/wp-content/uploads/2019/09/Jerry-Johnson-Ancestral-Wall-580x350.jpg"
              alt="African Ancestral Wall"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">African Ancestral Wall</h2>
              <p className="text-gray-600 mb-4">
                The African Ancestral Wall is an open-air wall gallery of portraits of heroes and heroines who fought for the emancipation of Africa.
              </p>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Carboo Kope, Prampram</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/21/8a/07/keta-fort-prinzenstein.jpg?w=900&h=500&s=1"
              alt="Cultural Tours"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Fort Venon</h2>
              <p className="text-gray-600 mb-4">
                Fort Vernon was built in 1742, out of some of the cheapest materials – rough stones and swish. It was abandoned approximately in 1816, whence it fell into ruins.
              </p>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Fort Venon, Prampram</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}