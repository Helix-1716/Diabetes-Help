export default function TermsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">Legal</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
          <span className="text-gradient-animation">Terms of Service</span>
        </h1>
      </div>
      
      <p className="mt-3 text-base sm:text-lg text-foreground/80 max-w-4xl mb-8">
        Welcome to DiabetesHelp. These Terms of Service govern your use of our diabetes management platform, tools, and services. By accessing or using our services, you agree to be bound by these terms and our Privacy Policy. Please read these terms carefully before using our platform.
      </p>

      <div className="space-y-8">
        {/* Service Description and Usage */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H21" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Service Description and Usage</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              DiabetesHelp provides a comprehensive diabetes management platform that includes glucose tracking tools, medication reminders, meal planning assistance, and connections to healthcare providers. Our services are designed to support individuals managing diabetes by providing educational resources, tracking capabilities, and access to professional medical guidance. Users can create accounts, log health data, receive personalized recommendations, and book appointments with healthcare professionals through our platform.
            </p>
            <p>
              You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our platform to transmit any harmful, offensive, or inappropriate content, or to attempt to gain unauthorized access to our systems or other users&apos; accounts. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We reserve the right to terminate or suspend your access to our services if you violate these terms or engage in any fraudulent or abusive behavior.
            </p>
          </div>
        </section>

        {/* Medical Disclaimer and Limitations */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Medical Disclaimer and Limitations</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              <strong>IMPORTANT:</strong> DiabetesHelp is not a substitute for professional medical advice, diagnosis, or treatment. The information, tools, and recommendations provided through our platform are for educational and informational purposes only. Always consult with qualified healthcare professionals, including your doctor, endocrinologist, or diabetes educator, before making any changes to your diabetes management plan, medication regimen, or treatment approach.
            </p>
            <p>
              We do not guarantee the accuracy, completeness, or usefulness of any information provided through our services. Medical information and recommendations may change over time, and individual responses to treatments can vary significantly. In case of medical emergencies, immediately contact emergency services or your healthcare provider. Our platform is not designed to handle emergency situations, and we are not responsible for any decisions made based on the information provided through our services.
            </p>
          </div>
        </section>

        {/* User Responsibilities and Conduct */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">User Responsibilities and Conduct</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              As a user of DiabetesHelp, you are responsible for providing accurate and truthful information when using our services. This includes maintaining up-to-date health records, accurately logging glucose readings, medication schedules, and other health-related data. You acknowledge that the quality of recommendations and services depends on the accuracy of the information you provide. You are also responsible for regularly reviewing and updating your health information to ensure it remains current and accurate.
            </p>
            <p>
              You agree to use our platform in a manner that respects the rights and privacy of other users and healthcare providers. This includes refraining from posting inappropriate content, harassing other users, or attempting to impersonate healthcare professionals. You must not use our services to distribute spam, malware, or any other harmful content. Additionally, you are responsible for ensuring that your use of our platform complies with all applicable local, state, and federal laws and regulations.
            </p>
          </div>
        </section>

        {/* Intellectual Property and Content */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-purple-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Intellectual Property and Content</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              All content, features, and functionality of the DiabetesHelp platform, including but not limited to text, graphics, logos, icons, images, software, and design elements, are owned by DiabetesHelp or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, reproduce, distribute, transmit, display, perform, or create derivative works from any of this content without our express written permission.
            </p>
            <p>
              By using our services, you retain ownership of any personal health data and content you submit to our platform. However, you grant us a limited, non-exclusive license to use, store, and process this information to provide our services to you. You represent and warrant that you have the right to share any information you provide through our platform and that such information does not violate any third-party rights or applicable laws. We respect your intellectual property rights and expect you to respect ours as well.
            </p>
          </div>
        </section>

        {/* Limitation of Liability and Legal Provisions */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-orange-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Limitation of Liability and Legal Provisions</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              To the maximum extent permitted by applicable law, DiabetesHelp and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services. Our total liability to you for any claims arising from your use of our platform shall not exceed the amount you have paid us in the twelve months preceding the claim.
            </p>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which DiabetesHelp operates. Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive any right to a jury trial or to participate in a class action lawsuit. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. These terms constitute the entire agreement between you and DiabetesHelp regarding your use of our services.
            </p>
          </div>
        </section>
      </div>

      {/* Last Updated */}
      <div className="mt-12 p-6 bg-background/60 rounded-xl border border-black/[.08] dark:border-white/[.12]">
        <div className="text-center">
          <p className="text-sm text-foreground/60">
            <strong>Last Updated:</strong> December 2024
          </p>
          <p className="text-xs text-foreground/50 mt-2">
            These terms of service are effective as of the date listed above and apply to all users of the DiabetesHelp platform.
          </p>
        </div>
      </div>
    </main>
  );
}


