import Link from "next/link";
import Image from "next/image";
import PatientCarousel from "@/components/PatientCarousel";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="pt-0 sm:pt-0 grid grid-cols-1 gap-10 items-center">
        <div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-black/[.08] dark:border-white/[.12] px-3 py-1 text-xs text-foreground/70 animate-fade-in-up transition-colors transition-transform hover:bg-primary/10 hover:text-primary hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:-translate-y-0.5">
              Better daily care
            </span>
            <span className="inline-flex items-center rounded-full border border-black/[.08] dark:border-white/[.12] px-3 py-1 text-xs text-foreground/70 animate-fade-in-up transition-colors transition-transform hover:bg-primary/10 hover:text-primary hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:-translate-y-0.5">
              Make a better life
            </span>
            <span className="inline-flex items-center rounded-full border border-black/[.08] dark:border-white/[.12] px-3 py-1 text-xs text-foreground/70 animate-fade-in-up transition-colors transition-transform hover:bg-primary/10 hover:text-primary hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:-translate-y-0.5">
              Fix your health
            </span>
            <span className="inline-flex items-center rounded-full border border-black/[.08] dark:border-white/[.12] px-3 py-1 text-xs text-foreground/70 animate-fade-in-up transition-colors transition-transform hover:bg-primary/10 hover:text-primary hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:-translate-y-0.5">
              Live a better life
            </span>
          </div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-balance animate-fade-in-up [animation-delay:80ms]">
            <span className="text-gradient-animation">Manage diabetes</span> with
            clarity and confidence
          </h1>
          <p className="mt-3 text-base sm:text-lg text-foreground/80 max-w-2xl animate-fade-in-up [animation-delay:160ms]">
            Personalized tools, evidence-based guides, and friendly reminders to help you track glucose, meds, meals, and activity—without the overwhelm.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 animate-fade-in-up [animation-delay:220ms]">
            <Link
              id="get-started"
              href="#features"
              className="rounded-full bg-primary text-primary-foreground text-sm font-medium h-11 px-6 inline-flex items-center justify-center w-full sm:w-auto hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-sm hover:shadow"
            >
              Get Started
            </Link>
            <Link
              href="/articles"
              className="rounded-full border border-primary text-primary text-sm font-medium h-11 px-6 inline-flex items-center justify-center w-full sm:w-auto hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Learn more
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-foreground/70 animate-fade-in-up [animation-delay:280ms]">
            <div className="flex gap-2">
              <Image src="/heart.svg" alt="heart icon" width={24} height={24} className="rounded-full dark:invert transition-transform duration-200 hover:scale-110" />
              <Image src="/stethoscope.svg" alt="stethoscope icon" width={24} height={24} className="rounded-full dark:invert transition-transform duration-200 hover:scale-110" />
              <Image src="/shield.svg" alt="shield icon" width={24} height={24} className="rounded-full dark:invert transition-transform duration-200 hover:scale-110" />
            </div>
            Trusted by patients, caregivers, and clinicians
          </div>
        </div>
      </section>

      <section className="mt-6 sm:mt-8 rounded-2xl border border-black/[.08] dark:border-white/[.12] p-5 sm:p-7 bg-gradient-to-br from-primary/5 to-sky-300/10">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">Sugar Health</span>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">For a normal patient</h2>
        </div>
        <p className="mt-2 text-sm sm:text-base text-foreground/80 max-w-3xl">
          Typical target ranges when not diagnosed with diabetes. Always consult a clinician for personal goals.
        </p>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[{
            label: "Fasting / Before meal",
            value: "70–110 mg/dL",
            note: "Ideal resting range"
          }, {
            label: "1–2 hrs after meal",
            value: "< 140 mg/dL",
            note: "Post‑prandial"
          }, {
            label: "HbA1c",
            value: "< 5.7%",
            note: "Average 3‑month glucose"
          }].map((card) => (
            <div key={card.label} className="rounded-xl border border-black/[.08] dark:border-white/[.12] bg-background/60 p-5 hover:shadow-sm transition-shadow">
              <div className="text-sm text-foreground/70">{card.label}</div>
              <div className="mt-2 text-2xl font-bold tracking-tight text-balance"><span className="text-gradient-animation">
                {card.value}
              </span></div>
              <div className="mt-1 text-xs text-foreground/60">{card.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Satisfied patients</h2>
        <p className="mt-1 text-sm text-foreground/70">Stories that keep us motivated.</p>
        <div className="mt-4">
          <PatientCarousel />
        </div>
      </section>

      <section id="features" className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need</h2>
        <p className="mt-2 text-foreground/80">Simple tools that fit your routine.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Glucose tracking",
              desc: "Log readings fast and see trends instantly.",
              icon: "/glucose.svg",
              href: "/tools/glucose",
            },
            {
              title: "Medication schedule",
              desc: "Smart reminders to never miss a dose.",
              icon: "/pill.svg",
              href: "/tools/meds",
            },
            {
              title: "Meal planning",
              desc: "Carb counts with real-food examples.",
              icon: "/meal.svg",
              href: "/tools/meal",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="card-lift rounded-2xl border border-black/[.08] dark:border-white/[.145] p-5 hover:bg-primary/5 transition-colors"
            >
              <div className="size-10 rounded-xl bg-black/[.05] dark:bg-white/[.06] flex items-center justify-center">
                <Image src={f.icon} alt={f.title} width={20} height={20} className="dark:invert" />
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{f.desc}</p>
              <div className="mt-4">
                <Link href={f.href} className="rounded-full bg-primary text-primary-foreground text-xs font-medium h-9 px-4 inline-flex items-center hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 btn-shine">
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
