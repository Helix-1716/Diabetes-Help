import Link from "next/link";

export default function DiabetesExerciseGuidePage() {
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
          <span className="inline-flex items-center rounded-md bg-purple-500/10 text-purple-600 px-2 py-1 text-xs font-medium">
            Lifestyle
          </span>
          <span className="text-sm text-foreground/60">10 min read</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-4">
          Exercise and Diabetes: A Complete Guide to Safe Physical Activity
        </h1>
        
        <p className="text-lg text-foreground/80 leading-relaxed">
          Discover how to safely incorporate exercise into your diabetes management plan and optimize your workouts for better blood sugar control.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Exercise Matters for Diabetes Management</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Regular physical activity is one of the most powerful tools you have for managing diabetes. Exercise helps your body use insulin more effectively, lowers blood sugar levels, and reduces the risk of diabetes complications. It also improves heart health, strengthens muscles, and boosts your overall well-being.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Whether you're just starting your fitness journey or looking to optimize your current routine, this guide will help you understand how exercise affects your diabetes and how to create a safe, effective workout plan.
            </p>
            <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                <strong>Key Benefit:</strong> Regular exercise can improve insulin sensitivity by 20-30% and help maintain healthy blood sugar levels.
              </p>
            </div>
          </section>

          {/* How Exercise Affects Blood Sugar */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How Exercise Affects Blood Sugar</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Understanding how exercise impacts your blood sugar is crucial for safe diabetes management. Physical activity affects blood glucose levels in several ways:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">During Exercise</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Muscles use glucose for energy</li>
                  <li>• Insulin sensitivity increases</li>
                  <li>• Blood sugar typically decreases</li>
                  <li>• Effects can last 2-24 hours</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">After Exercise</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Muscles replenish glycogen stores</li>
                  <li>• Blood sugar may continue to drop</li>
                  <li>• Increased insulin sensitivity</li>
                  <li>• Risk of delayed hypoglycemia</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Note:</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                The effect of exercise on blood sugar varies from person to person and depends on the type, intensity, and duration of activity. Always monitor your blood sugar before, during, and after exercise.
              </p>
            </div>
          </section>

          {/* Types of Exercise */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Exercise for Diabetes Management</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Aerobic Exercise (Cardio)</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  Activities that increase your heart rate and breathing, such as walking, swimming, cycling, or dancing.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Benefits:</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Improves heart health</li>
                      <li>• Burns calories</li>
                      <li>• Lowers blood sugar</li>
                      <li>• Increases endurance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Examples:</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Brisk walking (30 min/day)</li>
                      <li>• Swimming</li>
                      <li>• Cycling</li>
                      <li>• Dancing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Strength Training</h3>
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  Activities that build muscle strength and endurance, such as weight lifting, resistance bands, or bodyweight exercises.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Benefits:</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Builds muscle mass</li>
                      <li>• Improves insulin sensitivity</li>
                      <li>• Increases metabolism</li>
                      <li>• Strengthens bones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Examples:</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Weight lifting</li>
                      <li>• Resistance bands</li>
                      <li>• Push-ups/squats</li>
                      <li>• Yoga</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Flexibility and Balance</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  Activities that improve flexibility, balance, and range of motion, such as yoga, tai chi, or stretching.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Benefits:</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Improves flexibility</li>
                      <li>• Reduces stress</li>
                      <li>• Prevents injuries</li>
                      <li>• Enhances balance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Examples:</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Yoga</li>
                      <li>• Tai chi</li>
                      <li>• Stretching</li>
                      <li>• Pilates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exercise Guidelines */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Exercise Guidelines for People with Diabetes</h2>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-6">
              <h3 className="font-semibold text-primary-foreground mb-3">General Recommendations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-primary-foreground mb-2">Aerobic Exercise:</h4>
                  <ul className="text-sm text-primary-foreground/90 space-y-1">
                    <li>• 150 minutes per week</li>
                    <li>• Moderate intensity</li>
                    <li>• Spread over 3-7 days</li>
                    <li>• No more than 2 consecutive days off</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-primary-foreground mb-2">Strength Training:</h4>
                  <ul className="text-sm text-primary-foreground/90 space-y-1">
                    <li>• 2-3 sessions per week</li>
                    <li>• All major muscle groups</li>
                    <li>• 8-12 repetitions</li>
                    <li>• 2-3 sets per exercise</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Blood Sugar Monitoring */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Blood Sugar Monitoring During Exercise</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Before Exercise</h3>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Check blood sugar</li>
                  <li>• If &lt;100 mg/dL, eat a snack</li>
                  <li>• If &gt;250 mg/dL, check ketones</li>
                  <li>• If &gt;300 mg/dL, postpone exercise</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">During Exercise</h3>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Check every 30-60 minutes</li>
                  <li>• Watch for symptoms</li>
                  <li>• Carry fast-acting carbs</li>
                  <li>• Stay hydrated</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">After Exercise</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Check blood sugar</li>
                  <li>• Monitor for 2-24 hours</li>
                  <li>• Eat if needed</li>
                  <li>• Adjust insulin if necessary</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safety Considerations */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Safety Considerations</h2>
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">When to Avoid Exercise</h3>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Blood sugar &gt;300 mg/dL with ketones</li>
                <li>• Severe hypoglycemia</li>
                <li>• Illness or infection</li>
                <li>• Chest pain or shortness of breath</li>
                <li>• Foot problems or injuries</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Pre-Exercise Checklist</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Check blood sugar</li>
                  <li>• Wear proper footwear</li>
                  <li>• Carry diabetes supplies</li>
                  <li>• Wear medical ID</li>
                  <li>• Inform someone of your plans</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Exercise Essentials</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Glucose meter and strips</li>
                  <li>• Fast-acting carbohydrates</li>
                  <li>• Water bottle</li>
                  <li>• Comfortable clothing</li>
                  <li>• Emergency contact info</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Getting Started with Exercise</h2>
            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Step 1: Talk to Your Healthcare Team</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Before starting any exercise program, discuss your plans with your doctor, diabetes educator, or exercise specialist. They can help you create a safe, effective plan tailored to your needs.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Step 2: Start Slowly</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Begin with 5-10 minutes of activity and gradually increase duration and intensity. Listen to your body and don't push too hard too quickly.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Step 3: Find Activities You Enjoy</h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Choose activities that you find enjoyable and can stick with long-term. This could be walking, swimming, dancing, gardening, or any other physical activity you enjoy.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Step 4: Monitor and Adjust</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Track your blood sugar responses to different types and intensities of exercise. Use this information to adjust your diabetes management plan as needed.
                </p>
              </div>
            </div>
          </section>

          {/* Exercise and Medications */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Exercise and Diabetes Medications</h2>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Considerations</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                Exercise can affect how your diabetes medications work. Here are some key points to discuss with your healthcare team:
              </p>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Insulin doses may need adjustment</li>
                <li>• Timing of medications may matter</li>
                <li>• Risk of hypoglycemia may increase</li>
                <li>• Some medications may affect exercise performance</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Making Exercise a Part of Your Life</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Regular exercise is one of the best things you can do for your diabetes management and overall health. Start small, be consistent, and work with your healthcare team to create a plan that works for you.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-primary-foreground font-medium">
                <strong>Remember:</strong> Every step counts! Even small amounts of physical activity can have significant benefits for your diabetes management. Use our tools to track your progress and celebrate your achievements.
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
            href="/articles/carb-counting-basics"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Carb Counting Basics: A Simple Guide</h3>
            <p className="text-sm text-foreground/70">Learn how to adjust your carbohydrate intake for exercise.</p>
          </Link>
          <Link 
            href="/articles/hypoglycemia-hyperglycemia"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Low vs High Blood Sugar: Spotting the Symptoms</h3>
            <p className="text-sm text-foreground/70">Understand how to recognize and respond to blood sugar changes during exercise.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
