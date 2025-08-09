import { motion } from 'framer-motion';
import { useUIStore } from '../store/uiStore';

const SportCard = ({ sport, index }) => {
  const { openModal } = useUIStore();

  const handleLearnMore = () => {
    openModal(
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-6xl mb-4">{sport.icon}</div>
          <h2 className="text-3xl font-bold gradient-text mb-2">{sport.name}</h2>
          <p className="text-gray-400">{sport.description}</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">About This Sport</h3>
            <p className="text-gray-300 leading-relaxed">{sport.fullDescription}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Coaches</h4>
              <ul className="text-gray-300 space-y-1">
                {sport.coaches.map((coach, idx) => (
                  <li key={idx}>• {coach}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Schedule</h4>
              <p className="text-gray-300">{sport.schedule}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-2">Age Groups</h4>
            <p className="text-gray-300">{sport.ageGroups}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 cursor-hover"
    >
      <div className="text-center">
        {/* Sport Icon/Image */}
        <div className="mb-4 relative overflow-hidden rounded-xl">
          <img 
            src={sport.image} 
            alt={sport.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 right-4 text-4xl">{sport.icon}</div>
        </div>

        {/* Sport Info */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
          {sport.name}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">
          {sport.description}
        </p>

        {/* Category Badge */}
        <div className="flex justify-center mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            sport.category === 'indoor' 
              ? 'bg-blue-500/20 text-blue-400' 
              : 'bg-green-500/20 text-green-400'
          }`}>
            {sport.category}
          </span>
        </div>

        {/* Learn More Button */}
        <button
          onClick={handleLearnMore}
          className="w-full btn-secondary text-sm cursor-hover"
        >
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default SportCard;
