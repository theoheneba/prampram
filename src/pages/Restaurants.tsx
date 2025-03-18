import React from 'react';
import { Utensils, MapPin, Clock, Phone, Star } from 'lucide-react';

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
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/618877087.jpg?k=a0811eac4d4389412d1da3aaec41376bd4145ab92b3978579b2899b645bf798c&o=&hp=1"
              alt="Ocean Green Beach & Resort"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">Ocean Green Beach & Resort</h2>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">4.5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Fresh seafood and traditional Ghanaian dishes with ocean views. Known for their grilled tilapia and banku.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>OceanGreen Beach, Prampram</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>09:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Phone className="w-4 h-4 mr-2" />
                <span>+233 20 140 9489</span>
              </div>
              <a 
                href="http://www.oceangreenbeachvillas.com/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 w-full block text-center"
              >
                Reserve a Table
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://img1.wsimg.com/isteam/ip/58aa151d-bb11-4f3f-bee3-9c6e891ed4e4/IMG_8831.jpeg/:/rs=w:600,cg:true,m"
              alt="Acurase Restaurant"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">Acurase Restaurant</h2>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">4.8</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Authentic local cuisine featuring fufu, jollof rice, and traditional soups. A true taste of Ghana.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Central Market Area</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Phone className="w-4 h-4 mr-2" />
                <span>+(233)-57-585-0763</span>
              </div>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 w-full">
                Call to Reserve
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipP7EeJrhBnx0iFxKmS8GYl7sylMifwqAuJyg85z=s1360-w1360-h1020"
              alt="Bite Moguls Eatery"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">Bite Moguls Eatery</h2>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">4.6</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                International cuisine with Ghanaian fusion. Famous for seafood platters and sunset dining.
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>miotso road, Central University College Rd, Prampram</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>12:00 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Phone className="w-4 h-4 mr-2" />
                <span>024 620 4348</span>
              </div>
              <a 
                href="https://thebitemogulz.wixsite.com/eatery"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 w-full block text-center"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">More Local Favorites</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Seaside Spot</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">4.3</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Local spot famous for fresh grilled fish and cold drinks</p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Fishing Harbor</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Lighthouse Café</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">4.4</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Casual café serving breakfast, sandwiches, and local snacks</p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Lighthouse Area</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>7:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}