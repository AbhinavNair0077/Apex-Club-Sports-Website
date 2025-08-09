import { useEffect } from 'react';
import { useUIStore } from '../store/uiStore';

export const useCursor = () => {
  const {
    isCustomCursorEnabled,
    cursorPosition,
    cursorState,
    setCursorPosition,
    setCursorState,
    toggleCustomCursor
  } = useUIStore();

  useEffect(() => {
    if (!isCustomCursorEnabled) {
      document.body.classList.add('no-custom-cursor');
      return;
    } else {
      document.body.classList.remove('no-custom-cursor');
    }

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setCursorState('click');
    };

    const handleMouseUp = () => {
      setCursorState('default');
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      const isInteractive = target.matches('button, a, [data-cursor="hover"], .cursor-hover, input, textarea, select');
      
      if (isInteractive) {
        setCursorState('hover');
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      const isInteractive = target.matches('button, a, [data-cursor="hover"], .cursor-hover, input, textarea, select');
      
      if (isInteractive) {
        setCursorState('default');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="hover"], .cursor-hover, input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isCustomCursorEnabled, setCursorPosition, setCursorState]);

  return {
    isCustomCursorEnabled,
    cursorPosition,
    cursorState,
    toggleCustomCursor
  };
};
