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
    <Card className="glass-card interactive-card neon-border overflow-hidden cyber-glow hologram relative">
      <CardContent className="p-5 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div 
              className={`p-2 rounded-lg bg-muted/20 backdrop-blur-sm ${getIconColor()} relative`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="h-5 w-5 drop-shadow-[0_0_8px_currentColor]" />
              <div className="absolute inset-0 rounded-lg bg-current opacity-10 animate-pulse"></div>
            </motion.div>
            <div>
              <span className="text-sm font-semibold text-foreground drop-shadow-[0_0_6px_oklch(0.7_0.4_190_/_0.3)]">{label}</span>
              {isComplete && (
                <motion.div 
                  className="flex items-center space-x-1 mt-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-cyber-green shadow-[0_0_8px_oklch(0.7_0.4_160)]"></div>
                  <span className="text-xs text-cyber-green font-medium drop-shadow-[0_0_6px_oklch(0.7_0.4_160_/_0.6)]">Complete</span>
                </motion.div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-foreground drop-shadow-[0_0_8px_oklch(0.7_0.4_190_/_0.3)]">
              {current.toFixed(0)}<span className="text-sm text-muted-foreground">/{target.toFixed(0)} {unit}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {remaining.toFixed(0)} {unit} left
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="relative">
            <div className="w-full h-4 bg-muted/20 rounded-full overflow-hidden backdrop-blur-sm border border-border/30">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.2 
                }}
                className={`h-full ${getGradientClass()} rounded-full relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: percentage > 5 ? 1 : 0, opacity: percentage > 5 ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
              className="absolute -top-9 text-xs font-semibold text-foreground bg-card/80 backdrop-blur-sm border neon-border rounded px-2 py-1 shadow-lg"
              style={{ left: `${Math.min(Math.max(percentage - 5, 0), 90)}%` }}
            >
              <span className="drop-shadow-[0_0_6px_oklch(0.7_0.4_190_/_0.6)]">
                {percentage.toFixed(0)}%
              </span>
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
              className={`text-xs font-medium ${
                isComplete 
                  ? 'text-cyber-green drop-shadow-[0_0_6px_oklch(0.7_0.4_160_/_0.6)]' 
                  : 'text-muted-foreground'
              }`}
            >
              {percentage.toFixed(1)}% of daily goal
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 