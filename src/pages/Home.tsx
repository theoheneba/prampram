import { ChevronRight, MapPin, Star, Palmtree as PalmTree, Umbrella, Fish, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from "../components/AnimatedSection.tsx";
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="pt-20">
      <SEO 
        title="Prampram - Discover Amazing Culture and Beaches in Ghana"
        description="Experience the beauty of Prampram, Ghana - pristine beaches, rich culture, and modern comfort. Plan your visit to this coastal paradise."
        keywords="Prampram, Ghana beaches, Ghana tourism, Prampram hotels, Prampram culture, Ghana coastal town"
      />
      
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
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Experience <span className="text-yellow-400">Prampram</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white mb-8 max-w-2xl"
            >
              Where traditional Ghanaian culture meets pristine beaches and modern comfort
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/things-to-do" className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-700 transition duration-300 flex items-center shadow-lg hover:shadow-emerald-500/20">
                Explore Activities
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/events" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-blue-500/20">
                View Events
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white py-8 shadow-lg relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Link to="/beaches" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Umbrella className="w-6 h-6 text-emerald-600" />
              </motion.div>
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Beaches</span>
            </Link>
            <Link to="/fishing" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Fish className="w-6 h-6 text-emerald-600" />
              </motion.div>
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Fishing</span>
            </Link>
            <Link to="/culture" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Users className="w-6 h-6 text-emerald-600" />
              </motion.div>
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Culture</span>
            </Link>
            <Link to="/resorts" className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <PalmTree className="w-6 h-6 text-emerald-600" />
              </motion.div>
              <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">Resorts</span>
            </Link>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
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
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  src="https://accessagric.com/wp-content/uploads/2022/04/Ghana-fishermen-with-long-014.webp"
                  alt="Traditional Fishing Boats in Prampram"
                  className="rounded-lg shadow-lg"
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Local Culture in Prampram Ghana"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 3D Interactive Map Section */}
      <AnimatedSection className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Prampram</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Discover the beauty of our coastal town</p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31759.708204113525!2d0.12357470000000001!3d5.7183934999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207d6f9e919319%3A0x7cd1e5bd3b438627!2sPrampram!5e0!3m2!1sen!2sgh!4v1740702161108!5m2!1sen!2sgh" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              title="Map of Prampram, Ghana"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>

      {/* Hotels & Resorts Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotels & Resorts</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Luxurious stays along Prampram's beautiful coastline</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src="https://images.trvl-media.com/lodging/38000000/37900000/37890900/37890803/3adb25f7.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
                    alt="Accruase Paradise Resort in Prampram"
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
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src="https://ocean-green-beach-resort-icon-house-prampram.booked.net/data/Photos/OriginalPhoto/11872/1187215/1187215726/Ocean-Green-Beach-Resort-Icon-House-Prampram-Exterior.JPEG"
                    alt="Ocean Green Beach and resort in Prampram"
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
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img 
                    src="https://ahotoguesthouseghana.com/storage/ahoto/room/featured-images/featured_image_64920e89c77b7.jpg"
                    alt="La Tua Villas Limited in Prampram"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    4.4 ★
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ahoto Guest House</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Ahoto, Prampram</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Best place for a perfect holiday experience with memories to cherish.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-600 font-semibold">From GH₵ 300/night</span>
                    <a 
                      href="https://ahotoguesthouseghana.com/"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Things to Do Preview */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Things to Do</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Explore the best activities and experiences in Prampram</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src="https://accessagric.com/wp-content/uploads/2022/04/Ghana-fishermen-with-long-014.webp"
                    alt="Fishing Tours in Prampram Ghana"
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
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src="https://www.easytrackghana.com/images/photos2/fishing-boats-2.jpg"
                    alt="Water Sports in Prampram Ghana"
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
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src="https://www.myjoyonline.com/wp-content/uploads/2023/07/Prampram-Traditional-Council-637x424.jpeg"
                    alt="Cultural Tours in Prampram Ghana"
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
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Visitors Say</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Hear from travelers who have experienced Prampram</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">United Kingdom</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The beaches in Prampram are absolutely stunning! I loved the peaceful atmosphere and friendly locals. Will definitely return!"</p>
              <div className="flex text-yellow-400 mt-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/45.jpg" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Osei</h4>
                  <p className="text-gray-600 text-sm">Ghana</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"As a Ghanaian, I'm proud of how Prampram has developed while maintaining its cultural heritage. The Homowo festival here is a must-experience!"</p>
              <div className="flex text-yellow-400 mt-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Lisa Chen</h4>
                  <p className="text-gray-600 text-sm">United States</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The fishing village tour was the highlight of my trip! Getting to see how the local fishermen work and learning about their traditions was fascinating."</p>
              <div className="flex text-yellow-400 mt-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}