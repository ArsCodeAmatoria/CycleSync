// Core data types for CycleSync fitness tracker

export interface MacroEntry {
  id?: string
  date: string
  protein: number
  carbs: number
  fiber: number
  calories: number
  water: number
  userId?: string
}

export interface WorkoutEntry {
  id?: string
  date: string
  exercise: string
  sets: number
  reps: number
  weight: number
  muscleGroup: 'chest' | 'back' | 'shoulders' | 'arms' | 'legs' | 'core'
  notes?: string
  userId?: string
}

export interface InjectionEntry {
  id?: string
  date: string
  compound: 'testosterone' | 'deca' | 'other'
  dose: number
  location: 'glute' | 'quad' | 'delt' | 'ventroglute'
  notes?: string
  userId?: string
}

export interface WeightEntry {
  id?: string
  date: string
  weight: number
  bodyFat?: number
  userId?: string
}

export interface UserGoals {
  protein: number
  carbs: number
  fiber: number
  water: number
  targetWeight: number
  dailyCalories?: number
}

export interface UserSettings {
  weightUnit: 'lbs' | 'kg'
  liquidUnit: 'L' | 'fl oz' | 'cups'
  injectionFrequency: number // days
  cycleDuration: number // weeks
  remindersEnabled: boolean
}

export interface UserProfile {
  id: string
  email?: string
  age?: number
  height?: string
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'extreme'
  goals: UserGoals
  settings: UserSettings
  createdAt: string
  updatedAt: string
}

export interface CycleData {
  id?: string
  startDate: string
  endDate: string
  currentWeek: number
  totalWeeks: number
  compounds: Array<{
    name: string
    dose: number
    frequency: string
  }>
  isActive: boolean
  userId?: string
}

// UI Component Props
export interface MacroProgressProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  current: number
  target: number
  unit: string
  color?: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form data types
export interface MealFormData {
  name: string
  protein: string
  carbs: string
  fiber: string
  calories: string
}

export interface WorkoutFormData {
  exercise: string
  sets: string
  reps: string
  weight: string
  muscleGroup: string
}

export interface InjectionFormData {
  compound: string
  dose: string
  location: string
} 