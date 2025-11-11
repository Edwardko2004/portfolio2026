// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Edward Ko | Portfolio",
  description:
    "Engineer & Data Engineer with a passion for analytics and helping those in need.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          {/* Global nav */}
          <header className="nav">
            <nav className="nav-inner">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/experience">Experience</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="footer">
            <span>© 2025 Edward Ko</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
