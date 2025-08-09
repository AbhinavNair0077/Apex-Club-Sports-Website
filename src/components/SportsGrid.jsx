import { motion } from 'framer-motion';
import { sportsData } from '../data/sports';
import SportCard from './SportCard';
import Section from './Section';

const SportsGrid = () => {
  return (
    <Section id="sports" className="bg-gradient-to-b from-transparent to-dark-900/30">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
        >
          Our Sports Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Discover your passion and unleash your potential with our comprehensive 
          sports programs designed for athletes of all levels and ages.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {sportsData.map((sport, index) => (
          <SportCard key={sport.id} sport={sport} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 mb-6">
          Ready to start your journey? Join our community of passionate athletes today.
        </p>
        <a 
          href="#contact" 
          className="btn-primary inline-block cursor-hover"
        >
          Get Started Today
        </a>
      </motion.div>
    </Section>
  );
};

export default SportsGrid;
