"use client"

import { Apple, Wheat, Salad, Droplet } from "lucide-react"
import { MacroProgress } from "@/components/macro-progress"

// Mock data - in a real app, this would come from your backend/state management
const mockData = {
  protein: { current: 95, target: 150 },
  carbs: { current: 180, target: 250 },
  fiber: { current: 15, target: 25 },
  water: { current: 1.8, target: 3.0 }
}

export default function Dashboard() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">{today}</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Daily Goals</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <MacroProgress
              icon={Apple}
              label="Protein"
              current={mockData.protein.current}
              target={mockData.protein.target}
              unit="g"
            />
            <MacroProgress
              icon={Wheat}
              label="Carbs"
              current={mockData.carbs.current}
              target={mockData.carbs.target}
              unit="g"
            />
            <MacroProgress
              icon={Salad}
              label="Fiber"
              current={mockData.fiber.current}
              target={mockData.fiber.target}
              unit="g"
            />
            <MacroProgress
              icon={Droplet}
              label="Water"
              current={mockData.water.current}
              target={mockData.water.target}
              unit="L"
            />
          </div>
        </div>

        <div className="border-t border-muted pt-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a 
              href="/log"
              className="p-4 border border-muted rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <div className="text-sm font-medium text-foreground">Log Meal</div>
              <div className="text-xs text-muted-foreground mt-1">Track nutrition</div>
            </a>
            <a 
              href="/log"
              className="p-4 border border-muted rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <div className="text-sm font-medium text-foreground">Log Workout</div>
              <div className="text-xs text-muted-foreground mt-1">Record training</div>
            </a>
            <a 
              href="/cycle"
              className="p-4 border border-muted rounded-lg hover:bg-muted/50 transition-colors text-center"
            >
              <div className="text-sm font-medium text-foreground">View Cycle</div>
              <div className="text-xs text-muted-foreground mt-1">Check schedule</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
