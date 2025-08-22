import Link from "next/link";
import Image from "next/image";

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero Section with Enhanced Decoration */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-3 py-1 text-sm font-medium animate-pulse">
            ✨ Essential Tools
          </span>
          <span className="inline-flex items-center rounded-md bg-green-500/10 text-green-600 px-3 py-1 text-sm font-medium">
            🎯 Daily Management
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance animate-fade-in-up">
          <span className="text-gradient-animation">Tools</span> to simplify your day
        </h1>
        
        <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto animate-fade-in-up [animation-delay:100ms]">
          Quick, reliable, and focused on what matters. Manage your diabetes with confidence using our comprehensive suite of tools designed for your daily needs.
        </p>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>

      {/* Enhanced Tools Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Glucose Tracker",
            desc: "Log readings in seconds and view trends with detailed analytics and insights.",
            href: "/tools/glucose",
            icon: "/glucose.svg",
            color: "from-blue-500/20 to-cyan-500/20",
            borderColor: "border-blue-500/20",
            features: ["Quick logging", "Trend analysis", "Export data"],
            badge: "Most Popular"
          },
          {
            title: "Medication Reminders",
            desc: "Stay on schedule with smart nudges and customizable alerts.",
            href: "/tools/meds",
            icon: "/pill.svg",
            color: "from-purple-500/20 to-pink-500/20",
            borderColor: "border-purple-500/20",
            features: ["Smart alerts", "Custom schedules", "Missed dose tracking"],
            badge: "Essential"
          },
          {
            title: "Meal Planner",
            desc: "Simple meal ideas with carb counts and personalized recommendations.",
            href: "/tools/meal",
            icon: "/meal.svg",
            color: "from-green-500/20 to-emerald-500/20",
            borderColor: "border-green-500/20",
            features: ["AI recommendations", "Carb tracking", "Recipe database"],
            badge: "New"
          },
        ].map((tool, index) => (
          <Link
            key={tool.title}
            href={tool.href}
            className={`group relative rounded-2xl border ${tool.borderColor} p-6 hover:bg-gradient-to-br ${tool.color} transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:scale-105 hover:shadow-xl animate-fade-in-up`}
            style={{ animationDelay: `${200 + index * 100}ms` }}
          >
            {/* Badge */}
            {tool.badge && (
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full animate-pulse">
                {tool.badge}
              </div>
            )}

            {/* Icon with Enhanced Styling */}
            <div className={`size-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Image 
                src={tool.icon} 
                alt={tool.title} 
                width={24} 
                height={24} 
                className="dark:invert group-hover:rotate-12 transition-transform duration-300" 
              />
            </div>

            {/* Content */}
            <h2 className="mt-4 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {tool.title}
            </h2>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              {tool.desc}
            </p>

            {/* Features List */}
            <div className="mt-4 space-y-1">
              {tool.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2 text-xs text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-6 inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
              Get Started
              <span className="ml-2 transition-transform group-hover:translate-x-1 duration-300">→</span>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        ))}
      </div>

      {/* Additional Decorative Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-background/60 rounded-2xl border border-black/[.08] dark:border-white/[.12]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">All tools are free to use</span>
          </div>
          <div className="w-px h-4 bg-foreground/20"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">Secure & private</span>
          </div>
          <div className="w-px h-4 bg-foreground/20"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">Mobile friendly</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-foreground/60">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 0h2.25A2.25 2.25 0 0 1 10.5 12.75v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V12.75A2.25 2.25 0 0 1 6 10.5Z" />
          </svg>
          Start managing your diabetes with confidence today
        </div>
      </div>
    </main>
  );
}


