# Cyd Villavicencio Portfolio

A modern, blazing-fast developer portfolio built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Chakra UI](https://chakra-ui.com/).

---

## 🚀 Features

- ⚡️ Super-fast Vite build and dev experience
- 🎨 Beautiful, accessible UI with Chakra UI
- 💡 Animations with Framer Motion
- 📱 Fully responsive and mobile-friendly
- 🗂 Organized, scalable code structure
- 🖼 Easy asset management (just drop images in `public/assets`)
- 🌐 Ready for deployment on Netlify, Vercel, or any static host

---

## 🛠 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone your repo
git clone https://github.com/CydVilla/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your site.

---

## 🏗 Project Structure

```
public/
  assets/           # Static images and files (use /assets/your-image.jpg in code)
src/
  components/       # Reusable React components
  data/             # Project and other data
  layouts/          # Layout components (navbar, footer, etc.)
  pages/            # Main pages (Home, About, Projects, Contact)
  styles/           # Chakra UI theme and custom styles
  main.tsx          # App entry point
  App.tsx           # App root component
```

---

## 🖼 Adding Images

- Place images in `public/assets/`.
- Reference them as `/assets/your-image.jpg` in your code or data files.

---

## 🛫 Deployment

### Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `18` (set in `.nvmrc`)

### Vercel

- Just import your repo and use the default settings.

---

## ✏️ Customization

- **Projects:** Edit `src/data/projects.ts`.
- **Skills/About:** Edit `src/pages/About.tsx`.
- **Contact:** Edit `src/pages/Contact.tsx` (uses a form, can be connected to Formspree, EmailJS, etc.).
- **Theme:** Edit `src/styles/theme.ts` for colors, fonts, etc.

---

## 📄 License

MIT

---

Want more features or help deploying? Open an issue or PR!
