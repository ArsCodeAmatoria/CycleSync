"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Scale, Target } from "lucide-react"

// Mock data for progress tracking
const mockWeightData = [
  { date: "2024-11-01", weight: 180 },
  { date: "2024-11-08", weight: 181.5 },
  { date: "2024-11-15", weight: 183 },
  { date: "2024-11-22", weight: 184.2 },
  { date: "2024-11-29", weight: 185.8 },
  { date: "2024-12-06", weight: 187.1 },
]

const mockMacroData = [
  { date: "2024-12-02", protein: 140, carbs: 220, fiber: 18 },
  { date: "2024-12-03", protein: 155, carbs: 200, fiber: 22 },
  { date: "2024-12-04", protein: 145, carbs: 240, fiber: 16 },
  { date: "2024-12-05", protein: 160, carbs: 190, fiber: 25 },
  { date: "2024-12-06", protein: 135, carbs: 260, fiber: 20 },
  { date: "2024-12-07", protein: 170, carbs: 180, fiber: 28 },
  { date: "2024-12-08", protein: 150, carbs: 225, fiber: 19 },
]

function SimpleChart({ data, dataKey, color = "#3b82f6", unit = "" }: {
  data: any[]
  dataKey: string
  color?: string
  unit?: string
}) {
  const maxValue = Math.max(...data.map(d => d[dataKey]))
  const minValue = Math.min(...data.map(d => d[dataKey]))
  const range = maxValue - minValue || 1

  return (
    <div className="space-y-4">
      <div className="h-32 flex items-end space-x-1">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full rounded-t-sm transition-all hover:opacity-80"
              style={{
                backgroundColor: color,
                height: `${((item[dataKey] - minValue) / range) * 100}%`,
                minHeight: '4px'
              }}
            />
            <div className="text-xs text-muted-foreground mt-1 transform -rotate-45 origin-top-left">
              {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{minValue.toFixed(1)}{unit}</span>
        <span>{maxValue.toFixed(1)}{unit}</span>
      </div>
    </div>
  )
}

export default function ProgressPage() {
  const currentWeight = mockWeightData[mockWeightData.length - 1]?.weight || 0
  const previousWeight = mockWeightData[mockWeightData.length - 2]?.weight || 0
  const weightChange = currentWeight - previousWeight
  const weightTrend = weightChange > 0 ? "gaining" : weightChange < 0 ? "losing" : "maintaining"

  const avgProtein = mockMacroData.reduce((sum, day) => sum + day.protein, 0) / mockMacroData.length
  const avgCarbs = mockMacroData.reduce((sum, day) => sum + day.carbs, 0) / mockMacroData.length
  const avgFiber = mockMacroData.reduce((sum, day) => sum + day.fiber, 0) / mockMacroData.length

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Progress</h1>
        <p className="text-muted-foreground">Track your weight and nutrition trends</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-muted">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Scale className="h-4 w-4" />
              <span>Current Weight</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-foreground">{currentWeight} lbs</div>
              <div className="flex items-center space-x-2">
                {weightChange > 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : weightChange < 0 ? (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                ) : (
                  <Target className="h-4 w-4 text-blue-500" />
                )}
                <span className="text-sm text-muted-foreground">
                  {Math.abs(weightChange).toFixed(1)} lbs ({weightTrend})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Weekly Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Protein</span>
                <Badge variant="outline">{avgProtein.toFixed(0)}g</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Carbs</span>
                <Badge variant="outline">{avgCarbs.toFixed(0)}g</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Fiber</span>
                <Badge variant="outline">{avgFiber.toFixed(0)}g</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Target Weight</span>
                <Badge variant="secondary">190 lbs</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Remaining</span>
                <Badge variant="outline">{(190 - currentWeight).toFixed(1)} lbs</Badge>
              </div>
              <div className="text-xs text-muted-foreground">
                At current rate: ~{Math.ceil((190 - currentWeight) / Math.abs(weightChange || 1))} weeks
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="weight" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="weight">Weight Trend</TabsTrigger>
          <TabsTrigger value="macros">Macro Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="weight">
          <Card className="border-muted">
            <CardHeader>
              <CardTitle>Weight Progress</CardTitle>
              <CardDescription>
                Your weight trend over the past 6 weeks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleChart
                data={mockWeightData}
                dataKey="weight"
                color="#3b82f6"
                unit=" lbs"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="macros">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-muted">
              <CardHeader>
                <CardTitle className="text-lg">Protein</CardTitle>
                <CardDescription>Daily protein intake (g)</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleChart
                  data={mockMacroData}
                  dataKey="protein"
                  color="#10b981"
                  unit="g"
                />
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardHeader>
                <CardTitle className="text-lg">Carbs</CardTitle>
                <CardDescription>Daily carbohydrate intake (g)</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleChart
                  data={mockMacroData}
                  dataKey="carbs"
                  color="#f59e0b"
                  unit="g"
                />
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardHeader>
                <CardTitle className="text-lg">Fiber</CardTitle>
                <CardDescription>Daily fiber intake (g)</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleChart
                  data={mockMacroData}
                  dataKey="fiber"
                  color="#8b5cf6"
                  unit="g"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 