<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Apex Sports Club - Project Instructions

This is a production-ready React Sports Club website built with modern technologies and best practices.

## Tech Stack
- **Frontend Framework**: React 18 with Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom glassmorphism theme
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **State Management**: Zustand for global UI state
- **Forms**: React Hook Form with Zod validation
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Vite for fast development and optimized builds

## Project Structure
- `src/routes/` - Page components (Home, About, Gallery, Contact, Register)
- `src/components/` - Reusable UI components
- `src/hooks/` - Custom React hooks (useCursor, useTheme)
- `src/store/` - Zustand stores for global state
- `src/data/` - Static data files (sports, testimonials, gallery)
- `src/utils/` - Utility functions (validation, email, theme)
- `src/styles/` - Global CSS with Tailwind imports and custom styles

## Design System
- **Colors**: Deep navy background (#0B1220) with teal/cyan to indigo/purple gradients
- **Typography**: Inter for body text, Poppins for headings
- **Components**: Glassmorphism design with blur effects and subtle shadows
- **Animations**: Smooth transitions with Framer Motion
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Key Features
- Interactive custom cursor with magnetic effects
- Glassmorphism UI with backdrop blur
- Form validation with Zod schemas
- Toast notifications system
- Modal components for sport details
- Gallery with lightbox functionality
- Responsive navigation with mobile menu
- Dark/light theme toggle
- Smooth scroll and page transitions

## Development Guidelines
- Use functional components with hooks
- Implement proper error boundaries
- Follow accessibility best practices
- Use semantic HTML elements
- Maintain consistent naming conventions
- Keep components small and focused
- Use TypeScript-like prop validation with Zod
- Optimize images and assets
- Test on multiple screen sizes

## Custom Hooks
- `useCursor`: Manages custom cursor state and interactions
- `useTheme`: Handles theme switching and persistence

## State Management
- UI Store (Zustand): Theme, cursor, modal, toast, and navigation state
- Form state: Managed by React Hook Form with Zod validation

## Animation Patterns
- Page transitions with AnimatePresence
- Stagger animations for lists and grids
- Hover effects with scale and glow
- Smooth cursor following with spring physics
- Intersection observer triggers for scroll animations

## Performance Optimizations
- Lazy loading for images
- Code splitting by routes
- Optimized bundle size with Vite
- Minimal re-renders with proper dependency arrays
- Efficient state updates with Zustand
