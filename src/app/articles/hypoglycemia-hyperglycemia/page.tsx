import Link from "next/link";

export default function HypoglycemiaHyperglycemiaPage() {
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
          <span className="inline-flex items-center rounded-md bg-red-500/10 text-red-600 px-2 py-1 text-xs font-medium">
            Emergency Care
          </span>
          <span className="text-sm text-foreground/60">7 min read</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-4">
          Low vs High Blood Sugar: Spotting the Symptoms
        </h1>
        
        <p className="text-lg text-foreground/80 leading-relaxed">
          Recognize the warning signs of hypoglycemia and hyperglycemia, and learn when to take immediate action to protect your health.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Understanding Blood Sugar Extremes</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Both high and low blood sugar levels can be dangerous for people with diabetes. Knowing how to recognize the symptoms of each condition and what to do about them can literally save your life. This guide will help you understand the difference between hypoglycemia (low blood sugar) and hyperglycemia (high blood sugar), their symptoms, and appropriate responses.
            </p>
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-sm text-red-800 dark:text-red-200">
                <strong>Important:</strong> If you experience severe symptoms or are unsure about your condition, seek immediate medical attention or call emergency services.
              </p>
            </div>
          </section>

          {/* Hypoglycemia Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Hypoglycemia (Low Blood Sugar)</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Hypoglycemia occurs when your blood sugar drops below 70 mg/dL (3.9 mmol/L). This can happen quickly and requires immediate attention. The symptoms can vary from person to person and may change over time.
            </p>

            <h3 className="text-xl font-semibold mb-3">Common Symptoms of Low Blood Sugar:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Physical Symptoms</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Shakiness or trembling</li>
                  <li>• Sweating (often cold sweats)</li>
                  <li>• Rapid heartbeat</li>
                  <li>• Hunger or nausea</li>
                  <li>• Dizziness or lightheadedness</li>
                  <li>• Blurred vision</li>
                  <li>• Fatigue or weakness</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Mental Symptoms</h4>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Confusion or difficulty concentrating</li>
                  <li>• Irritability or mood changes</li>
                  <li>• Anxiety or nervousness</li>
                  <li>• Slurred speech</li>
                  <li>• Coordination problems</li>
                  <li>• Nightmares or sleep disturbances</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">What to Do for Low Blood Sugar:</h3>
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mb-4">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Immediate Action (15-15 Rule)</h4>
              <ol className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>1. Check your blood sugar if possible</li>
                <li>2. Consume 15 grams of fast-acting carbohydrates</li>
                <li>3. Wait 15 minutes</li>
                <li>4. Check your blood sugar again</li>
                <li>5. Repeat if still below 70 mg/dL</li>
              </ol>
            </div>

            <h4 className="font-semibold mb-2">Fast-Acting Carbohydrates (15 grams each):</h4>
            <ul className="space-y-1 text-foreground/80 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>3-4 glucose tablets</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>1/2 cup (4 oz) of fruit juice</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>1 tablespoon of honey or sugar</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>1/2 can of regular soda (not diet)</span>
              </li>
            </ul>
          </section>

          {/* Hyperglycemia Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Hyperglycemia (High Blood Sugar)</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Hyperglycemia occurs when your blood sugar is consistently above your target range (typically above 180 mg/dL or 10 mmol/L). Unlike hypoglycemia, symptoms of high blood sugar develop more slowly and may be less obvious.
            </p>

            <h3 className="text-xl font-semibold mb-3">Common Symptoms of High Blood Sugar:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Early Symptoms</h4>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Increased thirst</li>
                  <li>• Frequent urination</li>
                  <li>• Fatigue or tiredness</li>
                  <li>• Blurred vision</li>
                  <li>• Headaches</li>
                  <li>• Difficulty concentrating</li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Severe Symptoms</h4>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Nausea and vomiting</li>
                  <li>• Abdominal pain</li>
                  <li>• Rapid breathing</li>
                  <li>• Fruity-smelling breath</li>
                  <li>• Confusion or drowsiness</li>
                  <li>• Loss of consciousness</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">What to Do for High Blood Sugar:</h3>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Immediate Steps</h4>
              <ol className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>1. Check your blood sugar</li>
                <li>2. Drink plenty of water</li>
                <li>3. Take your diabetes medication as prescribed</li>
                <li>4. Monitor your blood sugar every 2-4 hours</li>
                <li>5. Contact your healthcare provider if levels remain high</li>
              </ol>
            </div>

            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-sm text-red-800 dark:text-red-200">
                <strong>Emergency Warning:</strong> If you experience severe symptoms like vomiting, abdominal pain, rapid breathing, or confusion, seek immediate medical attention. These could be signs of diabetic ketoacidosis (DKA) or hyperosmolar hyperglycemic state (HHS).
              </p>
            </div>
          </section>

          {/* Prevention Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Prevention Strategies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Preventing Low Blood Sugar</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Eat regular meals and snacks</li>
                  <li>• Don't skip meals</li>
                  <li>• Adjust medication with exercise</li>
                  <li>• Monitor blood sugar before driving</li>
                  <li>• Carry fast-acting carbohydrates</li>
                  <li>• Wear diabetes identification</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Preventing High Blood Sugar</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Follow your meal plan</li>
                  <li>• Take medications as prescribed</li>
                  <li>• Exercise regularly</li>
                  <li>• Monitor blood sugar regularly</li>
                  <li>• Manage stress levels</li>
                  <li>• Stay hydrated</li>
                </ul>
              </div>
            </div>
          </section>

          {/* When to Seek Medical Help */}
          <section>
            <h2 className="text-2xl font-bold mb-4">When to Seek Medical Help</h2>
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Emergency Situations</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                Call emergency services (911) immediately if you experience:
              </p>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Severe confusion or unconsciousness</li>
                <li>• Seizures</li>
                <li>• Severe vomiting or abdominal pain</li>
                <li>• Rapid breathing or shortness of breath</li>
                <li>• Blood sugar that doesn't respond to treatment</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Contact Your Healthcare Provider</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                Call your doctor if you experience:
              </p>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Frequent episodes of low or high blood sugar</li>
                <li>• Difficulty managing your blood sugar levels</li>
                <li>• New or worsening symptoms</li>
                <li>• Concerns about your diabetes management</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Stay Prepared and Informed</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Understanding the symptoms of both high and low blood sugar is essential for safe diabetes management. Always carry your diabetes supplies, wear medical identification, and educate family members and friends about how to help in an emergency.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-primary-foreground font-medium">
                <strong>Remember:</strong> When in doubt, it's always better to seek medical attention. Your health and safety come first. Use our glucose logging tools to track patterns and identify potential issues before they become emergencies.
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
            <p className="text-sm text-foreground/70">Learn about long-term blood sugar monitoring and management.</p>
          </Link>
          <Link 
            href="/articles/medication-management"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Diabetes Medication Management</h3>
            <p className="text-sm text-foreground/70">Understand how medications affect your blood sugar levels.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
