"use client";

import { useState, useRef, useMemo } from "react";
import Image from "next/image";

type MedicationType = "tablet" | "injection" | "liquid" | "inhaler" | "other";
type Frequency = "daily" | "twice-daily" | "thrice-daily" | "weekly" | "as-needed";
type DosageUnit = "mg" | "mcg" | "ml" | "units" | "puffs" | "tablets";

type Medication = {
  id: string;
  name: string;
  dosage: number;
  unit: DosageUnit;
  frequency: Frequency;
  times: string[];
  type: MedicationType;
  notes?: string;
  createdAt: string;
  isActive: boolean;
  lastTaken?: string;
  missedDoses: number;
};

type DosageLog = {
  id: string;
  medicationId: string;
  takenAt: string;
  dosage: number;
  unit: DosageUnit;
  notes?: string;
};

export default function MedsToolPage() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [dosageLogs, setDosageLogs] = useState<DosageLog[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showStats, setShowStats] = useState(false);
  
  // Form state
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState(1);
  const [unit, setUnit] = useState<DosageUnit>("mg");
  const [frequency, setFrequency] = useState<Frequency>("daily");
  const [type, setType] = useState<MedicationType>("tablet");
  const [notes, setNotes] = useState("");
  const [selectedTimes, setSelectedTimes] = useState<string[]>(["08:00"]);
  
  const idCounter = useRef(0);
  const logIdCounter = useRef(0);

  const frequencyOptions = [
    { value: "daily", label: "Once Daily", times: 1 },
    { value: "twice-daily", label: "Twice Daily", times: 2 },
    { value: "thrice-daily", label: "Three Times Daily", times: 3 },
    { value: "weekly", label: "Weekly", times: 1 },
    { value: "as-needed", label: "As Needed", times: 1 },
  ];

  const unitOptions = [
    { value: "mg", label: "mg" },
    { value: "mcg", label: "mcg" },
    { value: "ml", label: "ml" },
    { value: "units", label: "units" },
    { value: "puffs", label: "puffs" },
    { value: "tablets", label: "tablets" },
  ];

  const typeOptions = [
    { value: "tablet", label: "Tablet/Capsule", icon: "💊" },
    { value: "injection", label: "Injection", icon: "💉" },
    { value: "liquid", label: "Liquid", icon: "🥤" },
    { value: "inhaler", label: "Inhaler", icon: "🫁" },
    { value: "other", label: "Other", icon: "💊" },
  ];

  const addMedication = () => {
    if (!name.trim() || dosage <= 0) return;
    
    const medication: Medication = {
      id: `med-${++idCounter.current}`,
      name: name.trim(),
      dosage,
      unit,
      frequency,
      times: selectedTimes,
      type,
      notes: notes.trim() || undefined,
      createdAt: new Date().toLocaleString(),
      isActive: true,
      missedDoses: 0,
    };
    
    setMedications(prev => [medication, ...prev]);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setDosage(1);
    setUnit("mg");
    setFrequency("daily");
    setType("tablet");
    setNotes("");
    setSelectedTimes(["08:00"]);
    setShowAddForm(false);
  };

  const removeMedication = (id: string) => {
    setMedications(prev => prev.filter(m => m.id !== id));
    setDosageLogs(prev => prev.filter(log => log.medicationId !== id));
  };

  const toggleMedication = (id: string) => {
    setMedications(prev => prev.map(m => 
      m.id === id ? { ...m, isActive: !m.isActive } : m
    ));
  };

  const logDosage = (medicationId: string) => {
    const medication = medications.find(m => m.id === medicationId);
    if (!medication) return;

    const log: DosageLog = {
      id: `log-${++logIdCounter.current}`,
      medicationId,
      takenAt: new Date().toLocaleString(),
      dosage: medication.dosage,
      unit: medication.unit,
      notes: undefined,
    };

    setDosageLogs(prev => [log, ...prev]);
    
    // Update last taken time
    setMedications(prev => prev.map(m => 
      m.id === medicationId ? { ...m, lastTaken: new Date().toLocaleString() } : m
    ));
  };

  const handleTimeChange = (index: number, time: string) => {
    const newTimes = [...selectedTimes];
    newTimes[index] = time;
    setSelectedTimes(newTimes);
  };

  const addTimeSlot = () => {
    setSelectedTimes(prev => [...prev, "08:00"]);
  };

  const removeTimeSlot = (index: number) => {
    if (selectedTimes.length > 1) {
      setSelectedTimes(prev => prev.filter((_, i) => i !== index));
    }
  };

  // Calculate statistics
  const stats = useMemo(() => {
    const activeMeds = medications.filter(m => m.isActive);
    const totalMeds = medications.length;
    const takenToday = dosageLogs.filter(log => {
      const today = new Date().toDateString();
      const logDate = new Date(log.takenAt).toDateString();
      return logDate === today;
    }).length;
    
    const missedDoses = medications.reduce((sum, med) => sum + med.missedDoses, 0);
    const totalDoses = dosageLogs.length;

    return {
      activeMeds: activeMeds.length,
      totalMeds,
      takenToday,
      missedDoses,
      totalDoses,
      adherenceRate: totalDoses > 0 ? Math.round(((totalDoses - missedDoses) / totalDoses) * 100) : 100,
    };
  }, [medications, dosageLogs]);

  // Get recent logs for a medication
  const getRecentLogs = (medicationId: string) => {
    return dosageLogs
      .filter(log => log.medicationId === medicationId)
      .slice(0, 3);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">Meds</span>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Medication Reminders</h1>
      </div>
      <p className="mt-2 text-sm text-foreground/70 max-w-xl">Manage your medications with detailed tracking, dosage logs, and adherence monitoring.</p>

      {/* Statistics Overview */}
      {medications.length > 0 && (
        <div className="mt-6 rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Overview</h2>
            <button
              onClick={() => setShowStats(!showStats)}
              className="text-sm text-primary hover:text-primary/80"
            >
              {showStats ? "Hide Details" : "Show Details"}
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.activeMeds}</div>
              <div className="text-xs text-foreground/60">Active Meds</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.takenToday}</div>
              <div className="text-xs text-foreground/60">Taken Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalDoses}</div>
              <div className="text-xs text-foreground/60">Total Doses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.adherenceRate}%</div>
              <div className="text-xs text-foreground/60">Adherence</div>
            </div>
          </div>

          {showStats && (
            <div className="mt-4 pt-4 border-t border-black/[.08] dark:border-white/[.12]">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Total Medications</span>
                  <span className="font-medium">{stats.totalMeds}</span>
                </div>
                <div className="flex justify-between">
                  <span>Missed Doses</span>
                  <span className="font-medium text-red-600">{stats.missedDoses}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Add Medication Form */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Medications</h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-shine rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90"
          >
            {showAddForm ? "Cancel" : "Add Medication"}
          </button>
        </div>

        {showAddForm && (
          <div className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60 mb-6">
            <h3 className="text-lg font-semibold mb-4">Add New Medication</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-foreground/70" htmlFor="med-name">Medication Name</label>
                <input
                  id="med-name"
                  placeholder="e.g., Metformin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label className="text-sm text-foreground/70">Medication Type</label>
                <div className="mt-1 flex gap-2 flex-wrap">
                  {typeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setType(option.value as MedicationType)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        type === option.value
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-black/[.08] dark:border-white/[.12] hover:bg-foreground/5"
                      }`}
                    >
                      <span className="mr-1">{option.icon}</span>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-foreground/70" htmlFor="dosage">Dosage</label>
                <div className="mt-1 flex gap-2">
                  <input
                    id="dosage"
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={dosage}
                    onChange={(e) => setDosage(parseFloat(e.target.value) || 0)}
                    className="flex-1 rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as DosageUnit)}
                    className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {unitOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-foreground/70">Frequency</label>
                <div className="mt-1 flex gap-2 flex-wrap">
                  {frequencyOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFrequency(option.value as Frequency)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        frequency === option.value
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-black/[.08] dark:border-white/[.12] hover:bg-foreground/5"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-foreground/70">Reminder Times</label>
                <div className="mt-1 space-y-2">
                  {selectedTimes.map((time, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => handleTimeChange(index, e.target.value)}
                        className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      {selectedTimes.length > 1 && (
                        <button
                          onClick={() => removeTimeSlot(index)}
                          className="rounded-lg p-2 hover:bg-foreground/5 text-foreground/60"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addTimeSlot}
                    className="text-sm text-primary hover:text-primary/80"
                  >
                    + Add another time
                  </button>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-foreground/70" htmlFor="notes">Notes (optional)</label>
                <textarea
                  id="notes"
                  placeholder="e.g., Take with food, avoid alcohol..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  rows={2}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium hover:bg-primary/90"
                onClick={addMedication}
                disabled={!name.trim() || dosage <= 0}
              >
                Add Medication
              </button>
              <button
                className="rounded-full border border-black/[.12] dark:border-white/[.12] h-11 px-4 text-sm hover:bg-foreground/5"
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Medications List */}
      <div className="space-y-4">
        {medications.length === 0 && (
          <div className="rounded-lg border border-dashed border-black/[.06] dark:border-white/[.08] px-6 py-8 text-center text-foreground/60">
            <Image src="/pill.svg" alt="medication" width={48} height={48} className="mx-auto mb-3 dark:invert opacity-50" />
            <p>No medications yet. Add your first medication above.</p>
          </div>
        )}
        
        {medications.map((medication) => {
          const recentLogs = getRecentLogs(medication.id);
          const typeInfo = typeOptions.find(t => t.value === medication.type);
          
          return (
            <div key={medication.id} className="rounded-xl border border-black/[.08] dark:border-white/[.12] p-6 bg-background/60">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{typeInfo?.icon}</div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{medication.name}</h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        medication.isActive 
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
                      }`}>
                        {medication.isActive ? "Active" : "Inactive"}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1">
                      {medication.dosage} {medication.unit} • {frequencyOptions.find(f => f.value === medication.frequency)?.label}
                    </p>
                    <p className="text-sm text-foreground/60 mt-1">
                      Times: {medication.times.join(", ")}
                    </p>
                    {medication.notes && (
                      <p className="text-sm text-foreground/60 mt-1 italic">&ldquo;{medication.notes}&rdquo;</p>
                    )}
                    {medication.lastTaken && (
                      <p className="text-sm text-green-600 mt-1">
                        Last taken: {medication.lastTaken}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => logDosage(medication.id)}
                    className="rounded-lg bg-green-600 text-white px-3 py-2 text-sm font-medium hover:bg-green-700"
                    title="Mark as taken"
                  >
                    Taken
                  </button>
                  <button
                    onClick={() => toggleMedication(medication.id)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${
                      medication.isActive
                        ? "bg-orange-600 text-white hover:bg-orange-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                    title={medication.isActive ? "Deactivate" : "Activate"}
                  >
                    {medication.isActive ? "Pause" : "Resume"}
                  </button>
                  <button
                    onClick={() => removeMedication(medication.id)}
                    className="rounded-lg p-2 hover:bg-foreground/5 text-foreground/60 hover:text-foreground"
                    title="Remove medication"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Recent Dosage Logs */}
              {recentLogs.length > 0 && (
                <div className="mt-4 pt-4 border-t border-black/[.08] dark:border-white/[.12]">
                  <h4 className="text-sm font-medium mb-2">Recent Doses</h4>
                  <div className="space-y-1">
                    {recentLogs.map((log) => (
                      <div key={log.id} className="flex items-center justify-between text-sm text-foreground/70">
                        <span>{log.dosage} {log.unit}</span>
                        <span>{log.takenAt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}


