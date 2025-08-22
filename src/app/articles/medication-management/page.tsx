import Link from "next/link";

export default function MedicationManagementPage() {
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
          <span className="inline-flex items-center rounded-md bg-orange-500/10 text-orange-600 px-2 py-1 text-xs font-medium">
            Treatment
          </span>
          <span className="text-sm text-foreground/60">12 min read</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-4">
          Diabetes Medication Management: What You Need to Know
        </h1>
        
        <p className="text-lg text-foreground/80 leading-relaxed">
          Understand different types of diabetes medications, their side effects, and how to manage them effectively for optimal blood sugar control.
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Understanding Diabetes Medications</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Diabetes medications are essential tools for managing blood sugar levels when diet and exercise alone aren't sufficient. There are many different types of medications available, each working in different ways to help control diabetes. Understanding your medications is crucial for effective diabetes management.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              This guide will help you understand the different types of diabetes medications, how they work, potential side effects, and important considerations for safe and effective use.
            </p>
            <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-sm text-orange-800 dark:text-orange-200">
                <strong>Important:</strong> Always work closely with your healthcare team to determine the best medication regimen for your individual needs. Never adjust your medications without consulting your doctor.
              </p>
            </div>
          </section>

          {/* Types of Diabetes Medications */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Diabetes Medications</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Insulin</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  Insulin is a hormone that helps glucose enter cells for energy. People with Type 1 diabetes need insulin injections, and some people with Type 2 diabetes may also require insulin.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Types:</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Rapid-acting (Humalog, Novolog)</li>
                      <li>• Short-acting (Regular)</li>
                      <li>• Intermediate-acting (NPH)</li>
                      <li>• Long-acting (Lantus, Levemir)</li>
                      <li>• Ultra-long-acting (Tresiba)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Administration:</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Injections (pens, syringes)</li>
                      <li>• Insulin pumps</li>
                      <li>• Inhalable insulin</li>
                      <li>• Multiple daily injections</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Oral Medications</h3>
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  Oral medications are pills taken by mouth to help manage blood sugar levels. They work in different ways and are often used in combination.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Common Types:</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Metformin (Glucophage)</li>
                      <li>• Sulfonylureas</li>
                      <li>• DPP-4 inhibitors</li>
                      <li>• SGLT2 inhibitors</li>
                      <li>• GLP-1 receptor agonists</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">How They Work:</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Reduce glucose production</li>
                      <li>• Increase insulin sensitivity</li>
                      <li>• Stimulate insulin release</li>
                      <li>• Slow glucose absorption</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Injectable Medications (Non-Insulin)</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  Some diabetes medications are injected but are not insulin. These include GLP-1 receptor agonists and amylin analogs.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Examples:</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• GLP-1 agonists (Ozempic, Trulicity)</li>
                      <li>• Amylin analogs (Symlin)</li>
                      <li>• Combination medications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Benefits:</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Weight loss</li>
                      <li>• Lower blood pressure</li>
                      <li>• Heart protection</li>
                      <li>• Once-weekly dosing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Medications */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Common Diabetes Medications and Their Effects</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-foreground/20 rounded-lg">
                <thead>
                  <tr className="bg-foreground/5">
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">Medication</th>
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">How It Works</th>
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">Common Side Effects</th>
                    <th className="border border-foreground/20 px-4 py-3 text-left font-semibold">Dosing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">Metformin</td>
                    <td className="border border-foreground/20 px-4 py-3">Reduces glucose production in liver</td>
                    <td className="border border-foreground/20 px-4 py-3">Nausea, diarrhea, stomach upset</td>
                    <td className="border border-foreground/20 px-4 py-3">1-3 times daily</td>
                  </tr>
                  <tr className="bg-foreground/5">
                    <td className="border border-foreground/20 px-4 py-3">Sulfonylureas</td>
                    <td className="border border-foreground/20 px-4 py-3">Stimulates insulin release</td>
                    <td className="border border-foreground/20 px-4 py-3">Hypoglycemia, weight gain</td>
                    <td className="border border-foreground/20 px-4 py-3">1-2 times daily</td>
                  </tr>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">DPP-4 Inhibitors</td>
                    <td className="border border-foreground/20 px-4 py-3">Increases insulin, reduces glucagon</td>
                    <td className="border border-foreground/20 px-4 py-3">Headache, upper respiratory infection</td>
                    <td className="border border-foreground/20 px-4 py-3">Once daily</td>
                  </tr>
                  <tr className="bg-foreground/5">
                    <td className="border border-foreground/20 px-4 py-3">SGLT2 Inhibitors</td>
                    <td className="border border-foreground/20 px-4 py-3">Removes glucose through urine</td>
                    <td className="border border-foreground/20 px-4 py-3">Frequent urination, dehydration</td>
                    <td className="border border-foreground/20 px-4 py-3">Once daily</td>
                  </tr>
                  <tr>
                    <td className="border border-foreground/20 px-4 py-3">GLP-1 Agonists</td>
                    <td className="border border-foreground/20 px-4 py-3">Slows digestion, increases insulin</td>
                    <td className="border border-foreground/20 px-4 py-3">Nausea, vomiting, injection site reactions</td>
                    <td className="border border-foreground/20 px-4 py-3">Daily to weekly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Medication Management Tips */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Medication Management Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Timing and Consistency</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Take medications at the same time daily</li>
                    <li>• Set reminders on your phone</li>
                    <li>• Use a pill organizer</li>
                    <li>• Don't skip doses</li>
                    <li>• Plan ahead for travel</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Storage and Handling</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Store in a cool, dry place</li>
                    <li>• Keep insulin refrigerated</li>
                    <li>• Check expiration dates</li>
                    <li>• Don't freeze medications</li>
                    <li>• Keep out of reach of children</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Monitoring and Tracking</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Check blood sugar regularly</li>
                    <li>• Keep a medication log</li>
                    <li>• Note any side effects</li>
                    <li>• Track blood sugar patterns</li>
                    <li>• Report changes to your doctor</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Communication</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Tell all healthcare providers</li>
                    <li>• Report new medications</li>
                    <li>• Ask about interactions</li>
                    <li>• Discuss side effects</li>
                    <li>• Keep medication list updated</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Side Effects and Safety */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Side Effects and Safety Considerations</h2>
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mb-4">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Common Side Effects</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Gastrointestinal:</h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Nausea and vomiting</li>
                    <li>• Diarrhea</li>
                    <li>• Stomach upset</li>
                    <li>• Loss of appetite</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Other Effects:</h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Hypoglycemia (low blood sugar)</li>
                    <li>• Weight gain or loss</li>
                    <li>• Headache</li>
                    <li>• Dizziness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">When to Contact Your Doctor</h3>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• Severe or persistent side effects</li>
                <li>• Signs of allergic reaction (rash, swelling, difficulty breathing)</li>
                <li>• Frequent hypoglycemia</li>
                <li>• Unexplained weight loss</li>
                <li>• Changes in vision or other symptoms</li>
              </ul>
            </div>
          </section>

          {/* Medication Interactions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Medication Interactions</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Diabetes medications can interact with other drugs, supplements, and even certain foods. It's important to inform all your healthcare providers about all medications you're taking.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Common Interactions</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Corticosteroids (increase blood sugar)</li>
                  <li>• Beta-blockers (mask hypoglycemia)</li>
                  <li>• Alcohol (risk of hypoglycemia)</li>
                  <li>• Some antibiotics</li>
                  <li>• Herbal supplements</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Prevention Tips</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Keep a complete medication list</li>
                  <li>• Tell all providers about all medications</li>
                  <li>• Ask about interactions</li>
                  <li>• Read medication labels</li>
                  <li>• Use one pharmacy when possible</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cost and Insurance */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Managing Medication Costs</h2>
            <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 mb-4">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Cost-Saving Strategies</h3>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Ask about generic alternatives</li>
                <li>• Check for manufacturer assistance programs</li>
                <li>• Compare prices at different pharmacies</li>
                <li>• Use mail-order pharmacies</li>
                <li>• Ask about 90-day supplies</li>
                <li>• Check for prescription discount cards</li>
              </ul>
            </div>
          </section>

          {/* Working with Healthcare Team */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Working with Your Healthcare Team</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Effective medication management requires ongoing communication with your healthcare team. Regular check-ins help ensure your medications are working properly and can be adjusted as needed.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Questions to Ask</h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• How does this medication work?</li>
                  <li>• What are the side effects?</li>
                  <li>• When should I take it?</li>
                  <li>• What if I miss a dose?</li>
                  <li>• How will I know if it's working?</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Monitoring Plan</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Regular blood sugar checks</li>
                  <li>• HbA1c testing</li>
                  <li>• Kidney function tests</li>
                  <li>• Liver function tests</li>
                  <li>• Blood pressure monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Taking Control of Your Medication Management</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Understanding your diabetes medications is an important part of managing your condition effectively. By working closely with your healthcare team, staying informed about your medications, and following your treatment plan, you can achieve better blood sugar control and reduce your risk of complications.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-primary-foreground font-medium">
                <strong>Remember:</strong> Your medication regimen is unique to you. What works for someone else may not work for you. Stay in regular contact with your healthcare team and don't hesitate to ask questions or report concerns about your medications.
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
            <p className="text-sm text-foreground/70">Learn how medications affect your long-term blood sugar control.</p>
          </Link>
          <Link 
            href="/articles/hypoglycemia-hyperglycemia"
            className="p-4 rounded-lg border border-foreground/20 hover:bg-foreground/5 transition-colors"
          >
            <h3 className="font-semibold mb-2">Low vs High Blood Sugar: Spotting the Symptoms</h3>
            <p className="text-sm text-foreground/70">Understand how medications can affect your blood sugar levels.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
