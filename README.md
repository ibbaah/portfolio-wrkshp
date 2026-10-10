# Personal Portfolio Website — Aysha Hiba (Data Analyst)

A modern, sleek, fully responsive personal portfolio website built with **HTML5**, **CSS3**, **Bootstrap 5**, and **JavaScript**. Designed with a deep dark theme, neon purple/cyan accents, smooth scrolling, interactive cards, and beginner-friendly architecture for workshops and student developers.

---

## 🌟 Features & Highlights

- **Modern Dark Theme Aesthetic**: Built with high-contrast slate-black surfaces, glowing neon accents, and backdrop glassmorphism.
- **Dynamic Typing Animation**: Cycles through key job roles automatically in the hero header.
- **Fully Responsive**: Flawless experience across mobile smartphones, tablets, and widescreen desktop monitors.
- **Interactive Project Showcases**: Card grid with tech badges, code links, and interactive Bootstrap modal popups displaying project deep-dives.
- **Animated Skills Section**: Progress bars that smoothly grow when scrolled into view using the modern `IntersectionObserver` API.
- **Interactive Contact Form**: Complete client-side validation, error messages, and simulated loading/success feedback.
- **Workshop-Friendly**: Clean, modular code with descriptive comments and CSS variables for instant customization.
- **Zero Heavy Frameworks**: Pure HTML, CSS, Bootstrap 5, and Vanilla JS — runs instantly without `npm install` or complex build configurations.

---

## 📁 Project File Structure

```text
portfolio-workshop/
│
├── index.html            # Main website structure & Bootstrap 5 markup
├── style.css             # Custom styles, dark theme palette & animations
├── script.js             # Typewriter effect, form validation & interactivity
├── README.md             # Project documentation & workshop customization guide
│
└── images/               # High-resolution assets
    ├── profile.jpg       # Profile picture (Aysha Hiba)
    ├── project-ecommerce.jpg   # Project 1 Preview Thumbnail
    ├── project-healthcare.jpg  # Project 2 Preview Thumbnail
    └── project-finance.jpg     # Project 3 Preview Thumbnail
```

---

## 🚀 How to Run & Preview the Website

You can preview this website right away using any of the following methods:

### Method 1: Direct File Open (Easiest)
1. Open the project folder in your file explorer (`c:\Users\user\Downloads\portfolio workshop`).
2. Double-click **`index.html`** to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Python Local HTTP Server
If you have Python installed, open a terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Method 3: VS Code / Antigravity "Live Server" Extension
1. Install the **Live Server** extension in your IDE.
2. Right-click `index.html` and choose **"Open with Live Server"**.

---

## 🎨 Workshop Customization Guide

### 1. Changing Your Name, Role & Bio
- Open `index.html`:
  - Search for `AYSHA HIBA` and replace it with your own name.
  - Search for `Data Analyst` to update your preferred target job title.
  - In `script.js`, locate the `roles` array (around Line 22) to change the titles in the typewriter effect:
    ```javascript
    const roles = [
        'DATA ANALYST',
        'BI DASHBOARD DEVELOPER',
        'PYTHON & SQL SPECIALIST',
        'DATA SCIENTIST'
    ];
    ```

### 2. Updating Profile & Project Images
- Replace `images/profile.jpg` with your own headshot or photo. Keep the same filename or update the `src` attribute in `index.html`.
- Place your project screenshots into the `images/` directory and update the `src` paths in the `#projects` section of `index.html`.

### 3. Customizing Colors (CSS Variables)
- Open `style.css` and modify the variables at the top of the file under `:root`:
  ```css
  :root {
      --bg-dark: #090a10;           /* Background color */
      --accent-purple: #8b5cf6;     /* Primary accent */
      --accent-cyan: #06b6d4;       /* Secondary accent */
      --accent-gradient: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  }
  ```
  *Tip: Try emerald green (`#10b981`) or sunset orange (`#f97316`) for a fresh look!*

### 4. Updating Skills & Percentages
- In `index.html` under the `#skills` section:
  - Change the skill label: `<span class="skill-name">Python</span>`
  - Update the percentage text: `<span class="skill-percent">95%</span>`
  - Update the progress bar width: `style="width: 95%;"` and `aria-valuenow="95"`

### 5. Connecting the Contact Form to Send Real Emails
Because this is a static website (HTML/CSS/JS without a backend server), you can use free form-handling services in just 1 step:

#### Option A: Using Formspree (Free & Simple)
1. Sign up at [https://formspree.io](https://formspree.io) and create a new form.
2. Copy your unique form endpoint URL (e.g., `https://formspree.io/f/xyzabw`).
3. In `index.html`, update `<form id="contactForm">` to:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Add `name="name"`, `name="email"`, `name="subject"`, and `name="message"` attributes to the `<input>` and `<textarea>` elements.

#### Option B: Using EmailJS
Sign up at [https://www.emailjs.com](https://www.emailjs.com) to trigger email delivery directly via client-side JavaScript.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic document layout (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: Custom design tokens, CSS Grid, Flexbox, glassmorphic filters, and keyframe animations.
- **Bootstrap 5.3.3**: Responsive grid, navbar collapse toggle, cards, and modal dialogs.
- **JavaScript (ES6+)**: Typewriter animation, scroll detection, intersection observer, and form validation.
- **Font Awesome 6.5.1**: Icon set for UI elements and social handles.
- **Google Fonts**: Modern typography featuring *Plus Jakarta Sans* and *Inter*.

---

## 📜 License
This project is open-source and free to use for personal portfolios, student showcases, and educational workshops.
