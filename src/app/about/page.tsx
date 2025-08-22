export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance animate-fade-in-up">
        About <span className="text-gradient-animation">DiabetesHelp</span>
      </h1>
      <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-3xl animate-fade-in-up [animation-delay:100ms]">
        We build straightforward tools and clear guides to make daily diabetes management less stressful.
      </p>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-5">
          <h2 className="font-semibold">Our mission</h2>
          <p className="mt-2 text-sm text-foreground/80">Empower patients and caregivers with practical, evidence-based support.</p>
        </div>
        <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-5">
          <h2 className="font-semibold">How we work</h2>
          <p className="mt-2 text-sm text-foreground/80">We partner with clinicians and patients to design features that matter.</p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-gradient-to-br from-blue-500/5 to-sky-300/10">
            <h3 className="text-xl font-semibold text-primary">Why us?</h3>
            <p className="mt-3 text-foreground/80">
              DiabetesHelp stands out because we combine clinical expertise with user-friendly design. Our platform was built by a team of healthcare professionals, patients, and technology experts who understand the daily challenges of diabetes management. We focus on practical solutions that integrate seamlessly into your life, offering personalized tools backed by evidence-based approaches. Unlike generic health apps, we specialize exclusively in diabetes care, ensuring every feature directly addresses the specific needs of people living with diabetes.
            </p>
          </div>

          {/* Question 2 */}
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-gradient-to-br from-green-500/5 to-emerald-300/10">
            <h3 className="text-xl font-semibold text-green-600">What is unique in our website?</h3>
            <p className="mt-3 text-foreground/80">
              Our platform offers several unique features that set us apart. First, our AI-powered diet planning system creates personalized meal recommendations based on your glucose patterns, food preferences, and health goals. Second, we provide direct connections to certified diabetes educators and specialists through our secure telehealth portal. Third, our comprehensive tracking system integrates glucose readings, medication, diet, and exercise in one intuitive dashboard, giving you and your healthcare team a complete picture of your health. Finally, our community forum is moderated by healthcare professionals who provide accurate information and support.
            </p>
          </div>

          {/* Question 3 */}
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-gradient-to-br from-purple-500/5 to-violet-300/10">
            <h3 className="text-xl font-semibold text-purple-600">What will be precise percentage of diet?</h3>
            <p className="mt-3 text-foreground/80">
              Our recommended diet composition typically follows the balanced approach endorsed by diabetes associations: 45-65% of calories from carbohydrates (emphasizing complex carbs with low glycemic index), 15-20% from protein, and 20-35% from healthy fats. However, we recognize that diabetes management is highly individual. Our AI diet planner customizes these percentages based on your specific needs, considering factors like your type of diabetes, activity level, medication regimen, and personal health goals. The system continuously refines recommendations as it learns from your glucose responses to different foods, ensuring increasingly precise dietary guidance over time.
            </p>
          </div>

          {/* Question 4 */}
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-gradient-to-br from-orange-500/5 to-amber-300/10">
            <h3 className="text-xl font-semibold text-orange-600">How do the patients consult doctors?</h3>
            <p className="mt-3 text-foreground/80">
              Patients can consult with healthcare providers through our integrated telehealth system in three simple steps. First, browse our network of diabetes specialists, endocrinologists, and certified diabetes educators, filtering by specialty, experience, and availability. Second, schedule an appointment directly through our calendar system, choosing between video consultations or secure messaging. Third, connect at your scheduled time through our HIPAA-compliant video platform. Before consultations, you can share relevant health data from your DiabetesHelp dashboard, allowing providers to review your glucose trends, medication adherence, and lifestyle factors for more productive appointments.
            </p>
          </div>

          {/* Question 5 */}
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-6 bg-gradient-to-br from-red-500/5 to-rose-300/10">
            <h3 className="text-xl font-semibold text-red-600">How can the patients maintain their health?</h3>
            <p className="mt-3 text-foreground/80">
              Maintaining optimal health with diabetes requires a comprehensive approach that our platform supports through multiple integrated tools. Regular glucose monitoring using our tracking system helps identify patterns and triggers. Our meal planning tools assist with balanced nutrition, while our exercise guides provide safe workout options tailored to your fitness level. Medication reminders ensure consistent treatment adherence. Educational resources keep you informed about the latest diabetes management strategies. Regular check-ins with healthcare providers through our telehealth system allow for timely adjustments to your care plan. Finally, our stress management resources help address the emotional aspects of diabetes, which significantly impact physical health.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


