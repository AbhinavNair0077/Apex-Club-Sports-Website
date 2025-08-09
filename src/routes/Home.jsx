import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiArrowRight } from 'react-icons/fi';
import Hero from '../components/Hero';
import SportsGrid from '../components/SportsGrid';
import Section from '../components/Section';
import { testimonialsData } from '../data/testimonials';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counts, setCounts] = useState({
    members: 0,
    coaches: 0,
    events: 0,
    facilities: 0,
  });

  const finalCounts = {
    members: 2500,
    coaches: 50,
    events: 200,
    facilities: 15,
  };

  // Counter animation
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounts(prevCounts => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(finalCounts).forEach(key => {
          const increment = finalCounts[key] / steps;
          const newValue = Math.min(prevCounts[key] + increment, finalCounts[key]);
          newCounts[key] = Math.floor(newValue);
          if (newValue < finalCounts[key]) allComplete = false;
        });

        if (allComplete) {
          clearInterval(timer);
          return finalCounts;
        }

        return newCounts;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % testimonialsData.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Section className="bg-gradient-to-b from-transparent to-dark-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { key: 'members', label: 'Active Members', suffix: '+' },
            { key: 'coaches', label: 'Expert Coaches', suffix: '+' },
            { key: 'events', label: 'Events Hosted', suffix: '+' },
            { key: 'facilities', label: 'Sports Facilities', suffix: '' },
          ].map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {counts[stat.key]}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Sports Grid */}
      <SportsGrid />

      {/* Testimonials Section */}
      <Section className="bg-gradient-to-b from-dark-900/30 to-transparent">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            What Our Members Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Hear from our community of athletes who have transformed their lives through sports
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-2xl p-8 lg:p-12 text-center"
          >
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              "{testimonialsData[currentTestimonial].text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonialsData[currentTestimonial].image}
                alt={testimonialsData[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-white text-lg">
                  {testimonialsData[currentTestimonial].name}
                </div>
                <div className="text-primary-400">
                  {testimonialsData[currentTestimonial].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-900/20 to-blue-900/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass-strong rounded-2xl p-12 lg:p-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of athletes who have discovered their potential at Apex Sports Club. 
            Your transformation starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/register" 
              className="btn-primary inline-flex items-center px-8 py-4 text-lg cursor-hover group"
            >
              Start Your Journey
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="/contact" 
              className="btn-secondary inline-flex items-center px-8 py-4 text-lg cursor-hover"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Home;
