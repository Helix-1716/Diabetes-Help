"use client";

import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { testStorageConnection } from "@/lib/firebase";

export default function AccountPage() {
  const { user, updateUserProfile } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | undefined>(undefined);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }
    
    // Parse full name into first and last name
    const fullName = user.displayName || "";
    const nameParts = fullName.split(" ");
    setName(nameParts[0] || "");
    setSurname(nameParts.slice(1).join(" ") || "");
    setEmail(user.email || "");
    setPhotoPreview(user.photoURL || null);
    
    // Load additional user data from localStorage if available
    try {
      const storedData = localStorage.getItem("dh_user_data");
      if (storedData) {
        const userData = JSON.parse(storedData);
        setAge(userData.age || "");
        setPhone(userData.phone || "");
      }
    } catch {}
    
    // Test Firebase Storage connection
    testStorageConnection().then(isWorking => {
      console.log("Firebase Storage connection test:", isWorking ? "SUCCESS" : "FAILED");
    });
  }, [user, router]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Photo must be less than 5MB");
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError("Please select an image file");
        return;
      }
      
      setPhotoFile(file);
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      setError(null);
      
      // Validate required fields
      if (!name.trim() || !surname.trim() || !email.trim() || !age.trim() || !phone.trim()) {
        setError("All fields are required");
        return;
      }

      if (parseInt(age) < 1 || parseInt(age) > 120) {
        setError("Please enter a valid age (1-120)");
        return;
      }

      console.log("Starting profile update:", { 
        name: `${name} ${surname}`, 
        hasPhotoFile: !!photoFile,
        age,
        phone
      });
      
      await updateUserProfile(`${name.trim()} ${surname.trim()}`, photoFile);
      
      // Store additional user data
      try {
        localStorage.setItem("dh_user_data", JSON.stringify({
          age: age.trim(),
          phone: phone.trim(),
        }));
      } catch {}
      
      console.log("Profile update completed successfully");
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } catch (err: unknown) {
      console.error("Profile update failed:", err);
      const error = err as { message?: string };
      setError(error?.message || "Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">Your Account</h1>
      <p className="mt-2 text-foreground/80 max-w-2xl">Manage your profile details below.</p>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        <div className="sm:col-span-2 flex flex-col items-center mb-4">
          <div className="mb-2 text-sm text-foreground/70">Profile Photo</div>
          <div
            className="size-24 rounded-full border-2 border-primary/30 overflow-hidden bg-background/60 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            onClick={triggerFileInput}
          >
            {photoPreview ? (
              <img src={photoPreview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-foreground/40">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm-3 12.75A6.75 6.75 0 0 1 11.25 12h1.5A6.75 6.75 0 0 1 19.5 18.75v.75a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-.75Z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            accept="image/*"
            aria-label="Profile photo upload"
            className="hidden"
          />
          <button
            type="button"
            onClick={triggerFileInput}
            className="mt-2 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            {photoPreview ? "Change photo" : "Upload photo"}
          </button>
          <p className="text-xs text-foreground/60 mt-1">Max 5MB, JPG/PNG/GIF</p>
        </div>

        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm text-foreground/70">Name *</label>
          <input 
            id="name" 
            required 
            placeholder="First name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" 
          />
        </div>
        
        <div className="grid gap-2">
          <label htmlFor="surname" className="text-sm text-foreground/70">Surname *</label>
          <input 
            id="surname" 
            required 
            placeholder="Last name" 
            value={surname} 
            onChange={(e) => setSurname(e.target.value)} 
            className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" 
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm text-foreground/70">Email *</label>
          <input 
            id="email" 
            disabled 
            value={email} 
            className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30 opacity-70" 
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="age" className="text-sm text-foreground/70">Age *</label>
          <input 
            id="age" 
            type="number" 
            min="1" 
            max="120" 
            required 
            placeholder="e.g., 35" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" 
          />
        </div>

        <div className="sm:col-span-2 grid gap-2">
          <label htmlFor="phone" className="text-sm text-foreground/70">Phone Number *</label>
          <input 
            id="phone" 
            type="tel" 
            required 
            placeholder="+91 9XXXXXXXXX" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 px-4 h-11 outline-none focus:ring-2 focus:ring-primary/30" 
          />
        </div>

        <div className="sm:col-span-2 flex items-center gap-3">
          <button type="submit" disabled={saving} className="btn-shine rounded-full bg-primary text-primary-foreground h-11 px-6 text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed">
            {saving ? "Saving..." : "Save changes"}
          </button>
          {saved && <span className="text-sm text-green-600">Saved</span>}
          {error && <span className="text-sm text-red-600">{error}</span>}
        </div>
      </form>
    </main>
  );
}


