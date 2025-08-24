"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";

type Severity = "high" | "medium" | "low";
type MealType = "breakfast" | "lunch" | "dinner" | "snack";
type DietaryPreference = "vegetarian" | "vegan" | "non-vegetarian" | "gluten-free" | "dairy-free";

type MealSuggestion = {
  id: string;
  name: string;
  carbs: number; // grams per serving
  protein: number; // grams per serving
  fat: number; // grams per serving
  calories: number; // calories per serving
  fiber: number; // grams per serving
  category: MealType;
  dietaryTags: DietaryPreference[];
  prepTime: number; // minutes
  difficulty: "easy" | "medium" | "hard";
  ingredients: string[];
  instructions: string[];
  glycemicIndex: "low" | "medium" | "high";
};

type MealPlan = {
  id: string;
  date: string;
  meals: {
    breakfast?: MealSuggestion;
    lunch?: MealSuggestion;
    dinner?: MealSuggestion;
    snacks?: MealSuggestion[];
  };
  totalCarbs: number;
  totalCalories: number;
  notes?: string;
};

type MealGroup = {
  title: string; // Breakfast/Lunch/Dinner
  items: MealSuggestion[];
};

function generateMealPlan(age: number, severity: Severity, dietaryPreferences: DietaryPreference[] = []): MealGroup[] {
  const clampAge = Number.isFinite(age) ? Math.max(1, Math.min(120, Math.floor(age))) : 30;
  const baseBySeverity: Record<Severity, { min: number; max: number }> = {
    high: { min: 25, max: 40 },
    medium: { min: 35, max: 50 },
    low: { min: 45, max: 60 },
  };

  const base = baseBySeverity[severity];
  const ageAdjustment = clampAge >= 60 ? -5 : clampAge <= 18 ? 5 : 0;
  const targetMin = Math.max(15, base.min + ageAdjustment);
  const targetMax = Math.max(targetMin + 5, base.max + ageAdjustment);

  const choose = (options: MealSuggestion[]): MealSuggestion[] => {
    let filtered = options.filter((o) => o.carbs >= targetMin && o.carbs <= targetMax);
    
    // Filter by dietary preferences
    if (dietaryPreferences.length > 0) {
      filtered = filtered.filter(meal => 
        dietaryPreferences.some(pref => meal.dietaryTags.includes(pref))
      );
    }
    
    return filtered.slice(0, 3);
  };

  const breakfastOptions: MealSuggestion[] = [
    {
      id: "breakfast-1",
      name: "Oats with chia + boiled egg",
      carbs: 35,
      protein: 12,
      fat: 8,
      calories: 280,
      fiber: 6,
      category: "breakfast",
      dietaryTags: ["non-vegetarian"],
      prepTime: 15,
      difficulty: "easy",
      ingredients: ["Oats", "Chia seeds", "Egg", "Milk", "Honey"],
      instructions: ["Boil water and cook oats", "Add chia seeds", "Boil egg separately", "Serve with honey"],
      glycemicIndex: "low"
    },
    {
      id: "breakfast-2",
      name: "Vegetable upma (rava)",
      carbs: 40,
      protein: 8,
      fat: 6,
      calories: 240,
      fiber: 4,
      category: "breakfast",
      dietaryTags: ["vegetarian"],
      prepTime: 20,
      difficulty: "medium",
      ingredients: ["Semolina", "Vegetables", "Oil", "Spices"],
      instructions: ["Roast semolina", "Sauté vegetables", "Add water and cook", "Season with spices"],
      glycemicIndex: "medium"
    },
    {
      id: "breakfast-3",
      name: "Besan chilla + curd",
      carbs: 30,
      protein: 15,
      fat: 5,
      calories: 220,
      fiber: 3,
      category: "breakfast",
      dietaryTags: ["vegetarian", "gluten-free"],
      prepTime: 25,
      difficulty: "easy",
      ingredients: ["Besan flour", "Onion", "Tomato", "Curd", "Spices"],
      instructions: ["Mix besan with water", "Add vegetables", "Make thin pancakes", "Serve with curd"],
      glycemicIndex: "low"
    },
    {
      id: "breakfast-4",
      name: "Idli (2) + sambar",
      carbs: 45,
      protein: 10,
      fat: 2,
      calories: 250,
      fiber: 5,
      category: "breakfast",
      dietaryTags: ["vegetarian"],
      prepTime: 30,
      difficulty: "medium",
      ingredients: ["Idli batter", "Sambar", "Coconut chutney"],
      instructions: ["Steam idli batter", "Prepare sambar", "Serve with chutney"],
      glycemicIndex: "medium"
    },
    {
      id: "breakfast-5",
      name: "Dosa (small) + paneer bhurji",
      carbs: 50,
      protein: 18,
      fat: 12,
      calories: 380,
      fiber: 4,
      category: "breakfast",
      dietaryTags: ["vegetarian"],
      prepTime: 35,
      difficulty: "hard",
      ingredients: ["Dosa batter", "Paneer", "Vegetables", "Spices"],
      instructions: ["Prepare dosa batter", "Make paneer bhurji", "Cook dosa", "Fill with bhurji"],
      glycemicIndex: "medium"
    }
  ];

  const lunchOptions: MealSuggestion[] = [
    {
      id: "lunch-1",
      name: "2 phulka roti + dal + salad",
      carbs: 45,
      protein: 12,
      fat: 4,
      calories: 280,
      fiber: 8,
      category: "lunch",
      dietaryTags: ["vegetarian"],
      prepTime: 30,
      difficulty: "medium",
      ingredients: ["Whole wheat flour", "Lentils", "Vegetables", "Spices"],
      instructions: ["Make roti dough", "Cook dal", "Prepare salad", "Serve together"],
      glycemicIndex: "low"
    },
    {
      id: "lunch-2",
      name: "Brown rice (1 cup) + rajma",
      carbs: 50,
      protein: 15,
      fat: 3,
      calories: 320,
      fiber: 10,
      category: "lunch",
      dietaryTags: ["vegetarian"],
      prepTime: 45,
      difficulty: "medium",
      ingredients: ["Brown rice", "Kidney beans", "Onion", "Tomato", "Spices"],
      instructions: ["Cook brown rice", "Prepare rajma curry", "Serve together"],
      glycemicIndex: "low"
    },
    {
      id: "lunch-3",
      name: "Quinoa bowl + veggies + tofu",
      carbs: 40,
      protein: 20,
      fat: 8,
      calories: 300,
      fiber: 6,
      category: "lunch",
      dietaryTags: ["vegan", "gluten-free"],
      prepTime: 25,
      difficulty: "easy",
      ingredients: ["Quinoa", "Tofu", "Mixed vegetables", "Olive oil"],
      instructions: ["Cook quinoa", "Sauté tofu and vegetables", "Combine in bowl"],
      glycemicIndex: "low"
    },
    {
      id: "lunch-4",
      name: "Grilled chicken + sautéed veggies",
      carbs: 25,
      protein: 35,
      fat: 12,
      calories: 380,
      fiber: 6,
      category: "lunch",
      dietaryTags: ["non-vegetarian"],
      prepTime: 30,
      difficulty: "medium",
      ingredients: ["Chicken breast", "Mixed vegetables", "Olive oil", "Herbs"],
      instructions: ["Marinate chicken", "Grill chicken", "Sauté vegetables", "Serve together"],
      glycemicIndex: "low"
    },
    {
      id: "lunch-5",
      name: "Curd rice (3/4 cup) + veg",
      carbs: 35,
      protein: 8,
      fat: 6,
      calories: 240,
      fiber: 3,
      category: "lunch",
      dietaryTags: ["vegetarian"],
      prepTime: 20,
      difficulty: "easy",
      ingredients: ["Rice", "Curd", "Vegetables", "Tempering"],
      instructions: ["Cook rice", "Mix with curd", "Add vegetables", "Add tempering"],
      glycemicIndex: "medium"
    }
  ];

  const dinnerOptions: MealSuggestion[] = [
    {
      id: "dinner-1",
      name: "Palak paneer + mixed salad",
      carbs: 25,
      protein: 18,
      fat: 15,
      calories: 320,
      fiber: 8,
      category: "dinner",
      dietaryTags: ["vegetarian"],
      prepTime: 35,
      difficulty: "medium",
      ingredients: ["Spinach", "Paneer", "Onion", "Tomato", "Spices"],
      instructions: ["Blanch spinach", "Prepare paneer", "Make gravy", "Serve with salad"],
      glycemicIndex: "low"
    },
    {
      id: "dinner-2",
      name: "Moong dal khichdi (light)",
      carbs: 40,
      protein: 12,
      fat: 4,
      calories: 260,
      fiber: 6,
      category: "dinner",
      dietaryTags: ["vegetarian", "gluten-free"],
      prepTime: 30,
      difficulty: "easy",
      ingredients: ["Moong dal", "Rice", "Vegetables", "Ghee"],
      instructions: ["Wash dal and rice", "Cook together", "Add vegetables", "Season with ghee"],
      glycemicIndex: "medium"
    },
    {
      id: "dinner-3",
      name: "2 millet rotis + veg curry",
      carbs: 45,
      protein: 10,
      fat: 6,
      calories: 280,
      fiber: 7,
      category: "dinner",
      dietaryTags: ["vegetarian", "gluten-free"],
      prepTime: 40,
      difficulty: "medium",
      ingredients: ["Millet flour", "Vegetables", "Spices", "Oil"],
      instructions: ["Make roti dough", "Prepare curry", "Cook rotis", "Serve together"],
      glycemicIndex: "low"
    },
    {
      id: "dinner-4",
      name: "Egg scramble + stir fry veggies",
      carbs: 20,
      protein: 22,
      fat: 18,
      calories: 320,
      fiber: 5,
      category: "dinner",
      dietaryTags: ["non-vegetarian"],
      prepTime: 20,
      difficulty: "easy",
      ingredients: ["Eggs", "Mixed vegetables", "Oil", "Spices"],
      instructions: ["Scramble eggs", "Stir fry vegetables", "Combine and serve"],
      glycemicIndex: "low"
    },
    {
      id: "dinner-5",
      name: "Fish curry + salad",
      carbs: 25,
      protein: 28,
      fat: 12,
      calories: 340,
      fiber: 4,
      category: "dinner",
      dietaryTags: ["non-vegetarian"],
      prepTime: 35,
      difficulty: "medium",
      ingredients: ["Fish", "Onion", "Tomato", "Coconut", "Spices"],
      instructions: ["Marinate fish", "Prepare curry", "Make salad", "Serve together"],
      glycemicIndex: "low"
    }
  ];

  return [
    { title: "Breakfast", items: choose(breakfastOptions) },
    { title: "Lunch", items: choose(lunchOptions) },
    { title: "Dinner", items: choose(dinnerOptions) },
  ];
}

export default function MealToolPage() {
  const [age, setAge] = useState<number>(30);
  const [severity, setSeverity] = useState<Severity>("medium");
  const [plan, setPlan] = useState<MealGroup[] | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<MealSuggestion | null>(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [dietaryPreferences, setDietaryPreferences] = useState<DietaryPreference[]>([]);
  const [savedMeals, setSavedMeals] = useState<MealPlan[]>([]);
  const [showSavedPlans, setShowSavedPlans] = useState(false);
  const [showNutritionalInfo, setShowNutritionalInfo] = useState(false);

  const idCounter = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const canGenerate = useMemo(() => age > 0, [age]);

  const dietaryOptions = [
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "non-vegetarian", label: "Non-Vegetarian" },
    { value: "gluten-free", label: "Gluten-Free" },
    { value: "dairy-free", label: "Dairy-Free" },
  ];

  const toggleDietaryPreference = (pref: DietaryPreference) => {
    setDietaryPreferences(prev => 
      prev.includes(pref) 
        ? prev.filter(p => p !== pref)
        : [...prev, pref]
    );
  };

  const saveMealPlan = () => {
    if (!plan) return;
    
    const mealPlan: MealPlan = {
      id: `plan-${++idCounter.current}`,
      date: new Date().toLocaleDateString(),
      meals: {
        breakfast: plan[0]?.items[0],
        lunch: plan[1]?.items[0],
        dinner: plan[2]?.items[0],
      },
      totalCarbs: plan.reduce((sum, group) => 
        sum + group.items.reduce((groupSum, meal) => groupSum + meal.carbs, 0), 0
      ),
      totalCalories: plan.reduce((sum, group) => 
        sum + group.items.reduce((groupSum, meal) => groupSum + meal.calories, 0), 0
      ),
    };
    
    setSavedMeals(prev => [mealPlan, ...prev]);
  };

  const resetSavedPlans = () => {
    setSavedMeals([]);
    setShowSavedPlans(false);
  };

  const getGlycemicIndexColor = (gi: string) => {
    switch (gi) {
      case "low": return "text-green-600";
      case "medium": return "text-yellow-600";
      case "high": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-600";
      case "medium": return "text-yellow-600";
      case "hard": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  if (!mounted) {
    return (
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">AI Meal Plan</span>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Meal Planner</h1>
        </div>
        <p className="mt-2 text-sm text-foreground/70 max-w-xl">Enter age and choose your current glucose level category. Plans are suggestions only; consult a clinician for personalized guidance.</p>
        <div className="mt-5 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="age" className="text-sm text-foreground/70">Age</label>
              <input
                id="age"
                type="number"
                min={1}
                placeholder="e.g., 30"
                value={30}
                disabled
                className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 opacity-50"
              />
            </div>
            <div className="grid gap-2">
              <span className="text-sm text-foreground/70">Diabetes ratio</span>
              <div className="inline-flex rounded-xl border border-black/[.08] dark:border-white/[.12] overflow-hidden">
                <button type="button" disabled className="px-4 py-2 text-sm font-medium opacity-50">High
                  <span className="ml-1 text-xs text-foreground/70">(&gt;230)</span>
                </button>
                <button type="button" disabled className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground opacity-50">Medium
                  <span className="ml-1 text-xs text-foreground/70">(&gt;200)</span>
                </button>
                <button type="button" disabled className="px-4 py-2 text-sm font-medium opacity-50">Low
                  <span className="ml-1 text-xs text-foreground/70">(&gt;180)</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium w-fit opacity-50"
              disabled
            >
              Get AI meal plan
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      {/* Enhanced Header */}
      <div className="text-center mb-8">
                 <div className="flex items-center justify-center gap-2 mb-4">
           <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm font-medium shadow-lg">
             🍽️ AI Meal Plan
           </span>
           <span className="inline-flex items-center rounded-full bg-green-500/10 text-green-600 px-3 py-1 text-xs font-medium">
             🎯 Personalized
           </span>
         </div>
                 <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-green-600 mb-4">
           Smart Meal Planner
         </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Create personalized meal plans with detailed nutritional information, recipes, and dietary preferences tailored to your diabetes management needs.
        </p>
        
        {/* Decorative Elements */}
        <div className="mt-6 flex justify-center items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>

      {/* Enhanced Input Form */}
      <div className="mt-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl border border-green-200/50 dark:border-green-800/30 p-8 shadow-xl">
          <div className="text-center mb-6">
                         <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Personalize Your Plan</h2>
                         <p className="text-black dark:text-white">Tell us about yourself to get the perfect meal recommendations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label htmlFor="age" className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">1</span>
                Age
              </label>
                             <input
                 id="age"
                 type="number"
                 min={1}
                 placeholder="e.g., 30"
                 value={age}
                 onChange={(e) => {
                   const v = parseInt(e.target.value || "0");
                   setAge(Number.isFinite(v) ? v : 0);
                 }}
                 className="w-full rounded-2xl border-2 border-green-200 dark:border-green-800 bg-white dark:bg-gray-800 px-4 h-12 outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800/30 focus:border-green-400 dark:focus:border-green-600 transition-all duration-200 text-center text-lg font-medium text-gray-900 dark:text-white"
               />
            </div>
            
                         <div className="space-y-3">
               <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                 <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">2</span>
                 Glucose Level
               </label>
                             <div className="inline-flex rounded-2xl border-2 border-green-200 dark:border-green-800 overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                 <button 
                   type="button" 
                   onClick={() => setSeverity("high")} 
                   className={`px-4 py-3 text-sm font-medium transition-all duration-200 ${
                     severity === "high" 
                       ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg" 
                       : "hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300"
                   }`}
                 >
                   High
                   <span className="ml-1 text-xs opacity-80">(&gt;230)</span>
                 </button>
                 <button 
                   type="button" 
                   onClick={() => setSeverity("medium")} 
                   className={`px-4 py-3 text-sm font-medium transition-all duration-200 ${
                     severity === "medium" 
                       ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg" 
                       : "hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300"
                   }`}
                 >
                   Medium
                   <span className="ml-1 text-xs opacity-80">(&gt;200)</span>
                 </button>
                 <button 
                   type="button" 
                   onClick={() => setSeverity("low")} 
                   className={`px-4 py-3 text-sm font-medium transition-all duration-200 ${
                     severity === "low" 
                       ? "bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-lg" 
                       : "hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300"
                   }`}
                 >
                   Low
                   <span className="ml-1 text-xs opacity-80">(&gt;180)</span>
                 </button>
               </div>
            </div>
            
                         <div className="space-y-3">
               <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                 <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">3</span>
                 Dietary Preferences
               </label>
               <div className="flex gap-2 flex-wrap">
                 {dietaryOptions.map((option) => (
                   <button
                     key={option.value}
                     onClick={() => toggleDietaryPreference(option.value as DietaryPreference)}
                     className={`px-3 py-2 text-xs font-medium rounded-xl border-2 transition-all duration-200 ${
                       dietaryPreferences.includes(option.value as DietaryPreference)
                         ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-500 shadow-lg"
                         : "border-green-200 dark:border-green-800 bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-300"
                     }`}
                   >
                     {option.label}
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="group relative px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white"
            disabled={!canGenerate}
            onClick={() => setPlan(generateMealPlan(age, severity, dietaryPreferences))}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              Generate Meal Plan
              <span className="text-lg">✨</span>
            </span>
          </button>
          
          {plan && (
            <>
              <button 
                className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" 
                onClick={() => setPlan(null)}
              >
                🔄 Reset
              </button>
                             <button 
                 className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" 
                 onClick={saveMealPlan}
               >
                 💾 Save Plan
               </button>
            </>
          )}
          
                     {savedMeals.length > 0 && (
             <button 
               className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" 
               onClick={() => setShowSavedPlans(!showSavedPlans)}
             >
               {showSavedPlans ? "👁️ Hide Saved" : "📚 Saved Plans"}
             </button>
           )}
        </div>
      </div>

             {/* Saved Meal Plans */}
       {showSavedPlans && savedMeals.length > 0 && (
         <div className="mt-12">
           <div className="text-center mb-8">
             <div className="flex items-center justify-between mb-4">
               <div className="flex-1"></div>
               <div className="flex-1">
                 <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Your Saved Plans</h2>
                 <p className="text-gray-600 dark:text-gray-400">Access your previously generated meal plans</p>
               </div>
               <div className="flex-1 flex justify-end">
                 <button
                   onClick={resetSavedPlans}
                   className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                   title="Clear all saved plans"
                 >
                   🗑️ Clear All
                 </button>
               </div>
             </div>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedMeals.map((mealPlan) => (
              <div key={mealPlan.id} className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      📅
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{mealPlan.date}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {mealPlan.totalCarbs}g carbs
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {mealPlan.totalCalories} cal
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                                     {mealPlan.meals.breakfast && (
                     <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                       <span className="text-green-600 text-lg">🌅</span>
                       <div className="flex-1">
                         <div className="text-xs font-semibold text-green-700 dark:text-green-300">Breakfast</div>
                         <div className="text-sm text-gray-700 dark:text-gray-300">{mealPlan.meals.breakfast.name}</div>
                       </div>
                     </div>
                   )}
                   {mealPlan.meals.lunch && (
                     <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                       <span className="text-green-600 text-lg">☀️</span>
                       <div className="flex-1">
                         <div className="text-xs font-semibold text-green-700 dark:text-green-300">Lunch</div>
                         <div className="text-sm text-gray-700 dark:text-gray-300">{mealPlan.meals.lunch.name}</div>
                       </div>
                     </div>
                   )}
                   {mealPlan.meals.dinner && (
                     <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                       <span className="text-green-600 text-lg">🌙</span>
                       <div className="flex-1">
                         <div className="text-xs font-semibold text-green-700 dark:text-green-300">Dinner</div>
                         <div className="text-sm text-gray-700 dark:text-gray-300">{mealPlan.meals.dinner.name}</div>
                       </div>
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Meal Plan Display */}
      {plan && (
        <div className="mt-12">
          <div className="text-center mb-8">
                         <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Your Personalized Meal Plan</h2>
            <p className="text-gray-600 dark:text-gray-400">Tailored to your glucose levels and dietary preferences</p>
            
                         <div className="flex items-center justify-center gap-4 mt-6">
               <button
                 onClick={() => setShowNutritionalInfo(!showNutritionalInfo)}
                 className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
               >
                 {showNutritionalInfo ? "🔽 Hide Nutrition" : "📊 Show Nutrition"}
               </button>
             </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plan.map((group, index) => (
              <div key={group.title} className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl border-2 border-gray-200 dark:border-gray-700 p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                 <div className="flex items-center gap-3 mb-6">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg ${
                     index === 0 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                     index === 1 ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                     'bg-gradient-to-r from-green-700 to-emerald-700'
                   }`}>
                     {index === 0 ? '🌅' : index === 1 ? '☀️' : '🌙'}
                   </div>
                  <div>
                                         <h2 className="text-xl font-bold text-green-600 dark:text-green-400">{group.title}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {group.items.length} delicious options
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {group.items.map((meal) => (
                    <li key={meal.id} className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 p-4 hover:border-green-300 dark:hover:border-green-600 transition-all duration-200">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm leading-tight">{meal.name}</h3>
                        <div className="flex gap-1 flex-wrap">
                          {meal.dietaryTags.map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {showNutritionalInfo ? (
                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Carbs:</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">{meal.carbs}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Protein:</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">{meal.protein}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Fat:</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">{meal.fat}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Calories:</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">{meal.calories}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Fiber:</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">{meal.fiber}g</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Prep:</span>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">{meal.prepTime}m</span>
                          </div>
                                                     <div className="flex justify-between">
                             <span className="text-gray-500">Difficulty:</span>
                             <span className="font-semibold text-green-600">{meal.difficulty}</span>
                           </div>
                           <div className="flex justify-between">
                             <span className="text-gray-500">GI:</span>
                             <span className="font-semibold text-green-600">{meal.glycemicIndex}</span>
                           </div>
                        </div>
                      ) : (
                        <div className="flex justify-between text-xs text-gray-500 mb-3">
                          <span>{meal.carbs}g carbs • {meal.protein}g protein</span>
                          <span>{meal.prepTime}m • {meal.difficulty}</span>
                        </div>
                      )}
                      
                      <button
                        onClick={() => {
                          setSelectedMeal(meal);
                          setShowRecipe(true);
                        }}
                        className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        👨‍🍳 View Recipe
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    🎯 Targets ~{severity === "high" ? "25–40" : severity === "medium" ? "35–50" : "45–60"} g carbs/meal, adjusted by age.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recipe Modal */}
      {showRecipe && selectedMeal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gray-200 dark:border-gray-700">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                    👨‍🍳
                  </div>
                  <div>
                                         <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedMeal.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">Complete recipe with nutritional details</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowRecipe(false)}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  title="Close recipe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Nutrition & Details */}
                <div className="space-y-6">
                                     {/* Nutritional Information */}
                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
                                           <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                        📊 Nutritional Information
                      </h3>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedMeal.calories}</div>
                         <div className="text-xs text-gray-500">Calories</div>
                       </div>
                       <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedMeal.carbs}g</div>
                         <div className="text-xs text-gray-500">Carbs</div>
                       </div>
                       <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedMeal.protein}g</div>
                         <div className="text-xs text-gray-500">Protein</div>
                       </div>
                       <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl">
                         <div className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedMeal.fat}g</div>
                         <div className="text-xs text-gray-500">Fat</div>
                       </div>
                     </div>
                     <div className="mt-4 text-center">
                       <div className="text-lg font-bold text-green-600 dark:text-green-400">{selectedMeal.fiber}g</div>
                       <div className="text-xs text-gray-500">Fiber</div>
                     </div>
                   </div>
                   
                   {/* Details */}
                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
                                         <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                       ⚙️ Details
                     </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl">
                        <span className="text-gray-600 dark:text-gray-400">Prep Time</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{selectedMeal.prepTime} minutes</span>
                      </div>
                                             <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl">
                         <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                         <span className="font-semibold text-green-600">{selectedMeal.difficulty}</span>
                       </div>
                       <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl">
                         <span className="text-gray-600 dark:text-gray-400">Glycemic Index</span>
                         <span className="font-semibold text-green-600">{selectedMeal.glycemicIndex}</span>
                       </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Ingredients & Instructions */}
                <div className="space-y-6">
                                     {/* Ingredients */}
                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
                                           <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                        🛒 Ingredients
                      </h3>
                     <ul className="space-y-3">
                       {selectedMeal.ingredients.map((ingredient, index) => (
                         <li key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl">
                           <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                             {index + 1}
                           </div>
                           <span className="text-gray-700 dark:text-gray-300">{ingredient}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                   
                   {/* Instructions */}
                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6">
                                           <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                        📝 Instructions
                      </h3>
                     <ol className="space-y-3">
                       {selectedMeal.instructions.map((instruction, index) => (
                         <li key={index} className="flex gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl">
                           <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                             {index + 1}
                           </div>
                           <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{instruction}</span>
                         </li>
                       ))}
                     </ol>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


