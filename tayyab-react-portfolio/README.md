# Tayyab Mushtaq - Portfolio Website

A modern, responsive portfolio website showcasing my work, experience, and skills as a Full Stack Engineer. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful animated background, dark/light theme toggle, and smooth user interactions.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with glassmorphism effects and smooth animations
- **Animated Background**: Three.js-powered aurora background effect
- **Theme Toggle**: Switch between light and dark themes with persistent preference
- **Responsive Design**: Fully responsive layout that works on all devices
- **Project Showcase**: Interactive project cards with image modal/lightbox and multi-image slider
- **Work Experience**: Detailed work history with achievements
- **Skills Carousel**: Auto-scrolling skills carousel with technology logos
- **Smooth Scrolling**: Smooth navigation between sections
- **Resume Download**: Direct access to downloadable resume PDF
- **Contact Integration**: Quick email contact via mailto link

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.7.0
- **3D Graphics**: Three.js 0.182.0
- **Build Tool**: Vite 7.0.4
- **Code Quality**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tayyabmushtaq15/tayyab-mushtaq-portfolio.git
   cd tayyab-mushtaq-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
tayyab-react-portfolio/
├── public/
│   └── projects/          # Project images and resume PDF
│       ├── velive-thumbnail.jpg
│       ├── leos-dashboard-thumbnail.jpg
│       ├── grow-thumbnail.jpg
│       └── Tayyab-Mushtaq-Resume.pdf
├── src/
│   ├── app/
│   │   └── App.tsx       # Main app component with routing
│   ├── pages/
│   │   ├── PortfolioPage.tsx    # Main portfolio page
│   │   └── ResumePage.tsx        # Resume page
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── PortfolioLayout.tsx      # Main portfolio layout
│   │   │   ├── PortfolioNavigation.tsx # Navigation bar
│   │   │   ├── sections/
│   │   │   │   ├── AboutSection.tsx     # About/Hero section
│   │   │   │   ├── ProjectsSection.tsx  # Projects showcase
│   │   │   │   ├── ExperienceSection.tsx # Work experience
│   │   │   │   ├── SkillsSection.tsx    # Technical skills
│   │   │   │   └── StatsSection.tsx     # Statistics
│   │   │   ├── AuroraBackground.tsx     # Three.js background
│   │   │   ├── ImageModal.tsx           # Image modal/lightbox
│   │   │   └── ImageSlider.tsx          # Image slider component
│   │   ├── resume/                      # Resume page components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── ...
│   │   └── shared/
│   │       └── ThemeProvider.tsx        # Theme context provider
│   ├── hooks/
│   │   └── useTheme.ts                  # Theme hook
│   ├── types/
│   │   ├── portfolio.types.ts           # TypeScript type definitions
│   │   └── index.ts                     # Type re-exports
│   ├── config/
│   │   └── portfolio.config.tsx         # Portfolio data configuration
│   ├── utils/
│   │   └── imageUtils.ts                # Image utility functions
│   ├── styles/
│   │   └── index.css                    # Global styles and theme variables
│   └── main.tsx                         # Entry point
├── package.json
├── tailwind.config.js                   # Tailwind CSS configuration
├── tsconfig.json                        # TypeScript configuration
└── vite.config.js                       # Vite configuration
```

## 🎨 Customization

### Updating Personal Information

Edit `src/config/portfolio.config.tsx` to update:
- Personal details (name, title, bio)
- Work experience
- Projects
- Skills
- Contact email
- Resume PDF path

### Theme Customization

Themes are defined in `src/styles/index.css`:
- **Dark Theme** (default): Defined in `:root` and `[data-theme="dark"]`
- **Light Theme**: Defined in `[data-theme="light"]`

To customize colors, modify the CSS variables:
```css
--background: 220 20% 8%;        
--foreground: 210 40% 98%;       
--primary: 217 91% 60%;          
--card: 220 25% 12%;            
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

The project uses a well-organized structure with:
- **Components**: Separated into portfolio, resume, and shared components
- **Sections**: Each portfolio section is a self-contained component
- **Types**: Centralized TypeScript type definitions
- **Config**: All portfolio data in a single configuration file
- **Utils**: Reusable utility functions
- **Hooks**: Custom React hooks for shared logic

## 📄 License

This project is private and proprietary.

## 👤 Author

**Tayyab Mushtaq**
- Email: tayyabmushtaq15@gmail.com
- LinkedIn: [tayyabmushtaq15](https://www.linkedin.com/in/tayyabmushtaq15)
- GitHub: [tayyabmushtaq15](https://github.com/tayyabmushtaq15)

---

Built with using React, TypeScript, and Tailwind CSS
