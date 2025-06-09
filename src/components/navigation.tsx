"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Calendar, TrendingUp, Settings, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "Dashboard" },
  { href: "/log", icon: BookOpen, label: "Log" },
  { href: "/cycle", icon: Calendar, label: "Cycle" },
  { href: "/progress", icon: TrendingUp, label: "Progress" },
  { href: "/settings", icon: Settings, label: "Settings" },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="glass-card border-b neon-border sticky top-0 z-50 cyber-glow matrix-rain">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            <Link 
              href="/" 
              className="text-xl font-bold heading-gradient hover:scale-105 transition-all duration-300 relative"
            >
              <span className="drop-shadow-[0_0_12px_oklch(0.7_0.4_190_/_0.8)]">
                CycleSync
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link key={item.href} href={item.href}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={cn(
                      "flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 focus-ring relative overflow-hidden",
                      "hover:bg-primary/20 hover:shadow-[0_0_15px_oklch(0.7_0.4_190_/_0.3)]",
                      isActive && "bg-primary/25 text-primary shadow-[0_0_20px_oklch(0.7_0.4_190_/_0.4)] hologram"
                    )}
                  >
                    <Icon className={cn(
                      "h-4 w-4 transition-all duration-300",
                      isActive && "drop-shadow-[0_0_8px_oklch(0.7_0.4_190_/_0.8)]"
                    )} />
                    <span className={cn(
                      "hidden sm:inline transition-all duration-300",
                      isActive && "drop-shadow-[0_0_6px_oklch(0.7_0.4_190_/_0.6)]"
                    )}>{item.label}</span>
                  </Button>
                </Link>
              )
            })}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-primary transition-all duration-300 focus-ring hover:bg-primary/20 hover:shadow-[0_0_15px_oklch(0.7_0.4_190_/_0.3)] relative overflow-hidden"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 drop-shadow-[0_0_8px_oklch(0.8_0.4_60_/_0.8)]" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 drop-shadow-[0_0_8px_oklch(0.7_0.4_190_/_0.8)]" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 