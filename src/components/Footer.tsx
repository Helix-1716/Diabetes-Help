import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    items: [
      { label: "Home", href: "/" },
      { label: "Tools", href: "/tools" },
      { label: "Articles", href: "/articles" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex-1 min-w-[240px]">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              <span className="text-gradient-animation">Diabetes</span>Help
            </Link>
            <p className="mt-3 text-sm text-foreground/70 max-w-sm">
              Practical tools and evidence-based guidance to help you manage diabetes, every day.
            </p>
          </div>

          <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-foreground/90">{group.title}</h4>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-foreground/70 hover:text-primary transition-colors link-underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <p className="text-xs text-foreground/60" suppressHydrationWarning>© {new Date().getUTCFullYear()} DiabetesHelp. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="text-xs text-foreground/70 hover:text-primary link-underline"
            >
              Privacy
            </Link>
            <span className="text-foreground/20">•</span>
            <Link
              href="/terms"
              className="text-xs text-foreground/70 hover:text-primary link-underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


