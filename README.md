# CycleSync - Modern Fitness Tracker

A clean, minimal fitness tracker web app built with Next.js, focusing on macro tracking, workout logging, and cycle management.

![Image](https://github.com/user-attachments/assets/037947bf-b5c1-4a1a-9e0a-9f5f6df162d1)

## Features

### Core Functionality
- **Daily Macro Tracking**: Protein, carbs, fiber, and water intake with animated progress bars
- **Workout Logging**: Track exercises, sets, reps, and muscle groups
- **Injection Tracker**: Test/Deca cycle management with calendar reminders
- **Progress Charts**: Weight and macro trends visualization
- **Settings**: Customizable goals, units, and cycle schedules

### Design Philosophy
- **Sparse & Clean**: Minimal distractions, maximum utility
- **Mobile-First**: Responsive design optimized for all devices
- **Dark/Light Mode**: Automatic theme switching
- **Centered Layout**: `max-w-screen-md mx-auto` for focused content

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Notifications**: Sonner

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

**Built with Next.js and shadcn/ui**
