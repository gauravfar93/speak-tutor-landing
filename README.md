# Speak Tutor Frontend Assignment

### 🧠 Tech Stack

- React.js (Vite)
- Tailwind CSS
- Framer Motion (animations)

### ⚙️ Setup

1. Clone repo
2. Run `npm install`
3. Start with `npm run dev`

### 📁 Component Structure

- `SectionOne` → First block (motivation & goals)
- `SectionTwo` → Second block (talk about anything)
- `SectionThree` → Third block (build relationship)

### 📱 Responsiveness

- Handled using Tailwind’s responsive classes (`md:flex-row`, etc.)

Responsiveness:
Tailwind’s responsive utilities (e.g., md:flex-row, max-w-md, space-y-6) ensure proper scaling across all screen sizes.
The layout gracefully stacks on smaller devices and aligns side-by-side on larger screens.

### 🎞 Animations

- Used Framer Motion for fade-in + slide-up on scroll.

Animations:
Implemented using Framer Motion’s motion.div components.
Each section fades and slides into view with smooth easing:

initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, ease: "easeOut" }}
