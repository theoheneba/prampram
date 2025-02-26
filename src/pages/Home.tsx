import React from 'react';
import { ChevronRight, MapPin, Star, Calendar, Palmtree as PalmTree, Umbrella, Fish, Users, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://assets.gviworld.com/cdn-cgi/image/gravity=0.5x0.5,format=auto,quality=100/https://cdn.gvi.co.uk/wp-content/uploads/2022/11/222311054-2022-nov-23-09-25-33-000000-puerto-morelos-2022-11-11-21-46-44-utc.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Experience <span className="text-yellow-400">Prampram</span></h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">Where traditional Ghanaian culture meets pristine beaches and modern comfort</p>
            <div className="flex gap-4">
              <Link to="/things-to-do" className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-700 transition duration-300 flex items-center">
                Explore Activities
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/events" className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-600 transition duration-300">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white py-8 shadow-lg relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Link to="/beaches" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <Umbrella className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Beaches</span>
            </Link>
            <Link to="/fishing" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <Fish className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Fishing</span>
            </Link>
            <Link to="/culture" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <Users className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Culture</span>
            </Link>
            <Link to="/resorts" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <PalmTree className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Resorts</span>
            </Link>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Rich History & Heritage</h2>
              <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Prampram, also known as Gbugbla, is a historic coastal town in the Greater Accra Region of Ghana. As the district capital of Ningo-Prampram, it stands as a testament to Ghana's rich cultural heritage and maritime history.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The town's history dates back several centuries, with the indigenous Prampram people being part of the Ga-Dangme ethnic group. The community has traditionally been known for its fishing industry, which remains an important part of local life today.
              </p>
              <p className="text-lg text-gray-600">
                Today, while maintaining its traditional charm, Prampram is evolving into a modern coastal destination, attracting visitors and investors from around the world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://accessagric.com/wp-content/uploads/2022/04/Ghana-fishermen-with-long-014.webp"
                alt="Traditional Fishing Boats"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Local Culture"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hotels & Resorts Section */}
      <div className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotels & Resorts</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Luxurious stays along Prampram's beautiful coastline</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative">
                <img 
                  src="https://images.trvl-media.com/lodging/38000000/37900000/37890900/37890803/3adb25f7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
                  alt="Prampram Beach Resort"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  4.5 ★
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Accruase Paradise</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Paradise Avenue, Prampram</span>
                </div>
                <p className="text-gray-600 mb-4">
                  No matter where we originate from, we cherish our tradition.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">From GH₵ 927/night</span>
                  <a 
                    href="https://accruase.com/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative">
                <img 
                  src="https://ocean-green-beach-resort-icon-house-prampram.booked.net/data/Photos/OriginalPhoto/11872/1187215/1187215726/Ocean-Green-Beach-Resort-Icon-House-Prampram-Exterior.JPEG"
                  alt="Ocean Green Beach and resort"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  4.3 ★
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ocean Green Beach and resort</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>OceanGreen Beach, Prampram</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Modern resort with ocean views, spa services, and conference facilities.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">From GH₵ 1,024/night</span>
                  <a 
                    href="https://www.oceangreenbeachvillas.com/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative">
                <img 
                  src="https://images.trvl-media.com/lodging/37000000/37000000/36996300/36996241/42e6c1bd.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
                  alt="La Tua Villas Limited"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  4.4 ★
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">La Tua Villas Limited</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>La Tua Pardie kope, Prampram</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Best place for a perfect holiday experience with memories to cherish.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">From GH₵ 600/night</span>
                  <a 
                    href="https://www.latuavillas.com/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Things to Do Preview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Things to Do</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Explore the best activities and experiences in Prampram</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://accessagric.com/wp-content/uploads/2022/04/Ghana-fishermen-with-long-014.webp"
                  alt="Fishing Tours"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Traditional Fishing Tours</h3>
                <p className="text-gray-600 mb-4">Experience authentic fishing culture with local fishermen in traditional boats</p>
                <Link to="/things-to-do" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://www.easytrackghana.com/images/photos2/fishing-boats-2.jpg"
                  alt="Water Sports"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Beach Activities</h3>
                <p className="text-gray-600 mb-4">Enjoy swimming, surfing, and various water sports along our pristine coastline</p>
                <Link to="/things-to-do" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="https://www.myjoyonline.com/wp-content/uploads/2023/07/Prampram-Traditional-Council-637x424.jpeg"
                  alt="Cultural Tours"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cultural Experiences</h3>
                <p className="text-gray-600 mb-4">Immerse yourself in local traditions, festivals, and authentic Ghanaian culture</p>
                <Link to="/things-to-do" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}