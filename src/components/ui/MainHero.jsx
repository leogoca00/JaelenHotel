import React, { useState } from 'react';
import { Calendar, Sun, Moon, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MainHero = ({ isDark, toggleDark, setLanguage }) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Places', href: '/places' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Additional Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' }
  ];

return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe 
          src="https://player.vimeo.com/video/1051217094?h=1fd2b6935f&badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            objectFit: 'cover'
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="hero"
        />
      </div>

      {/* Overlay with gradient (mantén esto después del video) */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-brown-dark/50 via-luxury-brown-dark/30 to-luxury-brown-dark/50" />

      {/* Navigation Menu */}
      <nav className="absolute top-8 left-0 w-full z-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between space-x-8">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold text-luxury-cream-light hover:text-luxury-gold-light transition-colors"
            >
              Jaelen Hotel
            </Link>

            {/* Menu Items */}
            <div className="flex-1 flex justify-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`
                    relative px-4 py-2 text-lg font-light
                    text-luxury-cream-light hover:text-luxury-gold-light
                    transition-colors duration-300
                    ${location.pathname === item.href ? 'text-luxury-gold-light' : ''}
                  `}
                >
                  {item.name}
                  <span className={`
                    absolute bottom-0 left-0 w-full h-0.5
                    transform scale-x-0 hover:scale-x-100
                    transition-transform duration-300
                    bg-luxury-gold-light
                  `} />
                </button>
              ))}
            </div>

            {/* Controls Group */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="
                    p-2 rounded-full
                    bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20
                    text-luxury-cream-light hover:text-luxury-gold-light
                    transition-colors duration-300
                  "
                >
                  <Globe className="w-6 h-6" />
                </button>
                
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg 
                    bg-white dark:bg-luxury-brown 
                    ring-1 ring-luxury-gold/10 dark:ring-luxury-gold-dark/10">
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm
                            text-luxury-brown dark:text-luxury-cream
                            hover:bg-luxury-cream dark:hover:bg-luxury-brown-light
                            transition-colors"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleDark}
                className={`
                  p-2 rounded-full
                  ${isDark 
                    ? 'bg-luxury-cream/10 hover:bg-luxury-cream/20' 
                    : 'bg-luxury-gold/10 hover:bg-luxury-gold/20'
                  }
                  ${isDark
                    ? 'text-luxury-cream hover:text-luxury-gold'
                    : 'text-luxury-brown hover:text-luxury-gold'
                  }
                  transition-all duration-300
                `}
              >
                {isDark ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Booking Button */}
      <div className="absolute top-24 right-8 z-20">
        <div className="group relative">
          <button className="
            bg-luxury-cream-light/10 hover:bg-luxury-cream-light/20
            backdrop-blur-sm
            text-luxury-cream-light hover:text-luxury-gold-light
            p-6 rounded-full shadow-lg
            transition-all duration-300
            group-hover:scale-105
          ">
            <Calendar className="w-8 h-8" />
          </button>
          <div className="absolute right-0 mt-4 w-80 opacity-0 scale-95 transform 
            transition-all duration-300 invisible 
            group-hover:visible group-hover:opacity-100 group-hover:scale-100">
            <div className="bg-white dark:bg-luxury-brown rounded-lg shadow-xl p-6">
              <h3 className="text-xl text-luxury-brown dark:text-luxury-cream-light font-medium mb-4">
                Make a Reservation
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 rounded-lg
                      border border-luxury-cream-dark dark:border-luxury-brown
                      bg-luxury-cream dark:bg-luxury-brown
                      text-luxury-brown dark:text-luxury-cream
                      focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-brown dark:text-luxury-cream-light mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 rounded-lg
                      border border-luxury-cream-dark dark:border-luxury-brown
                      bg-luxury-cream dark:bg-luxury-brown
                      text-luxury-brown dark:text-luxury-cream
                      focus:ring-2 focus:ring-luxury-gold-light focus:border-transparent"
                  />
                </div>
                <button className="w-full py-3 px-4 rounded-lg
                  bg-luxury-gold hover:bg-luxury-gold-dark
                  text-white text-lg font-light
                  transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
