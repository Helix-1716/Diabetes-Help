"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type HealthReport = {
  id: string;
  name: string;
  uploadedAt: string;
  size: string;
};

type DietRecommendation = {
  meal: string;
  foods: string[];
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  notes: string[];
};

type HealthMetrics = {
  glucose: number;
  hba1c: number;
  cholesterol: number;
  bloodPressure: string;
  weight: number;
  bmi: number;
};

export default function DietAIPlanPage() {
  const [uploadedReports, setUploadedReports] = useState<HealthReport[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dietPlan, setDietPlan] = useState<DietRecommendation[]>([]);
  const [healthMetrics, setHealthMetrics] = useState<HealthMetrics | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const idCounter = useRef(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newReports: HealthReport[] = Array.from(files).map((file) => ({
      id: `report-${++idCounter.current}`,
      name: file.name,
      uploadedAt: new Date().toLocaleString(),
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
    }));

    setUploadedReports((prev) => [...prev, ...newReports]);
  };

  const removeReport = (id: string) => {
    setUploadedReports((prev) => prev.filter((report) => report.id !== id));
  };

  const analyzeReports = async () => {
    if (uploadedReports.length === 0) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Simulated health metrics based on "uploaded" reports
    const simulatedMetrics: HealthMetrics = {
      glucose: 185,
      hba1c: 7.2,
      cholesterol: 220,
      bloodPressure: "140/90",
      weight: 75,
      bmi: 26.8,
    };

    // Simulated personalized diet plan
    const simulatedDietPlan: DietRecommendation[] = [
      {
        meal: "Breakfast",
        foods: ["Oatmeal with berries", "Greek yogurt", "Almonds", "Green tea"],
        calories: 320,
        carbs: 35,
        protein: 18,
        fat: 12,
        notes: ["Low glycemic index", "High fiber content", "Stable energy release"],
      },
      {
        meal: "Morning Snack",
        foods: ["Apple", "Walnuts", "Cinnamon"],
        calories: 180,
        carbs: 22,
        protein: 4,
        fat: 8,
        notes: ["Natural sweetness", "Heart-healthy fats", "Blood sugar control"],
      },
      {
        meal: "Lunch",
        foods: ["Grilled chicken breast", "Quinoa salad", "Mixed vegetables", "Olive oil dressing"],
        calories: 450,
        carbs: 40,
        protein: 35,
        fat: 15,
        notes: ["Lean protein", "Complex carbohydrates", "Anti-inflammatory"],
      },
      {
        meal: "Afternoon Snack",
        foods: ["Hummus", "Carrot sticks", "Whole grain crackers"],
        calories: 200,
        carbs: 25,
        protein: 8,
        fat: 6,
        notes: ["Sustained energy", "Fiber-rich", "Portion controlled"],
      },
      {
        meal: "Dinner",
        foods: ["Salmon fillet", "Brown rice", "Steamed broccoli", "Lemon herb sauce"],
        calories: 480,
        carbs: 45,
        protein: 32,
        fat: 18,
        notes: ["Omega-3 fatty acids", "Complete protein", "Low sodium"],
      },
    ];

    setHealthMetrics(simulatedMetrics);
    setDietPlan(simulatedDietPlan);
    setAnalysisComplete(true);
    setIsAnalyzing(false);
  };

  const resetAnalysis = () => {
    setAnalysisComplete(false);
    setDietPlan([]);
    setHealthMetrics(null);
    setUploadedReports([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">AI Diet Plan</span>
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
          Personalized <span className="text-gradient-animation">Diet Plan</span>
      </h1>
      </div>
      
      <p className="mt-3 text-base sm:text-lg text-foreground/80 max-w-3xl">
        Upload your health reports and get a personalized diet plan tailored to your specific health metrics and diabetes management goals.
      </p>

      {/* Upload Section */}
      <div className="mt-8 rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-gradient-to-br from-primary/5 to-sky-300/10">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/file.svg" alt="upload" width={20} height={20} className="dark:invert" />
          <h2 className="text-xl font-semibold">Upload Health Reports</h2>
        </div>
        
        <div className="grid gap-4">
          <div className="border-2 border-dashed border-black/[.12] dark:border-white/[.12] rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              aria-label="Upload health reports"
              title="Upload health reports"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Choose Files
            </button>
            <p className="mt-2 text-sm text-foreground/70">Upload prescription, lab reports, or medical documents</p>
          </div>

          {uploadedReports.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Uploaded Reports ({uploadedReports.length})</h3>
              {uploadedReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-3 bg-background/60 rounded-lg border border-black/[.06] dark:border-white/[.08]">
                  <div className="flex items-center gap-3">
                    <Image src="/file.svg" alt="file" width={16} height={16} className="dark:invert" />
                    <div>
                      <p className="font-medium text-sm">{report.name}</p>
                      <p className="text-xs text-foreground/60">{report.size} • {report.uploadedAt}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeReport(report.id)}
                    className="p-1 hover:bg-foreground/10 rounded"
                    title="Remove file"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
              
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={analyzeReports}
                  disabled={isAnalyzing}
                  className="btn-shine rounded-full bg-primary text-primary-foreground px-6 py-2 font-medium hover:bg-primary/90 disabled:opacity-50 flex items-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Image src="/stethoscope.svg" alt="analyze" width={16} height={16} className="dark:invert" />
                      Analyze & Generate Diet Plan
                    </>
                  )}
                </button>
                {analysisComplete && (
                  <button
                    onClick={resetAnalysis}
                    className="rounded-full border border-black/[.12] dark:border-white/[.12] px-4 py-2 text-sm hover:bg-foreground/5"
                  >
                    Start Over
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Health Metrics */}
      {healthMetrics && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Image src="/heart.svg" alt="health" width={20} height={20} className="dark:invert" />
            Health Analysis
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Glucose", value: `${healthMetrics.glucose} mg/dL`, status: healthMetrics.glucose > 180 ? "high" : "normal" },
              { label: "HbA1c", value: `${healthMetrics.hba1c}%`, status: healthMetrics.hba1c > 7 ? "high" : "normal" },
              { label: "Cholesterol", value: `${healthMetrics.cholesterol} mg/dL`, status: healthMetrics.cholesterol > 200 ? "high" : "normal" },
              { label: "Blood Pressure", value: healthMetrics.bloodPressure, status: "normal" },
              { label: "Weight", value: `${healthMetrics.weight} kg`, status: "normal" },
              { label: "BMI", value: healthMetrics.bmi.toFixed(1), status: healthMetrics.bmi > 25 ? "high" : "normal" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-4 bg-background/60">
                <div className="text-sm text-foreground/70">{metric.label}</div>
                <div className={`mt-1 font-semibold ${metric.status === "high" ? "text-red-600" : "text-green-600"}`}>
                  {metric.value}
                </div>
                <div className={`mt-1 text-xs px-2 py-1 rounded-full w-fit ${
                  metric.status === "high" 
                    ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400" 
                    : "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                }`}>
                  {metric.status === "high" ? "Needs attention" : "Normal"}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Diet Plan */}
      {dietPlan.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Image src="/meal.svg" alt="diet" width={20} height={20} className="dark:invert" />
            Your Personalized Diet Plan
          </h2>
          <div className="grid gap-6">
            {dietPlan.map((meal, index) => (
              <div key={meal.meal} className="card-lift rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 hover:bg-primary/5 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{meal.meal}</h3>
                  <div className="text-sm text-foreground/60">
                    {meal.calories} cal • {meal.carbs}g carbs • {meal.protein}g protein • {meal.fat}g fat
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Recommended Foods</h4>
                    <ul className="space-y-1">
                      {meal.foods.map((food, foodIndex) => (
                        <li key={foodIndex} className="flex items-center gap-2 text-sm">
                          <div className="size-1.5 bg-primary rounded-full" />
                          {food}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Health Benefits</h4>
                    <ul className="space-y-1">
                      {meal.notes.map((note, noteIndex) => (
                        <li key={noteIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                          </svg>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
          </div>
        ))}
      </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <Image src="/shield.svg" alt="info" width={20} height={20} className="dark:invert mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100">Important Notes</h4>
                <ul className="mt-2 text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• This plan is based on your uploaded health reports and should be reviewed by your healthcare provider</li>
                  <li>• Monitor your blood glucose levels regularly and adjust portions as needed</li>
                  <li>• Stay hydrated and maintain regular physical activity</li>
                  <li>• Consult your doctor before making significant dietary changes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


