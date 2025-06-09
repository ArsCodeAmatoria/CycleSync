"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface MacroProgressProps {
  icon: LucideIcon
  label: string
  current: number
  target: number
  unit: string
  color?: string
}

export function MacroProgress({ 
  icon: Icon, 
  label, 
  current, 
  target, 
  unit, 
  color = "default" 
}: MacroProgressProps) {
  const percentage = target > 0 ? Math.min((current / target) * 100, 100) : 0
  const remaining = Math.max(target - current, 0)

  return (
    <Card className="border-muted">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-foreground">
              {current.toFixed(0)}/{target.toFixed(0)} {unit}
            </div>
            <div className="text-xs text-muted-foreground">
              {remaining.toFixed(0)} {unit} remaining
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Progress value={percentage} className="h-2" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-1 bg-primary rounded-full"
          />
        </div>
        
        <div className="mt-2 text-xs text-muted-foreground text-center">
          {percentage.toFixed(0)}% complete
        </div>
      </CardContent>
    </Card>
  )
} 