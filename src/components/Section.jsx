import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '', 
  id,
  background = 'transparent',
  padding = 'section-padding'
}) => {
  return (
    <motion.section
      id={id}
      className={`${padding} ${className}`}
      style={{ background }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container-custom">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
