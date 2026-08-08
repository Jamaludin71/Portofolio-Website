# 🌃 Muhammad Hilmy Dzakya - Cyberpunk Portfolio

> Fullstack Developer | Data Engineer | Linux Administrator | Cybersecurity Enthusiast

![Theme](https://img.shields.io/badge/Theme-Cyberpunk%202077-00f0ff?style=for-the-badge)
![Tech](https://img.shields.io/badge/Built%20With-HTML%2FCSS%2FJS-bd00ff?style=for-the-badge)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge)

---

## ✨ Features

- 🎨 **Cyberpunk 2077 Aesthetic** — Neon blue & purple on dark background with glow effects
- 🖥️ **Terminal-style Hero** — Animated typing effect and system boot sequence
- 🌐 **Bilingual** — Toggle between English and Indonesian
- ✨ **Particle Background** — Interactive network particle animation
- 📊 **Skill Matrix** — Animated progress bars with 4 domain categories
- 🚀 **Project Showcase** — 6 projects with live demo & GitHub links
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** — Scroll reveal, glitch text, scanlines, and more
- 🔒 **CyberSec Lab Highlight** — Special styling for security projects

---

## 📁 File Structure

```
portfolio-cyberpunk/
├── index.html          # Main HTML file (single page)
├── css/
│   └── style.css       # All styles (cyberpunk theme)
├── js/
│   └── main.js         # All interactivity & animations
└── README.md           # This file
```

---

## 🚀 Deployment Guide

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to project folder**:
   ```bash
   cd portfolio-cyberpunk
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow prompts** — Vercel will guide you through login and deployment.

5. **Or use Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repo or drag & drop the folder
   - Click **Deploy**

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `portfolio-cyberpunk` folder
3. Your site will be live instantly!

### Option 3: GitHub Pages

1. Create a new GitHub repo (e.g., `hilmydzakya.github.io`)
2. Push these files to the repo
3. Go to **Settings > Pages**
4. Select branch `main` and folder `/ (root)`
5. Your site will be live at `https://yourusername.github.io`

### Option 4: Local Preview

Simply open `index.html` in your browser:
```bash
# Or use a local server
npx serve .
# or
python -m http.server 8000
```

---

## 🎨 Customization Guide

### 1. Add Your Photo
Replace the placeholder in the About section:
```html
<div class="image-placeholder">
    <!-- Replace with your image -->
    <img src="your-photo.jpg" alt="Muhammad Hilmy Dzakya" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
</div>
```

### 2. Update Bio
Edit the bio text in `js/main.js` inside the `translations` object:
```javascript
about_bio: "Your custom bio here..."
```

### 3. Add More Projects
Copy a `.project-card` block in `index.html` and update:
- Project name
- Description
- Tech tags
- Links (GitHub / Live Demo)

### 4. Update Skill Percentages
In `index.html`, modify the `--width` CSS variable:
```html
<div class="skill-fill" style="--width: 90%"></div>
```

### 5. Add Blog Posts
Copy a `.blog-card` block in the Blog section.

### 6. Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --neon-cyan: #00f0ff;
    --neon-purple: #bd00ff;
    /* ... */
}
```

---

## 🔗 Connect With Me

- 📧 **Email**: dzakyam42@gmail.com
- 💼 **LinkedIn**: [Muhammad Hilmy Dzakya](https://www.linkedin.com/in/muhammad-hilmy-dzakya-9259522a8)
- 🐙 **GitHub**: [@Jamaludin71](https://github.com/Jamaludin71)
- 💬 **WhatsApp**: [+62 882-3210-9086](https://wa.me/6288232109086)

---

## 📄 License

MIT License — feel free to use and modify!

---

<p align="center">
  <span style="color:#00f0ff">&lt;/&gt;</span> Built with passion by <strong>Muhammad Hilmy Dzakya</strong>
</p>
