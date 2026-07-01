# Mohammed Baqhir R — Portfolio (React + Vite)

A modern, career-focused personal portfolio built with React, Vite, and Framer Motion.

## ✨ Features

- **Floating capsule navigation** — pill-shaped bottom nav, color-glows with accent
- **Dynamic accent color** — shifts smoothly (violet → blue → emerald → amber) per section
- **Hero with real photo** — split layout with animated chips and typewriter roles
- **Filterable projects** — category filter tabs
- **Animated skills grid** — category cards with tech badges
- **Education + certifications** — clean card layouts
- **Achievements** — icon cards with micro-animations
- **Contact form** — opens mail client pre-filled
- **Resume download** — directly from the site
- Fully responsive (mobile → desktop)
- 60fps Framer Motion animations

## 🛠 Tech Stack

React 18 · Vite 5 · Framer Motion · Lucide React · react-type-animation

## 📁 Folder Structure

```
src/
├── components/       CapsuleNav, Footer
├── sections/         Hero, About, Skills, Projects, Certifications, Achievements, Contact
├── data/             siteData.js  ← all content lives here
├── hooks/            useAccentColor.js
├── styles/           globals.css
└── App.jsx / main.jsx
public/
├── avatar.jpg        ← your photo
├── resume.pdf        ← your resume
└── favicon.svg
```

## 🚀 Run Locally

```bash
npm install
npm run dev        # → http://localhost:5173
```

## 🏗 Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview production build
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy — done!

## ✏️ Update Content

All content is in **`src/data/siteData.js`** — never need to touch components:

| What | Where |
|---|---|
| Name, bio, links | `personal` object |
| Projects | `projects` array |
| Skills | `skills` array |
| Certifications | `certifications` array |
| Achievements | `achievements` array |

To add a new project, append an object to the `projects` array in `siteData.js`.

## 📝 Commit Suggestions

```
feat: initial React Vite portfolio setup
feat: add capsule nav + accent color system
feat: hero section with photo and typewriter
feat: skills, projects, certs, contact sections
chore: add resume and avatar to public/
deploy: push to Vercel
```
