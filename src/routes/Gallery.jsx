import { motion } from 'framer-motion';
import Section from '../components/Section';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Explore our world-class facilities, exciting events, and the vibrant 
            community that makes Apex Sports Club special.
          </p>
        </motion.div>
      </Section>

      {/* Gallery Grid */}
      <Section>
        <GalleryGrid />
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-b from-dark-900/30 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass-strong rounded-2xl p-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">
            Capturing Moments of Excellence
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Every photo tells a story of dedication, achievement, and the joy of sports. 
            From training sessions to championship victories, we celebrate every moment 
            of our athletes' journeys.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '500+', label: 'Photos Captured' },
              { number: '50+', label: 'Events Documented' },
              { number: '15+', label: 'Sports Covered' },
              { number: '5+', label: 'Years of Memories' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                className="text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Gallery;
