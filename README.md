# Apex Sports Club Website

A modern, production-ready React single-page application for a sports club featuring glassmorphism design, interactive cursor effects, and smooth animations.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with blur effects and gradient accents
- **Interactive Cursor**: Custom cursor with magnetic effects and hover states
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Form Validation**: React Hook Form with Zod schema validation
- **State Management**: Zustand for efficient global state management
- **Dark/Light Themes**: Toggle between themes with localStorage persistence
- **Gallery System**: Interactive photo gallery with lightbox and filters
- **Toast Notifications**: Beautiful toast system for user feedback
- **SEO Optimized**: Semantic HTML and accessibility best practices

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **State**: Zustand
- **Icons**: React Icons (Feather)
- **Build**: Vite for fast development and optimized builds

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Input.jsx       # Form input with validation
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── Footer.jsx      # Footer with links and social
│   ├── Hero.jsx        # Hero section with animations
│   ├── Cursor.jsx      # Custom cursor component
│   └── ...
├── routes/             # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page with team
│   ├── Gallery.jsx     # Photo gallery
│   ├── Contact.jsx     # Contact form and info
│   └── Register.jsx    # Registration form
├── hooks/              # Custom React hooks
│   ├── useCursor.js    # Cursor state management
│   └── useTheme.js     # Theme switching logic
├── store/              # Zustand stores
│   └── uiStore.js      # Global UI state
├── data/               # Static data
│   ├── sports.js       # Sports programs data
│   ├── testimonials.js # Customer testimonials
│   └── gallery.js      # Gallery images data
├── utils/              # Utility functions
│   ├── validation.js   # Zod schemas
│   ├── email.js        # Email service stub
│   └── theme.js        # Theme configuration
└── styles/
    └── globals.css     # Global styles and Tailwind
```

## 🎨 Design System

### Colors
- **Background**: Deep navy (#0B1220)
- **Gradients**: Teal/cyan to indigo/purple
- **Glass**: Semi-transparent whites with blur
- **Text**: High contrast whites and grays

### Typography
- **Body**: Inter font family
- **Headings**: Poppins font family
- **Scale**: Responsive typography with Tailwind

### Components
- **Glass Effects**: Backdrop blur with subtle borders
- **Hover States**: Scale and glow animations
- **Gradients**: Animated gradient text and borders
- **Shadows**: Soft glows and depth

## 🚦 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser

### Installation

1. **Clone or download the project**
   ```bash
   # If cloning from a repository
   git clone <repository-url>
   cd sports-club-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📱 Pages & Features

### Home Page
- Hero section with animated background
- Stats counter with animation
- Sports programs grid
- Testimonials carousel
- Call-to-action sections

### About Page
- Mission and vision statements
- Core values with icons
- Team member cards
- Interactive timeline

### Gallery Page
- Filterable photo grid
- Lightbox with keyboard navigation
- Category filters (All, Indoor, Outdoor, Events)
- Smooth transitions

### Contact Page
- Contact form with validation
- Contact information cards
- Map placeholder
- FAQ section

### Register Page
- Multi-step registration form
- Membership plan options
- Form validation with error handling
- Success/error notifications

## 🎛️ Configuration

### Tailwind Config
Custom theme with:
- Extended color palette
- Custom animations and keyframes
- Glassmorphism utilities
- Typography scale

### Environment Setup
The project uses placeholder APIs. For production:
1. Replace `/api/placeholder/` image URLs with real images
2. Implement actual email service in `src/utils/email.js`
3. Add real map integration in Contact page
4. Configure analytics and SEO meta tags

## 🔧 Customization

### Adding New Sports
Edit `src/data/sports.js`:
```javascript
{
  id: 9,
  name: "New Sport",
  slug: "new-sport",
  icon: "🏊",
  description: "Description here",
  // ... other fields
}
```

### Custom Cursor Settings
Modify cursor behavior in `src/hooks/useCursor.js` and styles in `src/styles/globals.css`.

### Theme Colors
Update colors in `tailwind.config.js` and `src/utils/theme.js`.

### Form Validation
Add new schemas in `src/utils/validation.js` using Zod.

## 🎭 Interactive Features

### Custom Cursor
- Follows mouse movement with spring physics
- Scales on hover over interactive elements
- Magnetic effect on primary buttons
- Can be toggled on/off

### Animations
- Page transitions with AnimatePresence
- Scroll-triggered animations
- Hover effects with micro-interactions
- Loading states and feedback

### Responsive Design
- Mobile-first approach
- Collapsible navigation
- Touch-friendly interactions
- Optimized for all screen sizes

## 🧪 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is for educational/demonstration purposes. Please ensure you have proper licensing for any production use.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions or support:
- Check the documentation
- Open an issue on GitHub
- Contact the development team

---

Built with ❤️ for sports enthusiasts everywhere!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

hello