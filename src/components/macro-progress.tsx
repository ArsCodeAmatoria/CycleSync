"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface MacroProgressProps {
  icon: LucideIcon
  label: string
  current: number
  target: number
  unit: string
}

export function MacroProgress({ 
  icon: Icon, 
  label, 
  current, 
  target, 
  unit
}: MacroProgressProps) {
  const percentage = target > 0 ? Math.min((current / target) * 100, 100) : 0
  const remaining = Math.max(target - current, 0)
  const isComplete = percentage === 100
  
  // Dynamic gradient based on macro type
  const getGradientClass = () => {
    switch (label.toLowerCase()) {
      case 'protein': return 'protein-gradient'
      case 'carbs': return 'carbs-gradient'
      case 'fiber': return 'fiber-gradient'
      case 'water': return 'water-gradient'
      default: return 'bg-primary'
    }
  }

  const getIconColor = () => {
    switch (label.toLowerCase()) {
      case 'protein': return 'text-emerald-500'
      case 'carbs': return 'text-amber-500'
      case 'fiber': return 'text-purple-500'
      case 'water': return 'text-cyan-500'
      default: return 'text-primary'
    }
  }

  return (
    <Card className="glass-card interactive-card border-border/50 overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-muted/50 ${getIconColor()}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <span className="text-sm font-semibold text-foreground">{label}</span>
              {isComplete && (
                <div className="flex items-center space-x-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Complete</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-foreground">
              {current.toFixed(0)}<span className="text-sm text-muted-foreground">/{target.toFixed(0)} {unit}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {remaining.toFixed(0)} {unit} left
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="relative">
            <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.2 
                }}
                className={`h-full ${getGradientClass()} rounded-full relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: percentage > 5 ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="absolute -top-8 text-xs font-semibold text-foreground bg-card border border-border rounded px-2 py-1 shadow-sm"
              style={{ left: `${Math.min(Math.max(percentage - 5, 0), 90)}%` }}
            >
              {percentage.toFixed(0)}%
            </motion.div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-xs text-muted-foreground">
              Progress
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className={`text-xs font-medium ${isComplete ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}`}
            >
              {percentage.toFixed(1)}% of daily goal
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 