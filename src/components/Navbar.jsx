import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiMousePointer } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import { useCursor } from '../hooks/useCursor';
import { useUIStore } from '../store/uiStore';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const { isDarkMode, toggleTheme } = useTheme();
  const { isCustomCursorEnabled, toggleCustomCursor } = useCursor();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? 'glass-strong shadow-glass-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 cursor-hover"
            >
              <span className="text-2xl lg:text-3xl font-bold gradient-text">
                Apex Sports Club
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium transition-colors duration-300 cursor-hover ${
                    location.pathname === link.path
                      ? 'text-primary-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200 cursor-hover"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>

              {/* Cursor Toggle */}
              <button
                onClick={toggleCustomCursor}
                className={`p-2 transition-colors duration-200 cursor-hover ${
                  isCustomCursorEnabled ? 'text-primary-400' : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Toggle custom cursor"
              >
                <FiMousePointer className="w-5 h-5" />
              </button>

              <Link to="/register">
                <Button variant="primary" size="sm" className="cursor-hover">
                  Join Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 z-50 glass-strong backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-glass-border">
                <span className="text-xl font-bold gradient-text">Menu</span>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block text-lg font-medium transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'text-primary-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="mt-8 pt-8 border-t border-glass-border">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400">Theme</span>
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <span className="text-gray-400">Custom Cursor</span>
                    <button
                      onClick={toggleCustomCursor}
                      className={`p-2 transition-colors duration-200 ${
                        isCustomCursorEnabled ? 'text-primary-400' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <FiMousePointer className="w-5 h-5" />
                    </button>
                  </div>

                  <Link to="/register" onClick={closeMobileMenu}>
                    <Button variant="primary" className="w-full">
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
