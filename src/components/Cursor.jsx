import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

const Cursor = () => {
  const { isCustomCursorEnabled, cursorPosition, cursorState } = useCursor();

  if (!isCustomCursorEnabled) return null;

  return (
    <motion.div
      className={`cursor-dot ${cursorState}`}
      animate={{
        x: cursorPosition.x - 4,
        y: cursorPosition.y - 4,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
};

export default Cursor;
