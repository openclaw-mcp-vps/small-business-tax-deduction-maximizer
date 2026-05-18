import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxMax — Find Every Deduction You're Missing",
  description: "Connect your bank accounts and credit cards to automatically categorize expenses and identify missed tax deductions. Built for small business owners and freelancers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a61534c8-d257-4b0e-9bf9-ddb2adb2bfe4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
