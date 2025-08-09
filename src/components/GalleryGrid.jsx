import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { galleryData, getGalleryByCategory } from '../data/gallery';
import { useUIStore } from '../store/uiStore';

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { selectedGalleryFilter, setGalleryFilter } = useUIStore();

  const filteredImages = getGalleryByCategory(selectedGalleryFilter);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'indoor', name: 'Indoor' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'events', name: 'Events' },
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setImageIndex(0);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (imageIndex + 1) % filteredImages.length
      : (imageIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setGalleryFilter(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-hover ${
              selectedGalleryFilter === category.id
                ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white shadow-glow'
                : 'glass text-gray-300 hover:text-white hover:bg-glass-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl glass hover:shadow-glow cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                  <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                    image.category === 'indoor' 
                      ? 'bg-blue-500/20 text-blue-400'
                      : image.category === 'outdoor'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeLightbox}
            />
            
            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] mx-auto"
            >
              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 glass-strong p-4 rounded-b-lg">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 glass-strong rounded-full text-white hover:bg-glass-300 transition-colors duration-200"
              >
                <FiX className="w-6 h-6" />
              </button>
              
              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 glass-strong rounded-full text-white hover:bg-glass-300 transition-colors duration-200"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 glass-strong rounded-full text-white hover:bg-glass-300 transition-colors duration-200"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute top-4 left-4 glass-strong px-3 py-1 rounded-full">
                <span className="text-white text-sm">
                  {imageIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
