import React from 'react';
import { Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './pages/Home';
import Events from './pages/Events';
import ThingsToDo from './pages/ThingsToDo';
import RealEstate from './pages/RealEstate';
import Restaurants from './pages/Restaurants';
import News from './pages/News';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
                <Link to="/events" className="text-gray-700 hover:text-emerald-600 transition-colors">Events</Link>
                <Link to="/things-to-do" className="text-gray-700 hover:text-emerald-600 transition-colors">Things to Do</Link>
                <Link to="/real-estate" className="text-gray-700 hover:text-emerald-600 transition-colors">Real Estate</Link>
                <Link to="/restaurants" className="text-gray-700 hover:text-emerald-600 transition-colors">Restaurants</Link>
                <Link to="/news" className="text-gray-700 hover:text-emerald-600 transition-colors">News</Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 pt-2 pb-3 space-y-2">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">Home</Link>
                <Link to="/events" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">Events</Link>
                <Link to="/things-to-do" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">Things to Do</Link>
                <Link to="/real-estate" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">Real Estate</Link>
                <Link to="/restaurants" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">Restaurants</Link>
                <Link to="/news" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">News</Link>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/news" element={<News />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Logo />
                <p className="text-emerald-100 mt-4">Your gateway to Ghana's coastal paradise</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/events" className="text-emerald-100 hover:text-white transition-colors">Events</Link></li>
                  <li><Link to="/things-to-do" className="text-emerald-100 hover:text-white transition-colors">Things to Do</Link></li>
                  <li><Link to="/real-estate" className="text-emerald-100 hover:text-white transition-colors">Real Estate</Link></li>
                  <li><Link to="/restaurants" className="text-emerald-100 hover:text-white transition-colors">Restaurants</Link></li>
                  <li><Link to="/news" className="text-emerald-100 hover:text-white transition-colors">News</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Plan Your Visit</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Resorts</a></li>
                  <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Transportation</a></li>
                  <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Tours</a></li>
                  <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Travel Tips</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-yellow-400">Contact Us</h4>
                <p className="text-emerald-100 mb-2">Email: info@prampram.com</p>
                <p className="text-emerald-100 mb-2">Phone: +233 20 123 4567</p>
                <p className="text-emerald-100">Tourism Office, Main Street, Prampram, Ghana</p>
              </div>
            </div>
            <div className="border-t border-emerald-700/50 mt-8 pt-8 text-center text-emerald-100">
              <p>&copy; {new Date().getFullYear()} Prampram.com. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App