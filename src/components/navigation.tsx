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
    <nav className="glass-card border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            <Link 
              href="/" 
              className="text-xl font-bold heading-gradient hover:scale-105 transition-transform duration-200"
            >
              CycleSync
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
                      "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-200 focus-ring",
                      isActive && "bg-primary/10 text-primary border-primary/20"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Button>
                </Link>
              )
            })}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground transition-all duration-200 focus-ring hover:bg-primary/10"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
} 