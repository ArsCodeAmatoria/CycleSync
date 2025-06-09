"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Apple, Dumbbell, Syringe, Plus } from "lucide-react"
import { toast } from "sonner"

export default function LogPage() {
  const [mealData, setMealData] = useState({
    name: "",
    protein: "",
    carbs: "",
    fiber: "",
    calories: ""
  })

  const [workoutData, setWorkoutData] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
    muscleGroup: ""
  })

  const [injectionData, setInjectionData] = useState({
    compound: "",
    dose: "",
    location: ""
  })

  const handleMealSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save to your backend
    toast.success("Meal logged successfully!")
    setMealData({ name: "", protein: "", carbs: "", fiber: "", calories: "" })
  }

  const handleWorkoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Workout logged successfully!")
    setWorkoutData({ exercise: "", sets: "", reps: "", weight: "", muscleGroup: "" })
  }

  const handleInjectionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Injection logged successfully!")
    setInjectionData({ compound: "", dose: "", location: "" })
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Log Entry</h1>
        <p className="text-muted-foreground">Track your meals, workouts, and injections</p>
      </div>

      <Tabs defaultValue="meals" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="meals" className="flex items-center space-x-2">
            <Apple className="h-4 w-4" />
            <span>Meals</span>
          </TabsTrigger>
          <TabsTrigger value="workouts" className="flex items-center space-x-2">
            <Dumbbell className="h-4 w-4" />
            <span>Workouts</span>
          </TabsTrigger>
          <TabsTrigger value="injections" className="flex items-center space-x-2">
            <Syringe className="h-4 w-4" />
            <span>Injections</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="meals">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Apple className="h-5 w-5" />
                <span>Log Meal</span>
              </CardTitle>
              <CardDescription>
                Track your nutrition intake for the day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleMealSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meal-name">Meal Name</Label>
                  <Input
                    id="meal-name"
                    placeholder="e.g., Chicken breast with rice"
                    value={mealData.name}
                    onChange={(e) => setMealData({ ...mealData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="protein">Protein (g)</Label>
                    <Input
                      id="protein"
                      type="number"
                      placeholder="0"
                      value={mealData.protein}
                      onChange={(e) => setMealData({ ...mealData, protein: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carbs">Carbs (g)</Label>
                    <Input
                      id="carbs"
                      type="number"
                      placeholder="0"
                      value={mealData.carbs}
                      onChange={(e) => setMealData({ ...mealData, carbs: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fiber">Fiber (g)</Label>
                    <Input
                      id="fiber"
                      type="number"
                      placeholder="0"
                      value={mealData.fiber}
                      onChange={(e) => setMealData({ ...mealData, fiber: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="calories">Calories</Label>
                    <Input
                      id="calories"
                      type="number"
                      placeholder="0"
                      value={mealData.calories}
                      onChange={(e) => setMealData({ ...mealData, calories: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Log Meal
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workouts">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Dumbbell className="h-5 w-5" />
                <span>Log Workout</span>
              </CardTitle>
              <CardDescription>
                Record your training session details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWorkoutSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="exercise">Exercise</Label>
                  <Input
                    id="exercise"
                    placeholder="e.g., Bench Press"
                    value={workoutData.exercise}
                    onChange={(e) => setWorkoutData({ ...workoutData, exercise: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="muscle-group">Muscle Group</Label>
                  <Select onValueChange={(value) => setWorkoutData({ ...workoutData, muscleGroup: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select muscle group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chest">Chest</SelectItem>
                      <SelectItem value="back">Back</SelectItem>
                      <SelectItem value="shoulders">Shoulders</SelectItem>
                      <SelectItem value="arms">Arms</SelectItem>
                      <SelectItem value="legs">Legs</SelectItem>
                      <SelectItem value="core">Core</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sets">Sets</Label>
                    <Input
                      id="sets"
                      type="number"
                      placeholder="0"
                      value={workoutData.sets}
                      onChange={(e) => setWorkoutData({ ...workoutData, sets: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reps">Reps</Label>
                    <Input
                      id="reps"
                      type="number"
                      placeholder="0"
                      value={workoutData.reps}
                      onChange={(e) => setWorkoutData({ ...workoutData, reps: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="0"
                      value={workoutData.weight}
                      onChange={(e) => setWorkoutData({ ...workoutData, weight: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Log Workout
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="injections">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Syringe className="h-5 w-5" />
                <span>Log Injection</span>
              </CardTitle>
              <CardDescription>
                Track your injection schedule and doses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInjectionSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="compound">Compound</Label>
                  <Select onValueChange={(value) => setInjectionData({ ...injectionData, compound: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select compound" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="testosterone">Testosterone</SelectItem>
                      <SelectItem value="deca">Deca (Nandrolone)</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dose">Dose (mg)</Label>
                    <Input
                      id="dose"
                      type="number"
                      placeholder="0"
                      value={injectionData.dose}
                      onChange={(e) => setInjectionData({ ...injectionData, dose: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Injection Site</Label>
                    <Select onValueChange={(value) => setInjectionData({ ...injectionData, location: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select site" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="glute">Glute</SelectItem>
                        <SelectItem value="quad">Quad</SelectItem>
                        <SelectItem value="delt">Deltoid</SelectItem>
                        <SelectItem value="ventroglute">Ventroglute</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Log Injection
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 