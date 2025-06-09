// Utility functions for fitness tracking calculations

/**
 * Calculate BMI from weight and height
 */
export function calculateBMI(weightLbs: number, heightInches: number): number {
  return (weightLbs / (heightInches * heightInches)) * 703
}

/**
 * Convert weight between units
 */
export function convertWeight(weight: number, from: 'lbs' | 'kg', to: 'lbs' | 'kg'): number {
  if (from === to) return weight
  if (from === 'lbs' && to === 'kg') return weight * 0.453592
  if (from === 'kg' && to === 'lbs') return weight * 2.20462
  return weight
}

/**
 * Convert liquid volume between units
 */
export function convertLiquid(volume: number, from: 'L' | 'fl oz' | 'cups', to: 'L' | 'fl oz' | 'cups'): number {
  if (from === to) return volume
  
  // Convert to liters first
  let liters = volume
  if (from === 'fl oz') liters = volume * 0.0295735
  if (from === 'cups') liters = volume * 0.236588
  
  // Convert from liters to target unit
  if (to === 'L') return liters
  if (to === 'fl oz') return liters * 33.814
  if (to === 'cups') return liters * 4.22675
  
  return volume
}

/**
 * Calculate estimated daily calorie needs
 */
export function calculateTDEE(
  weightLbs: number, 
  heightInches: number, 
  age: number, 
  gender: 'male' | 'female',
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'extreme'
): number {
  // Calculate BMR using Mifflin-St Jeor Equation
  const weightKg = convertWeight(weightLbs, 'lbs', 'kg')
  const heightCm = heightInches * 2.54
  
  let bmr: number
  if (gender === 'male') {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161
  }
  
  // Apply activity multiplier
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    extreme: 1.9
  }
  
  return bmr * activityMultipliers[activityLevel]
}

/**
 * Calculate protein needs based on weight and activity
 */
export function calculateProteinNeeds(weightLbs: number, activityLevel: string): number {
  const weightKg = convertWeight(weightLbs, 'lbs', 'kg')
  
  // Protein per kg based on activity level
  const proteinMultipliers: { [key: string]: number } = {
    sedentary: 0.8,
    light: 1.0,
    moderate: 1.2,
    active: 1.6,
    extreme: 2.0
  }
  
  const multiplier = proteinMultipliers[activityLevel] || 1.2
  return weightKg * multiplier
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  })
}

/**
 * Calculate days between dates
 */
export function daysBetween(date1: string | Date, date2: string | Date): number {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffTime = Math.abs(d2.getTime() - d1.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

/**
 * Generate injection schedule dates
 */
export function generateInjectionSchedule(
  startDate: string, 
  frequencyDays: number, 
  totalWeeks: number
): string[] {
  const dates: string[] = []
  const start = new Date(startDate)
  const totalDays = totalWeeks * 7
  
  for (let day = 0; day <= totalDays; day += frequencyDays) {
    const injectionDate = new Date(start)
    injectionDate.setDate(start.getDate() + day)
    dates.push(injectionDate.toISOString().split('T')[0])
  }
  
  return dates
}

/**
 * Calculate macro percentages
 */
export function calculateMacroPercentages(protein: number, carbs: number, fat: number) {
  const proteinCals = protein * 4
  const carbsCals = carbs * 4
  const fatCals = fat * 9
  const totalCals = proteinCals + carbsCals + fatCals
  
  if (totalCals === 0) return { protein: 0, carbs: 0, fat: 0 }
  
  return {
    protein: Math.round((proteinCals / totalCals) * 100),
    carbs: Math.round((carbsCals / totalCals) * 100),
    fat: Math.round((fatCals / totalCals) * 100)
  }
}

/**
 * Validate injection site rotation
 */
export function getNextInjectionSite(lastSites: string[]): string {
  const sites = ['glute', 'quad', 'delt', 'ventroglute']
  const recentSites = lastSites.slice(-3) // Last 3 injections
  
  // Find a site that wasn't used recently
  for (const site of sites) {
    if (!recentSites.includes(site)) {
      return site
    }
  }
  
  // If all sites were used recently, return the least recent
  return sites.find(site => !recentSites.slice(-2).includes(site)) || sites[0]
}

/**
 * Calculate weekly averages for progress tracking
 */
export function calculateWeeklyAverages<T extends Record<string, number>>(
  data: (T & { date: string })[], 
  keys: (keyof T)[]
): Record<keyof T, number> {
  if (data.length === 0) return {} as Record<keyof T, number>
  
  const result = {} as Record<keyof T, number>
  
  keys.forEach(key => {
    const sum = data.reduce((acc, item) => acc + (item[key] as number), 0)
    result[key] = sum / data.length
  })
  
  return result
} 