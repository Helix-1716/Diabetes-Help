import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: "understanding-hba1c",
    title: "Understanding HbA1c: Your Diabetes Report Card",
    excerpt: "Learn what HbA1c means, how to interpret your results, and why this test is crucial for diabetes management.",
    href: "/articles/understanding-hba1c",
    category: "Diabetes Basics",
    readTime: "5 min read",
    image: "/glucose.svg",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20"
  },
  {
    id: "hypoglycemia-hyperglycemia",
    title: "Low vs High Blood Sugar: Spotting the Symptoms",
    excerpt: "Recognize the warning signs of hypoglycemia and hyperglycemia, and learn when to take immediate action.",
    href: "/articles/hypoglycemia-hyperglycemia",
    category: "Emergency Care",
    readTime: "7 min read",
    image: "/heart.svg",
    color: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/20"
  },
  {
    id: "carb-counting-basics",
    title: "Carb Counting Basics: A Simple Guide for Everyday Meals",
    excerpt: "Master the fundamentals of carbohydrate counting to better manage your blood sugar levels with confidence.",
    href: "/articles/carb-counting-basics",
    category: "Nutrition",
    readTime: "8 min read",
    image: "/meal.svg",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/20"
  },
  {
    id: "diabetes-exercise-guide",
    title: "Exercise and Diabetes: A Complete Guide to Safe Physical Activity",
    excerpt: "Discover how to safely incorporate exercise into your diabetes management plan and optimize your workouts.",
    href: "/articles/diabetes-exercise-guide",
    category: "Lifestyle",
    readTime: "10 min read",
    image: "/shield.svg",
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/20"
  },
  {
    id: "medication-management",
    title: "Diabetes Medication Management: What You Need to Know",
    excerpt: "Understand different types of diabetes medications, their side effects, and how to manage them effectively.",
    href: "/articles/medication-management",
    category: "Treatment",
    readTime: "12 min read",
    image: "/pill.svg",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/20"
  }
];

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
            📚 Knowledge Hub
          </span>
          <span className="inline-flex items-center rounded-md bg-green-500/10 text-green-600 px-3 py-1 text-sm font-medium">
            🎯 Evidence-Based
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance animate-fade-in-up">
          Latest <span className="text-gradient-animation">Articles</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto animate-fade-in-up [animation-delay:100ms]">
          Evidence-based guidance written in clear language. Stay informed with the latest diabetes management insights and practical tips.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={article.href}
            className={`group relative rounded-2xl border ${article.borderColor} p-6 hover:bg-gradient-to-br ${article.color} transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:scale-105 hover:shadow-xl animate-fade-in-up`}
            style={{ animationDelay: `${200 + index * 100}ms` }}
          >
            {/* Category Badge */}
            <div className="absolute -top-2 -left-2 bg-background border border-black/[.08] dark:border-white/[.12] text-xs font-medium px-2 py-1 rounded-full">
              {article.category}
            </div>

            {/* Read Time Badge */}
            <div className="absolute -top-2 -right-2 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
              {article.readTime}
            </div>

            {/* Icon */}
            <div className={`size-12 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Image 
                src={article.image} 
                alt={article.title} 
                width={24} 
                height={24} 
                className="dark:invert group-hover:rotate-12 transition-transform duration-300" 
              />
            </div>

            {/* Content */}
            <h2 className="mt-4 text-xl font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">
              {article.title}
            </h2>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Read More Button */}
            <div className="mt-6 inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
              Read more
              <span className="ml-2 transition-transform group-hover:translate-x-1 duration-300">→</span>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 p-4 bg-background/60 rounded-2xl border border-black/[.08] dark:border-white/[.12]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">Updated regularly</span>
          </div>
          <div className="w-px h-4 bg-foreground/20"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">Medical review</span>
          </div>
          <div className="w-px h-4 bg-foreground/20"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground/80">Free access</span>
          </div>
        </div>
      </div>
    </main>
  );
}


