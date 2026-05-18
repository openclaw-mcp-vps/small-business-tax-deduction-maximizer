export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Small Business &amp; Freelancers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Find every tax deduction<br className="hidden sm:block" /> you&apos;re missing
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your bank accounts and credit cards. We automatically categorize your business expenses and surface every deduction opportunity — so you keep more of what you earn.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving — $16/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No setup fees.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "$4,200", label: "Average annual savings found" },
            { stat: "2 min", label: "Setup with bank connection" },
            { stat: "100%", label: "IRS-compliant categorization" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{item.stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$16<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to maximize deductions</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited bank & card connections",
              "AI-powered expense categorization",
              "Missed deduction alerts",
              "Quarterly tax estimate reports",
              "Export to CSV / accountant-ready PDF",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">30-day money-back guarantee</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is my financial data secure?",
              a: "Yes. We connect via Plaid, the same bank-grade API used by thousands of financial apps. We never store your banking credentials and all data is encrypted at rest and in transit."
            },
            {
              q: "What types of deductions can it find?",
              a: "Home office, vehicle mileage, software subscriptions, meals, travel, equipment, professional services, and dozens more categories — automatically matched to IRS Schedule C guidelines."
            },
            {
              q: "Do I need an accountant to use this?",
              a: "No. TaxMax is designed for non-accountants. We surface plain-English summaries and export reports your accountant will love if you choose to work with one."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} TaxMax. All rights reserved.
      </footer>
    </main>
  );
}
