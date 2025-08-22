export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-md bg-primary/10 text-primary px-2 py-1 text-xs font-medium">Legal</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
          <span className="text-gradient-animation">Privacy Policy</span>
        </h1>
      </div>
      
      <p className="mt-3 text-base sm:text-lg text-foreground/80 max-w-4xl mb-8">
        At DiabetesHelp, we are committed to protecting your privacy and ensuring the security of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our diabetes management platform and related services.
      </p>

      <div className="space-y-8">
        {/* Information Collection and Use */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Information Collection and Use</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              We collect information that you provide directly to us, including personal identification information such as your name, email address, phone number, and date of birth. Additionally, we collect health-related information including glucose readings, medication schedules, dietary preferences, and medical history that you choose to share through our platform. This information is essential for providing personalized diabetes management recommendations and connecting you with appropriate healthcare providers.
            </p>
            <p>
              We also automatically collect certain technical information when you use our services, including your IP address, browser type, device information, and usage patterns. This data helps us improve our platform&apos;s functionality, security, and user experience. We may use cookies and similar tracking technologies to enhance your browsing experience and provide personalized content based on your preferences and usage history.
            </p>
          </div>
        </section>

        {/* Data Security and Protection */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Data Security and Protection</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              Your privacy and the security of your health information are our top priorities. We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. All data transmitted between your device and our servers is encrypted using SSL/TLS protocols, ensuring that your sensitive health information remains secure during transmission.
            </p>
            <p>
              We maintain strict access controls and regularly audit our security practices to ensure compliance with healthcare data protection regulations, including HIPAA (Health Insurance Portability and Accountability Act) where applicable. Our servers are hosted in secure, certified data centers with redundant backup systems and disaster recovery procedures. We also conduct regular security assessments and penetration testing to identify and address potential vulnerabilities in our systems.
            </p>
          </div>
        </section>

        {/* Information Sharing and Disclosure */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0-3.933-2.185 2.25 2.25 0 0 0 3.933 2.185Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Information Sharing and Disclosure</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              We do not sell, trade, or rent your personal information to third parties for marketing purposes. However, we may share your information in specific circumstances: with your explicit consent, to provide requested services (such as connecting you with healthcare providers), or when required by law. We may also share aggregated, anonymized data for research purposes to improve diabetes care and treatment outcomes, but this data cannot be used to identify individual users.
            </p>
            <p>
              When you choose to book appointments with healthcare providers through our platform, we share only the necessary information required to facilitate the booking, such as your name, contact details, and appointment preferences. We work with trusted third-party service providers who assist us in operating our platform, processing payments, and providing customer support. These partners are bound by strict confidentiality agreements and are prohibited from using your information for any purpose other than providing services to us.
            </p>
          </div>
        </section>

        {/* Your Rights and Choices */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-purple-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Your Rights and Choices</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              You have the right to access, update, correct, or delete your personal information at any time through your account settings or by contacting our support team. You can also request a copy of all the data we have collected about you in a portable format. If you choose to delete your account, we will permanently remove your personal information from our systems, except where we are required to retain certain information for legal or regulatory purposes.
            </p>
            <p>
              You have control over your privacy preferences and can choose what information to share with us. You can opt out of certain communications, such as marketing emails, while still receiving important service-related notifications. You can also manage your cookie preferences through your browser settings. We respect your choices and will honor your privacy preferences to the extent possible while still providing you with the services you request.
            </p>
          </div>
        </section>

        {/* Contact Information and Updates */}
        <section className="rounded-2xl border border-black/[.08] dark:border-white/[.12] p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-orange-500/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 text-orange-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Contact Information and Updates</h2>
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team at privacy@diabeteshelp.com or write to us at DiabetesHelp Privacy Office, 123 Health Plaza, Suite 100, Medical District, NY 10001. We are committed to responding to your inquiries within 30 days and will work with you to address any privacy-related issues or concerns you may have.
            </p>
            <p>
              This Privacy Policy may be updated from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and, where appropriate, sending you an email notification. We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
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
            This privacy policy is effective as of the date listed above and applies to all users of the DiabetesHelp platform.
          </p>
        </div>
      </div>
    </main>
  );
}


