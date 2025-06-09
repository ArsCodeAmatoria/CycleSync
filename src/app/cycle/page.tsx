"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Syringe, Calendar, Clock, AlertCircle } from "lucide-react"
import { toast } from "sonner"

// Mock data for cycle tracking
const mockCycleData = {
  currentWeek: 8,
  totalWeeks: 12,
  nextInjection: "2024-12-11",
  lastInjection: "2024-12-08",
  schedule: "Every 3 days",
  compounds: [
    { name: "Testosterone Cypionate", dose: 250, frequency: "2x/week" },
    { name: "Deca Durabolin", dose: 200, frequency: "1x/week" }
  ]
}

// Generate upcoming injection dates
const generateUpcomingDates = () => {
  const dates = []
  const today = new Date()
  
  for (let i = 0; i < 10; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + (i * 3))
    dates.push({
      date: date.toISOString().split('T')[0],
      day: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      isPast: date < today,
      isToday: date.toDateString() === today.toDateString(),
      isUpcoming: date > today
    })
  }
  
  return dates
}

export default function CyclePage() {
  const [reminderEnabled, setReminderEnabled] = useState(true)
  const upcomingDates = generateUpcomingDates()
  const progressPercentage = (mockCycleData.currentWeek / mockCycleData.totalWeeks) * 100

  const toggleReminder = () => {
    setReminderEnabled(!reminderEnabled)
    toast.success(reminderEnabled ? "Reminders disabled" : "Reminders enabled")
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Cycle Tracker</h1>
        <p className="text-muted-foreground">Monitor your Test/Deca injection schedule</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Current Cycle Status */}
        <Card className="border-muted">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Cycle Progress</span>
            </CardTitle>
            <CardDescription>
              Week {mockCycleData.currentWeek} of {mockCycleData.totalWeeks}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{progressPercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Last Injection:</span>
                <Badge variant="outline">{mockCycleData.lastInjection}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Next Injection:</span>
                <Badge variant="default">{mockCycleData.nextInjection}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Schedule:</span>
                <Badge variant="secondary">{mockCycleData.schedule}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compounds */}
        <Card className="border-muted">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Syringe className="h-5 w-5" />
              <span>Current Stack</span>
            </CardTitle>
            <CardDescription>
              Active compounds and dosages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockCycleData.compounds.map((compound, index) => (
              <div key={index} className="p-3 border border-muted rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-foreground">{compound.name}</div>
                    <div className="text-sm text-muted-foreground">{compound.frequency}</div>
                  </div>
                  <Badge variant="outline">{compound.dose}mg</Badge>
                </div>
              </div>
            ))}
            
            <Button
              variant="outline"
              onClick={toggleReminder}
              className="w-full mt-4"
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              {reminderEnabled ? "Disable" : "Enable"} Reminders
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Schedule */}
      <Card className="border-muted">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Injection Schedule</span>
          </CardTitle>
          <CardDescription>
            Upcoming injection dates based on 3-day intervals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {upcomingDates.slice(0, 10).map((dateInfo, index) => (
              <div
                key={index}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  dateInfo.isPast 
                    ? "border-muted/50 bg-muted/20 text-muted-foreground"
                    : dateInfo.isToday
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-muted hover:bg-muted/50"
                }`}
              >
                <div className="text-sm font-medium">{dateInfo.day}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {dateInfo.isPast ? "Completed" : dateInfo.isToday ? "Today" : "Upcoming"}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>Note:</strong> This schedule is based on a 3-day injection frequency. 
                Always consult with your healthcare provider for proper cycle management and timing.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 