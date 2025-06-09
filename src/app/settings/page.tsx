"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Target, Calendar, User } from "lucide-react"
import { toast } from "sonner"

export default function SettingsPage() {
  const [goals, setGoals] = useState({
    protein: "150",
    carbs: "250",
    fiber: "25",
    water: "3.0",
    targetWeight: "190"
  })

  const [units, setUnits] = useState({
    weight: "lbs",
    liquid: "L"
  })

  const [cycle, setCycle] = useState({
    frequency: "3",
    duration: "12",
    reminders: "enabled"
  })

  const [profile, setProfile] = useState({
    age: "25",
    height: "5'10\"",
    activityLevel: "moderate"
  })

  const handleSaveGoals = () => {
    toast.success("Goals updated successfully!")
  }

  const handleSaveUnits = () => {
    toast.success("Units updated successfully!")
  }

  const handleSaveCycle = () => {
    toast.success("Cycle settings updated successfully!")
  }

  const handleSaveProfile = () => {
    toast.success("Profile updated successfully!")
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Customize your fitness tracking preferences</p>
      </div>

      <Tabs defaultValue="goals" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="goals" className="flex items-center space-x-2">
            <Target className="h-4 w-4" />
            <span className="hidden sm:inline">Goals</span>
          </TabsTrigger>
          <TabsTrigger value="units" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Units</span>
          </TabsTrigger>
          <TabsTrigger value="cycle" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Cycle</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="goals">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Daily Goals</span>
              </CardTitle>
              <CardDescription>
                Set your daily nutrition and fitness targets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="protein-goal">Protein Goal (g)</Label>
                  <Input
                    id="protein-goal"
                    type="number"
                    value={goals.protein}
                    onChange={(e) => setGoals({ ...goals, protein: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carbs-goal">Carbs Goal (g)</Label>
                  <Input
                    id="carbs-goal"
                    type="number"
                    value={goals.carbs}
                    onChange={(e) => setGoals({ ...goals, carbs: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fiber-goal">Fiber Goal (g)</Label>
                  <Input
                    id="fiber-goal"
                    type="number"
                    value={goals.fiber}
                    onChange={(e) => setGoals({ ...goals, fiber: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="water-goal">Water Goal (L)</Label>
                  <Input
                    id="water-goal"
                    type="number"
                    step="0.1"
                    value={goals.water}
                    onChange={(e) => setGoals({ ...goals, water: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="target-weight">Target Weight (lbs)</Label>
                <Input
                  id="target-weight"
                  type="number"
                  value={goals.targetWeight}
                  onChange={(e) => setGoals({ ...goals, targetWeight: e.target.value })}
                  className="max-w-xs"
                />
              </div>
              
              <Button onClick={handleSaveGoals} className="w-full sm:w-auto">
                Save Goals
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="units">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Unit Preferences</span>
              </CardTitle>
              <CardDescription>
                Choose your preferred measurement units
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="weight-unit">Weight Unit</Label>
                  <Select value={units.weight} onValueChange={(value) => setUnits({ ...units, weight: value })}>
                    <SelectTrigger id="weight-unit">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lbs">Pounds (lbs)</SelectItem>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="liquid-unit">Liquid Unit</Label>
                  <Select value={units.liquid} onValueChange={(value) => setUnits({ ...units, liquid: value })}>
                    <SelectTrigger id="liquid-unit">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Liters (L)</SelectItem>
                      <SelectItem value="fl oz">Fluid Ounces (fl oz)</SelectItem>
                      <SelectItem value="cups">Cups</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button onClick={handleSaveUnits} className="w-full sm:w-auto">
                Save Units
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cycle">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Cycle Settings</span>
              </CardTitle>
              <CardDescription>
                Configure your injection schedule and reminders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="injection-frequency">Injection Frequency (days)</Label>
                  <Select value={cycle.frequency} onValueChange={(value) => setCycle({ ...cycle, frequency: value })}>
                    <SelectTrigger id="injection-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Every day</SelectItem>
                      <SelectItem value="2">Every 2 days</SelectItem>
                      <SelectItem value="3">Every 3 days</SelectItem>
                      <SelectItem value="7">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cycle-duration">Cycle Duration (weeks)</Label>
                  <Input
                    id="cycle-duration"
                    type="number"
                    value={cycle.duration}
                    onChange={(e) => setCycle({ ...cycle, duration: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reminders">Reminders</Label>
                <Select value={cycle.reminders} onValueChange={(value) => setCycle({ ...cycle, reminders: value })}>
                  <SelectTrigger id="reminders" className="max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enabled">Enabled</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={handleSaveCycle} className="w-full sm:w-auto">
                Save Cycle Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </CardTitle>
              <CardDescription>
                Your personal information for better tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={profile.age}
                    onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    value={profile.height}
                    onChange={(e) => setProfile({ ...profile, height: e.target.value })}
                    placeholder="e.g., 5'10&quot; or 178cm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="activity-level">Activity Level</Label>
                <Select value={profile.activityLevel} onValueChange={(value) => setProfile({ ...profile, activityLevel: value })}>
                  <SelectTrigger id="activity-level" className="max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary</SelectItem>
                    <SelectItem value="light">Light Activity</SelectItem>
                    <SelectItem value="moderate">Moderate Activity</SelectItem>
                    <SelectItem value="active">Very Active</SelectItem>
                    <SelectItem value="extreme">Extremely Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={handleSaveProfile} className="w-full sm:w-auto">
                Save Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 