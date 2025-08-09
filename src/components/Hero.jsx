import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import Button from './Button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSports = () => {
    document.getElementById('sports')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.3,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50, damping: 30 },
            y: { type: 'spring', stiffness: 50, damping: 30 },
            scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.4,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50, damping: 30 },
            y: { type: 'spring', stiffness: 50, damping: 30 },
            scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * 0.2,
            y: mousePosition.y * 0.2,
            rotate: [0, 360],
          }}
          transition={{
            x: { type: 'spring', stiffness: 30, damping: 20 },
            y: { type: 'spring', stiffness: 30, damping: 20 },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center glass px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300">Premium Sports Facilities</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text animate-gradient">
              Elevate Your Game
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-shadow"
          >
            Join the premier sports club where champions are made. 
            Experience world-class facilities, expert coaching, and a 
            community that shares your passion for excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/register">
              <Button 
                variant="primary" 
                size="lg" 
                className="group cursor-hover px-8 py-4 text-lg"
              >
                Join Now
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={scrollToSports}
              className="group cursor-hover px-8 py-4 text-lg"
            >
              <FiPlay className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Explore Sports
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { number: '2500+', label: 'Active Members' },
              { number: '50+', label: 'Expert Coaches' },
              { number: '15+', label: 'Sports Programs' },
              { number: '98%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.1 + index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
