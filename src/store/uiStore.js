import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUIStore = create(
  persist(
    (set, get) => ({
      // Theme state
      isDarkMode: true,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      
      // Custom cursor state
      isCustomCursorEnabled: true,
      toggleCustomCursor: () => set((state) => ({ 
        isCustomCursorEnabled: !state.isCustomCursorEnabled 
      })),
      
      // Cursor position and state
      cursorPosition: { x: 0, y: 0 },
      cursorState: 'default', // 'default', 'hover', 'click'
      setCursorPosition: (position) => set({ cursorPosition: position }),
      setCursorState: (state) => set({ cursorState: state }),
      
      // Modal state
      isModalOpen: false,
      modalContent: null,
      openModal: (content) => set({ isModalOpen: true, modalContent: content }),
      closeModal: () => set({ isModalOpen: false, modalContent: null }),
      
      // Toast notifications
      toasts: [],
      addToast: (toast) => {
        const id = Date.now().toString();
        const newToast = { id, ...toast };
        set((state) => ({ toasts: [...state.toasts, newToast] }));
        
        // Auto remove toast after duration
        setTimeout(() => {
          set((state) => ({ 
            toasts: state.toasts.filter(t => t.id !== id) 
          }));
        }, toast.duration || 5000);
      },
      removeToast: (id) => set((state) => ({ 
        toasts: state.toasts.filter(t => t.id !== id) 
      })),
      
      // Gallery state
      selectedGalleryFilter: 'all',
      setGalleryFilter: (filter) => set({ selectedGalleryFilter: filter }),
      
      // Mobile menu state
      isMobileMenuOpen: false,
      toggleMobileMenu: () => set((state) => ({ 
        isMobileMenuOpen: !state.isMobileMenuOpen 
      })),
      closeMobileMenu: () => set({ isMobileMenuOpen: false }),
    }),
    {
      name: 'apex-sports-ui',
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        isCustomCursorEnabled: state.isCustomCursorEnabled,
      }),
    }
  )
);
