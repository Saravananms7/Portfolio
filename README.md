# Saravanan's Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Optimized**: Meta tags and semantic HTML structure

## 📱 Sections

1. **Hero Section**: Introduction with name, title, and call-to-action
2. **About Me**: Personal introduction with profile picture placeholder
3. **Projects**: Showcase of 4 featured projects with tech stacks
4. **Skills**: Technical skills with progress bars and tech logos
5. **Contact**: Contact form and social media links
6. **Navigation**: Sticky navbar with smooth scrolling

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel/GitHub Pages ready

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saravanan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Projects.jsx        # Projects showcase
│   ├── Skills.jsx          # Skills section
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer component
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name, title, and tagline
   - Update resume download link

2. **About Section** (`src/components/About.jsx`):
   - Update personal description
   - Replace profile picture placeholder

3. **Projects** (`src/components/Projects.jsx`):
   - Update project information
   - Add your actual project links

4. **Contact** (`src/components/Contact.jsx`):
   - Update contact information
   - Add your social media links

5. **Footer** (`src/components/Footer.jsx`):
   - Update social media links
   - Modify footer content

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind config
- **Animations**: Customize animations in individual components

### Images

Replace placeholder images with your actual images:
- Profile picture in About section
- Project screenshots in Projects section
- Add your resume PDF to the public folder

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Saravananms7/My-Portfolio)

1. **One-Click Deploy**: Click the button above
2. **Manual Deploy**: 
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Deploy with default settings

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Build and deploy:
```bash
npm run build
npm run deploy
```

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Saravanan - [@your_twitter](https://twitter.com/your_twitter) - saravanan@example.com

Project Link: [https://github.com/saravanan/portfolio](https://github.com/saravanan/portfolio)

---

⭐ Don't forget to give this project a star if you found it helpful!
