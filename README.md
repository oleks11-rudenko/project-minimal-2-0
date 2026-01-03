# ⚪ Project Minimal 2.0

**Project Minimal 2.0** is a lightweight, responsive landing page built with pure HTML, CSS, and JavaScript. It utilizes **Vite** for a modern development experience and efficient bundling.

🔗 **Live Demo:** https://oleks11-rudenko.github.io/project-minimal-2-0/

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## 📖 About

This project demonstrates a clean and efficient approach to web development without heavy frameworks. It focuses on:

- **Modular Structure:** Breaking down HTML and CSS into reusable partials and files.
- **Performance:** Native browser technologies for maximum speed.
- **Adaptiveness:** Custom CSS for perfect rendering on all devices.

---

## ✨ Features

### 🏠 Sections

The landing page includes distinct, modular sections:

- **Hero:** Impactful introduction.
- **About:** Information about the brand.
- **Products:** Product showcases.
- **Bestsellers:** Best products.
- **Reviews:** Customer testimonials.
- **Newsletter:** Subscription form area.

### ⚡ Functionality

- **Mobile Menu:** Adaptive navigation for smaller screens.
- **Modular HTML:** Uses partials (e.g., `header.html`, `footer.html`) for better code maintainability.
- **Pure JavaScript:** Lightweight interactions (`main.js`) without external framework dependencies.

### 🎨 Styling

- **CSS Architecture:** Organized separate CSS files for each component (`hero.css`, `reviews.css`, etc.).
- **Reset & Base:** Includes `reset.css` and `base.css` for consistent cross-browser rendering.

---

## 🛠 Tech Stack

- **Bundler:** Vite
- **Core:** HTML5, CSS3, Vanilla JavaScript
- **Templating:** HTML Partials (via Vite plugin logic or static includes)
- **Styling:** Standard CSS (Custom properties, Flexbox)
- **Icons:** SVG Sprites (`sprite.svg`)

---

## 🚀 Installation & Setup

To run the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/oleks11-rudenko/project-minimal-2-0.git
```

2. **Navigate to the project directory:**

```bash
cd project-minimal-2-0
```

3. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Open in browser:**

Visit the local link provided in the terminal (usually http://localhost:5173).

📂 Project Structure

```bash
project-minimal-2-0/
├── src/
│ ├── css/ # Styles broken down by component (hero.css, footer.css, etc.)
│ ├── img/ # Images organized by section (hero, products, etc.)
│ ├── partials/ # Reusable HTML components (header.html, footer.html)
│ └── public/ # Main entry points
│ ├── index.html # Homepage
│ ├── main.js # Main JavaScript file
│ └── ... # Other pages (privacy.html, terms.html)
├── vite.config.js # Vite configuration
├── package.json # Project dependencies
└── ...
```

---

## 👨‍💻 Author

**Oleksii Rudenko**

- GitHub: [https://github.com/oleks11-rudenko](https://github.com/oleks11-rudenko)

---

⭐️ Thank you for checking out the project! If you like it, please give it a star on GitHub.
