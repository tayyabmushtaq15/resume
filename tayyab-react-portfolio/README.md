# Tayyab Mushtaq - Portfolio Website

A modern, responsive portfolio website showcasing my work, experience, and skills as a Full Stack Engineer and Technical Lead. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful animated background, dark/light theme toggle, and smooth user interactions.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with glassmorphism effects and smooth animations
- **Animated Background**: Three.js-powered aurora background effect
- **Theme Toggle**: Switch between light and dark themes with persistent preference
- **Responsive Design**: Fully responsive layout that works on all devices
- **Project Showcase**: Interactive project cards with image modal/lightbox
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
│   ├── components/
│   │   ├── ui/
│   │   │   ├── PortfolioPageCustom.tsx    # Main portfolio component with custom data
│   │   │   ├── starfall-portfolio-landing.tsx  # Reusable portfolio component
│   │   │   └── ThemeProvider.tsx          # Theme context provider
│   │   └── ...                            # Other components
│   ├── App.jsx                            # Main app component with routing
│   ├── index.css                          # Global styles and theme variables
│   └── main.jsx                           # Entry point
├── package.json
├── tailwind.config.js                     # Tailwind CSS configuration
├── tsconfig.json                          # TypeScript configuration
└── vite.config.js                         # Vite configuration
```

## 🎨 Customization

### Updating Personal Information

Edit `src/components/ui/PortfolioPageCustom.tsx` to update:
- Personal details (name, title, bio)
- Work experience
- Projects
- Skills
- Contact email
- Resume PDF path

### Theme Customization

Themes are defined in `src/index.css`:
- **Dark Theme** (default): Defined in `:root` and `[data-theme="dark"]`
- **Light Theme**: Defined in `[data-theme="light"]`

To customize colors, modify the CSS variables:
```css
--background: 220 20% 8%;        /* Background color */
--foreground: 210 40% 98%;       /* Text color */
--primary: 217 91% 60%;           /* Primary accent color */
--card: 220 25% 12%;             /* Card background */
--border: 220 25% 20%;           /* Border color */
```

### Adding Projects

Add new projects in `PortfolioPageCustom.tsx`:
```typescript
{
  title: 'Project Name',
  description: 'Project description',
  tags: ['React', 'TypeScript', 'Node.js'],
  imageContent: (
    <img 
      src="/projects/project-thumbnail.jpg" 
      alt="Project Name"
      className="w-full h-full object-cover rounded-xl"
    />
  ),
}
```

### Adding Skills

Update the skills array in `PortfolioPageCustom.tsx`:
```typescript
const skills = [
  { 
    name: 'Skill Name', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/skill/skill-original.svg' 
  },
  // ... more skills
];
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Features in Detail

### Theme Toggle
- Click the sun/moon icon in the navigation bar
- Theme preference is saved in localStorage
- Smooth transitions between themes

### Project Image Modal
- Click on any project thumbnail to view full-size image
- Press `Escape` or click outside to close
- Smooth fade-in animation

### Skills Carousel
- Auto-scrolling carousel with technology logos
- Infinite loop animation
- Hover effects on skill items

### Smooth Scrolling
- Navigation links smoothly scroll to sections
- "View My Work" button scrolls to projects section

## 📧 Contact

- **Email**: [tayyabmushtaq15@gmail.com](mailto:tayyabmushtaq15@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/tayyab-mushtaq-13925a142/]
- **GitHub**: [https://github.com/tayyabmushtaq15]

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Three.js for the animated background
- Tailwind CSS for utility-first styling
- React community for excellent documentation and tools

---

**Built by Tayyab Mushtaq**

