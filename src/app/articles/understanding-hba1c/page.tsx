import Link from "next/link";
import Image from "next/image";

export default function UnderstandingHbA1cPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Back to Articles */}
      <div className="mb-8">
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-md bg-blue-500/10 text-blue-600 px-2 py-1 text-xs font-medium">
            Diabetes Basics
          </span>
          <span className="text-sm text-foreground/60">5 min read</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-4">
          Understanding HbA1c: Your Diabetes Report Card
        </h1>
        
        <p className="text-lg text-foreground/80 leading-relaxed">
          Learn what HbA1c means, how to interpret your results, and why this test is crucial for diabetes management.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What is HbA1c?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              HbA1c, also known as glycated hemoglobin or A1c, is a blood test that measures your average blood sugar levels over the past 2-3 months. Think of it as your diabetes &ldquo;report card&rdquo; - it gives you and your healthcare team a clear picture of how well your diabetes management plan is working over time.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Unlike daily blood glucose tests that show your sugar levels at a specific moment, HbA1c provides a long-term view of your blood sugar control. This makes it an essential tool for monitoring diabetes management and reducing the risk of complications.
            </p>
          </section>

          {/* How HbA1c Works */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How Does HbA1c Work?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When glucose circulates in your bloodstream, some of it attaches to hemoglobin, the protein in red blood cells that carries oxygen. This process is called glycation. The higher your blood sugar levels, the more glucose attaches to hemoglobin.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Since red blood cells live for about 2-3 months, the HbA1c test measures the percentage of hemoglobin that has glucose attached to it. This percentage reflects your average blood sugar levels over that time period.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Key Point:</strong> HbA1c is measured as a percentage. For people without diabetes, normal HbA1c levels are typically below 5.7%.
              </p>
            </div>
          </section>

          {/* Understanding Your Results */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Understanding Your HbA1c Results</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-foreground/20 rounded-lg">
                <thead>
                  <tr className="bg-foreground/5">
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">HbA1c Level</th>
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">Average Blood Sugar</th>
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">Below 5.7%</td>
                    <td className="border border-foreground/20 px-4 py-3">Below 117 mg/dL</td>
                    <td className="border border-foreground/20 px-4 py-3">Normal</td>
                  </tr>
                  <tr className="bg-foreground/5">
                    <td className="border border-foreground/20 px-4 py-3">5.7% - 6.4%</td>
                    <td className="border border-foreground/20 px-4 py-3">117-137 mg/dL</td>
                    <td className="border border-foreground/20 px-4 py-3">Prediabetes</td>
                  </tr>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">6.5% or higher</td>
                    <td className="border border-foreground/20 px-4 py-3">140 mg/dL or higher</td>
                    <td className="border border-foreground/20 px-4 py-3">Diabetes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Target Levels */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Target HbA1c Levels for Diabetes Management</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The American Diabetes Association (ADA) recommends most adults with diabetes aim for an HbA1c of less than 7%. However, your target may be different based on your individual circumstances:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Less than 7%:</strong> General target for most adults with diabetes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Less than 6.5%:</strong> Target for those who can achieve it without significant hypoglycemia</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Less than 8%:</strong> Target for those with limited life expectancy or severe hypoglycemia risk</span>
              </li>
            </ul>
          </section>

          {/* Why HbA1c Matters */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Why HbA1c Matters for Your Health</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Maintaining good HbA1c levels is crucial because it directly correlates with your risk of diabetes complications. Research shows that every 1% reduction in HbA1c can significantly reduce your risk of:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Eye problems (retinopathy) by 37%</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Kidney problems (nephropathy) by 33%</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Nerve problems (neuropathy) by 30%</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Heart attacks by 14%</span>
              </li>
            </ul>
          </section>

          {/* Tips for Better HbA1c */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Tips for Improving Your HbA1c</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Lifestyle Changes</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Regular physical activity</li>
                  <li>• Balanced meal planning</li>
                  <li>• Weight management</li>
                  <li>• Stress reduction</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Medical Management</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Regular blood sugar monitoring</li>
                  <li>• Medication adherence</li>
                  <li>• Regular doctor visits</li>
                  <li>• HbA1c testing every 3-6 months</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Take Action Today</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Understanding your HbA1c is the first step toward better diabetes management. Work with your healthcare team to set realistic goals and develop a plan to achieve them. Remember, small improvements in your HbA1c can lead to significant health benefits over time.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-primary-foreground font-medium">
                <strong>Next Steps:</strong> Schedule your next HbA1c test and discuss your results with your healthcare provider. Use our glucose logging tools to track your daily progress toward your HbA1c goals.
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* Related Articles */}
      <section className="mt-16 pt-8 border-t border-foreground/20">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/articles/hypoglycemia-hyperglycemia"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Low vs High Blood Sugar: Spotting the Symptoms</h3>
            <p className="text-sm text-foreground/70">Learn to recognize warning signs and take immediate action.</p>
          </Link>
          <Link 
            href="/articles/carb-counting-basics"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Carb Counting Basics: A Simple Guide</h3>
            <p className="text-sm text-foreground/70">Master carbohydrate counting for better blood sugar control.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
