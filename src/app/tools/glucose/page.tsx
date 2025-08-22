"use client";

import { useState, useRef, useMemo } from "react";
import Image from "next/image";

type LogEntry = {
  id: string;
  value: number;
  recordedAt: string;
  meal?: "before" | "after" | "fasting";
  notes?: string;
};

type TargetRange = {
  min: number;
  max: number;
  label: string;
  color: string;
};

export default function GlucoseToolPage() {
  const [value, setValue] = useState(95);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [meal, setMeal] = useState<"before" | "after" | "fasting">("fasting");
  const [notes, setNotes] = useState("");
  const [showStats, setShowStats] = useState(false);
  const idCounter = useRef(0);

  // Target ranges for different meal times
  const targetRanges: TargetRange[] = [
    { min: 70, max: 100, label: "Normal (Fasting)", color: "text-green-600" },
    { min: 80, max: 130, label: "Before Meal", color: "text-blue-600" },
    { min: 80, max: 180, label: "After Meal (2hr)", color: "text-orange-600" },
  ];

  const getTargetRange = (mealType: string) => {
    switch (mealType) {
      case "before": return targetRanges[1];
      case "after": return targetRanges[2];
      default: return targetRanges[0];
    }
  };

  const getStatusColor = (value: number, mealType: string) => {
    const range = getTargetRange(mealType);
    if (value < range.min) return "text-red-600";
    if (value > range.max) return "text-red-600";
    return "text-green-600";
  };

  const addEntry = () => {
    if (value <= 0) return;
    const entry: LogEntry = {
      id: `glucose-${++idCounter.current}`,
      value,
      recordedAt: new Date().toLocaleString(),
      meal,
      notes: notes.trim() || undefined,
    };
    setLog((existing) => [entry, ...existing]);
    setValue(95);
    setNotes("");
  };

  const removeEntry = (id: string) => {
    setLog((existing) => existing.filter((e) => e.id !== id));
  };

  // Calculate statistics
  const stats = useMemo(() => {
    if (log.length === 0) return null;
    
    const values = log.map(entry => entry.value);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    
    // Count readings by status
    const inRange = log.filter(entry => {
      const range = getTargetRange(entry.meal || "fasting");
      return entry.value >= range.min && entry.value <= range.max;
    }).length;
    
    const high = log.filter(entry => {
      const range = getTargetRange(entry.meal || "fasting");
      return entry.value > range.max;
    }).length;
    
    const low = log.filter(entry => {
      const range = getTargetRange(entry.meal || "fasting");
      return entry.value < range.min;
    }).length;

    return { avg: Math.round(avg), min, max, inRange, high, low, total: log.length };
  }, [log]);

  // Generate simple chart data
  const chartData = useMemo(() => {
    return log.slice(0, 10).reverse().map((entry, index) => ({
      value: entry.value,
      index,
      status: getStatusColor(entry.value, entry.meal || "fasting").replace("text-", "").replace("-600", ""),
    }));
  }, [log]);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">Glucose</span>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Glucose Tracker</h1>
      </div>
      <p className="mt-2 text-sm text-foreground/70 max-w-xl">Track your glucose levels with detailed insights and target ranges.</p>

      {/* Enhanced Input Form */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
            <h2 className="text-lg font-semibold mb-4">Add New Reading</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-foreground/70" htmlFor="glucose-input">Glucose value (mg/dL)</label>
                <input 
                  id="glucose-input" 
                  placeholder="e.g., 95" 
                  type="number" 
                  value={value} 
                  onChange={(e) => setValue(parseInt(e.target.value || "0"))} 
                  className="mt-1 w-full rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" 
                />
              </div>

              <div>
                <label className="text-sm text-foreground/70">Reading Type</label>
                <div className="mt-1 flex gap-2">
                  {[
                    { value: "fasting", label: "Fasting" },
                    { value: "before", label: "Before Meal" },
                    { value: "after", label: "After Meal" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setMeal(option.value as "before" | "after" | "fasting")}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        meal === option.value
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-black/[.08] dark:border-white/[.12] hover:bg-foreground/5"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-foreground/70" htmlFor="notes">Notes (optional)</label>
                <textarea
                  id="notes"
                  placeholder="e.g., After breakfast, feeling tired..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  rows={2}
                />
              </div>

              <div className="flex items-center gap-3">
                <button 
                  className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium hover:bg-primary/90" 
                  onClick={addEntry}
                  disabled={value <= 0}
                >
                  Add Reading
                </button>
                {log.length > 0 && (
                  <button 
                    className="rounded-full border border-black/[.12] dark:border-white/[.12] h-11 px-4 text-sm hover:bg-foreground/5" 
                    onClick={() => setLog([])}
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Target Ranges */}
          <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
            <h2 className="text-lg font-semibold mb-4">Target Ranges</h2>
            <div className="space-y-3">
              {targetRanges.map((range) => (
                <div key={range.label} className="flex items-center justify-between">
                  <span className="text-sm">{range.label}</span>
                  <span className={`text-sm font-medium ${range.color}`}>
                    {range.min}-{range.max} mg/dL
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics and Chart */}
        <div className="space-y-4">
          {stats && (
            <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Statistics</h2>
                <button
                  onClick={() => setShowStats(!showStats)}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  {showStats ? "Hide Details" : "Show Details"}
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stats.avg}</div>
                  <div className="text-xs text-foreground/60">Average</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{stats.total}</div>
                  <div className="text-xs text-foreground/60">Total Readings</div>
                </div>
              </div>

              {showStats && (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>In Range</span>
                    <span className="text-green-600 font-medium">{stats.inRange} ({Math.round(stats.inRange/stats.total*100)}%)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>High</span>
                    <span className="text-red-600 font-medium">{stats.high} ({Math.round(stats.high/stats.total*100)}%)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Low</span>
                    <span className="text-red-600 font-medium">{stats.low} ({Math.round(stats.low/stats.total*100)}%)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Range</span>
                    <span className="font-medium">{stats.min} - {stats.max} mg/dL</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Simple Chart */}
          {chartData.length > 0 && (
            <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
              <h2 className="text-lg font-semibold mb-4">Recent Readings</h2>
              <div className="h-32 flex items-end gap-1">
                {chartData.map((point, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className={`w-full rounded-t-sm transition-all ${
                        point.status === "green" ? "bg-green-500" : 
                        point.status === "red" ? "bg-red-500" : "bg-gray-400"
                      }`}
                      style={{ height: `${Math.min((point.value / 300) * 100, 100)}%` }}
                    />
                    <div className="text-xs text-foreground/60 mt-1">{point.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Log Display */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Reading History</h2>
        <div className="space-y-2">
          {log.length === 0 && (
            <div className="rounded-lg border border-dashed border-black/[.06] dark:border-white/[.08] px-6 py-8 text-center text-foreground/60">
              <Image src="/glucose.svg" alt="glucose" width={48} height={48} className="mx-auto mb-3 dark:invert opacity-50" />
              <p>No readings yet. Add your first glucose reading above.</p>
            </div>
          )}
          {log.map((entry) => {
            const range = getTargetRange(entry.meal || "fasting");
            const statusColor = getStatusColor(entry.value, entry.meal || "fasting");
            const isInRange = entry.value >= range.min && entry.value <= range.max;
            
            return (
              <div key={entry.id} className="rounded-lg border border-black/[.06] dark:border-white/[.08] p-4 bg-background/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`text-2xl font-bold ${statusColor}`}>
                      {entry.value}
                    </div>
                    <div className="text-sm text-foreground/60">mg/dL</div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isInRange ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : 
                      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    }`}>
                      {isInRange ? "In Range" : "Out of Range"}
                    </div>
                  </div>
                  <button
                    onClick={() => removeEntry(entry.id)}
                    className="rounded-md p-2 hover:bg-foreground/5 text-foreground/60 hover:text-foreground"
                    title="Remove reading"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-foreground/70">
                  <span>{entry.recordedAt}</span>
                  <span className="capitalize">{entry.meal} reading</span>
                  {entry.notes && (
                    <span className="italic">&ldquo;{entry.notes}&rdquo;</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}


