import Link from "next/link";

export default function CarbCountingBasicsPage() {
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
          <span className="inline-flex items-center rounded-md bg-green-500/10 text-green-600 px-2 py-1 text-xs font-medium">
            Nutrition
          </span>
          <span className="text-sm text-foreground/60">8 min read</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-4">
          Carb Counting Basics: A Simple Guide for Everyday Meals
        </h1>
        
        <p className="text-lg text-foreground/80 leading-relaxed">
          Master the fundamentals of carbohydrate counting to better manage your blood sugar levels with confidence and precision.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">What is Carbohydrate Counting?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Carbohydrate counting is a meal planning technique that helps you track the amount of carbohydrates you eat and drink. Since carbohydrates have the greatest impact on blood sugar levels, understanding how to count them can help you manage your diabetes more effectively.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              This method allows you to enjoy a variety of foods while maintaining better blood sugar control. It&apos;s particularly useful for people who take insulin, as it helps determine the correct insulin dose needed for meals.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-green-800 dark:text-green-200">
                <strong>Key Benefit:</strong> Carb counting gives you flexibility in food choices while helping you maintain stable blood sugar levels.
              </p>
            </div>
          </section>

          {/* Why Carbs Matter */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Carbohydrates Matter for Blood Sugar</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When you eat carbohydrates, your body breaks them down into glucose (sugar), which enters your bloodstream. This causes your blood sugar to rise. The more carbohydrates you eat, the more your blood sugar will increase.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Macronutrients and Blood Sugar</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li><strong>Carbohydrates:</strong> Major impact on blood sugar</li>
                  <li><strong>Protein:</strong> Minimal impact on blood sugar</li>
                  <li><strong>Fat:</strong> No direct impact on blood sugar</li>
                  <li><strong>Fiber:</strong> Slows carbohydrate absorption</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Carbohydrate Types</h3>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li><strong>Simple carbs:</strong> Quick blood sugar spike</li>
                  <li><strong>Complex carbs:</strong> Slower, more stable rise</li>
                  <li><strong>Fiber:</strong> Minimal blood sugar impact</li>
                  <li><strong>Sugar alcohols:</strong> Reduced impact</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Count Carbs */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How to Count Carbohydrates</h2>
            <h3 className="text-xl font-semibold mb-3">Step 1: Read Nutrition Labels</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The easiest way to count carbs is by reading nutrition labels. Look for the "Total Carbohydrates" line, which includes all types of carbohydrates (sugars, fiber, and sugar alcohols).
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Note:</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Pay attention to the serving size on the label. If you eat more or less than the listed serving size, you&apos;ll need to adjust the carbohydrate count accordingly.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Step 2: Use Measuring Tools</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For foods without labels (like fresh fruits and vegetables), use measuring cups, spoons, or a food scale to determine portion sizes. Then refer to carbohydrate reference guides or apps.
            </p>

            <h3 className="text-xl font-semibold mb-3">Step 3: Calculate Total Carbs</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Add up all the carbohydrates from your meal or snack. This gives you the total carbohydrate count for that eating occasion.
            </p>
          </section>

          {/* Common Carb Counts */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Common Carbohydrate Counts</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-foreground/20 rounded-lg">
                <thead>
                  <tr className="bg-foreground/5">
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">Food Item</th>
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">Serving Size</th>
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">Carbohydrates (g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">Bread (white/wheat)</td>
                    <td className="border border-foreground/20 px-4 py-3">1 slice</td>
                    <td className="border border-foreground/20 px-4 py-3">15</td>
                  </tr>
                  <tr className="bg-foreground/5">
                    <td className="border border-foreground/20 px-4 py-3">Rice (cooked)</td>
                    <td className="border border-foreground/20 px-4 py-3">1/3 cup</td>
                    <td className="border border-foreground/20 px-4 py-3">15</td>
                  </tr>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">Pasta (cooked)</td>
                    <td className="border border-foreground/20 px-4 py-3">1/2 cup</td>
                    <td className="border border-foreground/20 px-4 py-3">15</td>
                  </tr>
                  <tr className="bg-foreground/5">
                    <td className="border border-foreground/20 px-4 py-3">Apple</td>
                    <td className="border border-foreground/20 px-4 py-3">1 medium</td>
                    <td className="border border-foreground/20 px-4 py-3">15</td>
                  </tr>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">Banana</td>
                    <td className="border border-foreground/20 px-4 py-3">1 small</td>
                    <td className="border border-foreground/20 px-4 py-3">15</td>
                  </tr>
                  <tr className="bg-foreground/5">
                    <td className="border border-foreground/20 px-4 py-3">Milk (skim/1%)</td>
                    <td className="border border-foreground/20 px-4 py-3">1 cup</td>
                    <td className="border border-foreground/20 px-4 py-3">12</td>
                  </tr>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">Yogurt (plain)</td>
                    <td className="border border-foreground/20 px-4 py-3">1 cup</td>
                    <td className="border border-foreground/20 px-4 py-3">12</td>
                  </tr>
                  <tr className="bg-foreground/5">
                    <td className="border border-foreground/20 px-4 py-3">Potato (baked)</td>
                    <td className="border border-foreground/20 px-4 py-3">1 small</td>
                    <td className="border border-foreground/20 px-4 py-3">15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Carb Counting Methods */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Different Approaches to Carb Counting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Basic Carb Counting</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  Count total carbohydrates and maintain consistent amounts at meals. This approach is good for beginners and those with stable insulin regimens.
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Count total carbs per meal</li>
                  <li>• Keep consistent amounts</li>
                  <li>• Monitor blood sugar response</li>
                  <li>• Adjust as needed</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Advanced Carb Counting</h3>
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  Count carbs and adjust insulin doses based on the amount consumed. This provides more flexibility but requires more knowledge and monitoring.
                </p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Count carbs precisely</li>
                  <li>• Calculate insulin ratios</li>
                  <li>• Adjust for activity level</li>
                  <li>• Consider blood sugar trends</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips for Success */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Tips for Successful Carb Counting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Start Simple</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Begin with packaged foods</li>
                    <li>• Use measuring tools consistently</li>
                    <li>• Keep a food diary</li>
                    <li>• Practice with familiar foods</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Use Technology</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Download carb counting apps</li>
                    <li>• Use barcode scanners</li>
                    <li>• Take photos of meals</li>
                    <li>• Set reminders</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Plan Ahead</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Plan meals in advance</li>
                    <li>• Pre-portion snacks</li>
                    <li>• Read menus online</li>
                    <li>• Pack measuring tools</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Monitor and Adjust</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Check blood sugar regularly</li>
                    <li>• Note patterns</li>
                    <li>• Adjust portions as needed</li>
                    <li>• Work with your healthcare team</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Common Carb Counting Mistakes to Avoid</h2>
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Mistakes and Solutions</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">❌ Forgetting to count beverages</p>
                  <p className="text-sm text-red-600 dark:text-red-400">✅ Include all drinks, including alcohol and juice</p>
                </div>
                <div>
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">❌ Ignoring portion sizes</p>
                  <p className="text-sm text-red-600 dark:text-red-400">✅ Always measure or weigh your food</p>
                </div>
                <div>
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">❌ Not accounting for fiber</p>
                  <p className="text-sm text-red-600 dark:text-red-400">✅ Subtract fiber from total carbs if over 5g</p>
                </div>
                <div>
                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">❌ Guessing amounts</p>
                  <p className="text-sm text-red-600 dark:text-red-400">✅ Use measuring tools or reference guides</p>
                </div>
              </div>
            </div>
          </section>

          {/* Working with Healthcare Team */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Working with Your Healthcare Team</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Carb counting is most effective when done in partnership with your healthcare team. They can help you:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Determine your daily carbohydrate goals</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Calculate insulin-to-carbohydrate ratios</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Adjust your meal plan based on blood sugar patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Provide education and support for carb counting</span>
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Getting Started with Carb Counting</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Carb counting is a valuable skill that can help you take control of your diabetes management. Start slowly, be patient with yourself, and remember that practice makes perfect. The more you practice, the easier it becomes.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-primary-foreground font-medium">
                <strong>Next Steps:</strong> Begin by tracking your current carbohydrate intake for a few days. Use our meal planning tools to help you get started, and don't hesitate to reach out to your healthcare team for guidance and support.
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
            href="/articles/understanding-hba1c"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Understanding HbA1c: Your Diabetes Report Card</h3>
            <p className="text-sm text-foreground/70">Learn how carb counting affects your long-term blood sugar control.</p>
          </Link>
          <Link 
            href="/articles/diabetes-exercise-guide"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Exercise and Diabetes: A Complete Guide</h3>
            <p className="text-sm text-foreground/70">Discover how exercise affects your carbohydrate needs.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
