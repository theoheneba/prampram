import React from 'react';
import { Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/things-to-do">Things to Do</NavLink>
                <NavLink to="/real-estate">Real Estate</NavLink>
                <NavLink to="/restaurants">Restaurants</NavLink>
                <NavLink to="/news">News</NavLink>
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
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden bg-white border-t"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 pt-2 pb-3 space-y-2">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink to="/events" onClick={() => setIsMenuOpen(false)}>Events</MobileNavLink>
                  <MobileNavLink to="/things-to-do" onClick={() => setIsMenuOpen(false)}>Things to Do</MobileNavLink>
                  <MobileNavLink to="/real-estate" onClick={() => setIsMenuOpen(false)}>Real Estate</MobileNavLink>
                  <MobileNavLink to="/restaurants" onClick={() => setIsMenuOpen(false)}>Restaurants</MobileNavLink>
                  <MobileNavLink to="/news" onClick={() => setIsMenuOpen(false)}>News</MobileNavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
        <footer className="bg-gradient-to-br from-emerald-900 to-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Logo />
                <p className="text-emerald-100 mt-4">Your gateway to Ghana's coastal paradise</p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
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

// Desktop Navigation Link with hover effect
const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
  </Link>
);

// Mobile Navigation Link
const MobileNavLink = ({ to, children, onClick }: { to: string, children: React.ReactNode, onClick: () => void }) => (
  <Link 
    to={to} 
    className="block px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default App;