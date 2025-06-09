"use client"

import { motion } from "framer-motion"
import { Apple, Wheat, Salad, Droplet, Utensils, Dumbbell, Calendar } from "lucide-react"
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
      {/* Simple Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">{today}</p>
      </div>

      {/* Daily Goals Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Daily Goals</h2>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { icon: Apple, label: "Protein", data: mockData.protein, unit: "g" },
            { icon: Wheat, label: "Carbs", data: mockData.carbs, unit: "g" },
            { icon: Salad, label: "Fiber", data: mockData.fiber, unit: "g" },
            { icon: Droplet, label: "Water", data: mockData.water, unit: "L" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <MacroProgress
                icon={item.icon}
                label={item.label}
                current={item.data.current}
                target={item.data.target}
                unit={item.unit}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="space-y-6"
      >
        <div className="border-t border-border/50 pt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { 
                href: "/log", 
                title: "Log Meal", 
                description: "Track nutrition", 
                icon: Utensils,
                gradient: "from-emerald-500/10 to-emerald-600/5",
                iconColor: "text-emerald-500"
              },
              { 
                href: "/log", 
                title: "Log Workout", 
                description: "Record training", 
                icon: Dumbbell,
                gradient: "from-blue-500/10 to-blue-600/5",
                iconColor: "text-blue-500"
              },
              { 
                href: "/cycle", 
                title: "View Cycle", 
                description: "Check schedule", 
                icon: Calendar,
                gradient: "from-purple-500/10 to-purple-600/5",
                iconColor: "text-purple-500"
              }
            ].map((action, index) => {
              const IconComponent = action.icon
              return (
                <motion.a
                  key={action.title}
                  href={action.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className={`group p-6 glass-card interactive-card border-border/50 text-center bg-gradient-to-br ${action.gradient} focus-ring`}
                >
                  <div className={`mb-4 flex justify-center group-hover:scale-110 transition-transform duration-200 ${action.iconColor}`}>
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {action.title}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {action.description}
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
