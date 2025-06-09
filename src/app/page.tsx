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
    <div className="relative overflow-hidden">
      {/* Cyberpunk background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-cyan to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyber-purple to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Cyberpunk Hero Section */}
      <div className="text-center space-y-6 mb-12 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 via-cyber-purple/5 to-cyber-magenta/5 rounded-3xl blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative backdrop-blur-sm rounded-2xl p-8 border neon-border mx-4 hologram"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-magenta font-mono"
            style={{ 
              textShadow: '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(128, 0, 255, 0.3)'
            }}
          >
            &gt; DASHBOARD_
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2 mt-4"
          >
            <p className="text-muted-foreground text-lg font-mono tracking-wider">
              {today.toUpperCase()}
            </p>
            <motion.div 
              className="flex items-center justify-center space-x-3 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-cyber-green shadow-[0_0_10px_oklch(0.7_0.4_160)]"></div>
              <span className="text-cyber-cyan font-mono tracking-wider drop-shadow-[0_0_8px_oklch(0.7_0.4_190_/_0.6)]">
                NEURAL_LINK_ACTIVE
              </span>
              <div className="w-2 h-2 rounded-full bg-cyber-green shadow-[0_0_10px_oklch(0.7_0.4_160)]"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Daily Goals Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-green font-mono tracking-wider">
            &gt; DAILY_TARGETS_
          </h2>
          <motion.div 
            className="text-sm text-cyber-cyan font-mono tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {new Date().toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()}
          </motion.div>
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
        <div className="border-t neon-border pt-8 relative">
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple mb-6 font-mono">
            &gt; QUICK_ACCESS_
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { 
                href: "/log", 
                title: "LOG_MEAL", 
                description: "NUTRITION.TRACK", 
                icon: Utensils,
                color: "cyber-green",
                bgGlow: "bg-cyber-green/10"
              },
              { 
                href: "/log", 
                title: "LOG_WORKOUT", 
                description: "TRAINING.REC", 
                icon: Dumbbell,
                color: "cyber-cyan",
                bgGlow: "bg-cyber-cyan/10"
              },
              { 
                href: "/cycle", 
                title: "VIEW_CYCLE", 
                description: "SCHEDULE.CHK", 
                icon: Calendar,
                color: "cyber-purple",
                bgGlow: "bg-cyber-purple/10"
              }
            ].map((action, index) => {
              const IconComponent = action.icon
              return (
                <motion.a
                  key={action.title}
                  href={action.href}
                  initial={{ opacity: 0, y: 20, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: `0 0 30px oklch(0.7 0.4 ${action.color === 'cyber-green' ? '160' : action.color === 'cyber-cyan' ? '190' : '280'} / 0.4)`
                  }}
                  className={`group p-6 glass-card neon-border text-center ${action.bgGlow} focus-ring relative overflow-hidden cyber-glow hologram`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div 
                    className={`mb-4 flex justify-center transition-all duration-300 text-${action.color}`}
                    whileHover={{ scale: 1.2, rotateZ: 5 }}
                  >
                    <IconComponent 
                      size={32} 
                      strokeWidth={1.5} 
                      className="drop-shadow-[0_0_15px_currentColor]"
                    />
                  </motion.div>
                  <div className={`text-lg font-bold text-${action.color} font-mono tracking-wider drop-shadow-[0_0_8px_currentColor] group-hover:text-shadow-glow transition-all duration-300`}>
                    {action.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-mono tracking-widest opacity-80">
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
