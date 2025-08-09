export const theme = {
  colors: {
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    dark: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#0B1220',
    }
  },
  gradients: {
    primary: 'linear-gradient(135deg, #14b8a6, #3b82f6)',
    secondary: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    accent: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    text: 'linear-gradient(135deg, #14b8a6, #3b82f6, #8b5cf6)',
  },
  animations: {
    durations: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easings: {
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }
};

export const getThemeColor = (colorPath) => {
  const paths = colorPath.split('.');
  return paths.reduce((obj, path) => obj[path], theme.colors);
};

export const getGradient = (gradientName) => {
  return theme.gradients[gradientName] || theme.gradients.primary;
};
