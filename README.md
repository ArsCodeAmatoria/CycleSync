```
  ██████╗██╗   ██╗ ██████╗██╗     ███████╗███████╗██╗   ██╗███╗   ██╗ ██████╗
 ██╔════╝╚██╗ ██╔╝██╔════╝██║     ██╔════╝██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝
 ██║      ╚████╔╝ ██║     ██║     █████╗  ███████╗ ╚████╔╝ ██╔██╗ ██║██║     
 ██║       ╚██╔╝  ██║     ██║     ██╔══╝  ╚════██║  ╚██╔╝  ██║╚██╗██║██║     
 ╚██████╗   ██║   ╚██████╗███████╗███████╗███████║   ██║   ██║ ╚████║╚██████╗
  ╚═════╝   ╚═╝    ╚═════╝╚══════╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝
                                                                              
      🚀 A Modern Cyberpunk Fitness Tracker | Next.js + Tailwind CSS 🚀
```

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**Clean, minimal fitness tracker with cyberpunk aesthetics**  
*Macro tracking • Workout logging • Cycle management*

![CycleSync Preview](https://github.com/user-attachments/assets/037947bf-b5c1-4a1a-9e0a-9f5f6df162d1)

[🌟 Live Demo](https://your-demo-url.vercel.app) • [📖 Documentation](#features) • [🚀 Quick Start](#getting-started)

</div>

## 📱 Screenshots

<div align="center">

| Dashboard | Macro Tracking | Cycle Management |
|-----------|----------------|------------------|
| ![Dashboard](https://via.placeholder.com/300x200/0a0a0a/00ffff?text=Dashboard) | ![Tracking](https://via.placeholder.com/300x200/0a0a0a/ff00ff?text=Macro+Tracking) | ![Cycle](https://via.placeholder.com/300x200/0a0a0a/00ff00?text=Cycle+Tracker) |

*Cyberpunk-themed UI with neon aesthetics and smooth animations*

</div>

---

## ⚡ Features

<table>
<tr>
<td width="50%">

### 🎯 Core Functionality
- **Daily Macro Tracking** - Protein, carbs, fiber, water with animated progress
- **Workout Logging** - Exercises, sets, reps, muscle groups
- **Injection Tracker** - Test/Deca cycle management with reminders
- **Progress Charts** - Weight and macro trends visualization
- **Smart Settings** - Customizable goals, units, schedules

</td>
<td width="50%">

### 🎨 Design Philosophy
- **Cyberpunk Aesthetics** - Neon borders, holographic effects
- **Sparse & Clean** - Minimal distractions, maximum utility
- **Mobile-First** - Responsive design for all devices
- **Dark/Light Mode** - Automatic theme switching
- **Glass Morphism** - Modern translucent UI elements

</td>
</tr>
</table>

### 🌟 UI/UX Highlights
- **Matrix-Style Navigation** - Animated neon borders and cyber glow effects
- **Holographic Progress Cards** - 3D transforms and gradient animations
- **Terminal Typography** - Monospace fonts for that hacker aesthetic
- **Interactive Micro-animations** - Framer Motion powered transitions
- **Professional Icon System** - Lucide React icons throughout

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling | Components | Animations |
|----------|---------|------------|------------|
| ![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js) | ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css) | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square) | ![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3) | ![Lucide](https://img.shields.io/badge/Lucide-React-F56565?style=flat-square) | ![Sonner](https://img.shields.io/badge/Sonner-Toast-22C55E?style=flat-square) |

</div>

**Core Dependencies:**
- **Framework**: Next.js 15 with App Router & TypeScript
- **Styling**: Tailwind CSS with custom cyberpunk theme
- **Components**: shadcn/ui for consistent design system
- **Icons**: Lucide React for professional iconography
- **Animations**: Framer Motion for smooth transitions
- **Theme**: next-themes for dark/light mode switching
- **Notifications**: Sonner for elegant toast messages

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cyclesync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Pages & Navigation

### `/` - Dashboard
- Daily goal progress for macros and hydration
- Quick action buttons for logging
- Current date display

### `/log` - Log Entry
- **Meals Tab**: Track nutrition (protein, carbs, fiber, calories)
- **Workouts Tab**: Record exercises with sets, reps, weight
- **Injections Tab**: Log compounds, doses, and injection sites

### `/cycle` - Cycle Tracker
- Current cycle progress (week X of Y)
- Injection schedule with 3-day intervals
- Compound stack overview
- Reminder toggle functionality

### `/progress` - Progress Charts
- Weight trend visualization
- Macro intake trends (protein, carbs, fiber)
- Weekly averages and goal tracking

### `/settings` - Settings
- **Goals**: Set daily macro and weight targets
- **Units**: Choose measurement preferences (lbs/kg, L/fl oz)
- **Cycle**: Configure injection frequency and reminders
- **Profile**: Personal information and activity level

## Design System

### Colors & Theming
- Uses shadcn/ui color system with CSS variables
- `text-foreground`, `text-muted-foreground`
- `border-muted`, `bg-muted`
- Automatic dark/light mode support

### Layout
- Centered container: `max-w-screen-md mx-auto`
- Consistent spacing: `space-y-8`, `space-y-6`
- Responsive grids: `grid gap-4 sm:grid-cols-2`

### Components
- **Cards**: Clean borders with `border-muted`
- **Progress Bars**: Animated with Framer Motion
- **Navigation**: Icon + text with active states
- **Forms**: Consistent input styling and validation

## Customization

### Adding New Macro Types
1. Update the `mockData` object in `src/app/page.tsx`
2. Add new `MacroProgress` component with appropriate icon
3. Update the logging form in `src/app/log/page.tsx`

### Modifying Injection Schedule
1. Edit the `generateUpcomingDates` function in `src/app/cycle/page.tsx`
2. Adjust the frequency multiplier (currently `i * 3` for 3-day intervals)

### Changing Theme Colors
1. Modify CSS variables in `src/app/globals.css`
2. Update the shadcn/ui theme configuration

## Data Structure

Currently uses mock data for demonstration. In production, you would integrate with:

### Recommended Backend Options
- **Supabase**: Real-time database with auth
- **Firebase**: Google's backend-as-a-service
- **PlanetScale**: Serverless MySQL platform
- **Vercel Postgres**: Integrated with Vercel deployment

### Data Models
```typescript
// Example data structures
interface MacroEntry {
  date: string
  protein: number
  carbs: number
  fiber: number
  water: number
}

interface WorkoutEntry {
  date: string
  exercise: string
  sets: number
  reps: number
  weight: number
  muscleGroup: string
}

interface InjectionEntry {
  date: string
  compound: string
  dose: number
  location: string
}
```

## Deployment

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Other Platforms
- **Netlify**: Connect GitHub repo for auto-deployment
- **Railway**: `railway deploy`
- **Docker**: Use the included Dockerfile

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This application is for educational and personal tracking purposes only. Always consult with healthcare professionals for medical advice regarding fitness, nutrition, and any substances or supplements.

---

<div align="center">

```
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █  ███████╗██╗   ██╗████████╗██╗   ██╗██████╗ ███████╗    ███████╗██╗████████╗ █
 █  ██╔════╝██║   ██║╚══██╔══╝██║   ██║██╔══██╗██╔════╝    ██╔════╝██║╚══██╔══╝ █
 █  █████╗  ██║   ██║   ██║   ██║   ██║██████╔╝█████╗      █████╗  ██║   ██║    █
 █  ██╔══╝  ██║   ██║   ██║   ██║   ██║██╔══██╗██╔══╝      ██╔══╝  ██║   ██║    █
 █  ██║     ╚██████╔╝   ██║   ╚██████╔╝██║  ██║███████╗    ██║     ██║   ██║    █
 █  ╚═╝      ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝   ╚═╝    █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
```

**Built with ❤️ and cyberpunk aesthetics**

[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Powered by shadcn/ui](https://img.shields.io/badge/Powered%20by-shadcn/ui-000000?style=for-the-badge)](https://ui.shadcn.com/)

*Track your gains in style* 🚀

</div>
