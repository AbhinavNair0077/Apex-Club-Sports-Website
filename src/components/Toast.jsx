import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '../store/uiStore';
import { FiX, FiCheck, FiAlertCircle, FiInfo } from 'react-icons/fi';

const Toast = ({ toast }) => {
  const { removeToast } = useUIStore();

  const icons = {
    success: FiCheck,
    error: FiAlertCircle,
    warning: FiAlertCircle,
    info: FiInfo,
  };

  const colors = {
    success: 'from-green-500 to-emerald-500',
    error: 'from-red-500 to-pink-500',
    warning: 'from-yellow-500 to-orange-500',
    info: 'from-blue-500 to-indigo-500',
  };

  const IconComponent = icons[toast.type] || FiInfo;

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, removeToast]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      className="glass-strong rounded-lg p-4 shadow-glass-lg max-w-sm w-full"
    >
      <div className="flex items-start space-x-3">
        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${colors[toast.type]} flex items-center justify-center`}>
          <IconComponent className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          {toast.title && (
            <p className="text-sm font-medium text-white">
              {toast.title}
            </p>
          )}
          <p className="text-sm text-gray-300">
            {toast.message}
          </p>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const ToastContainer = () => {
  const { toasts } = useUIStore();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
