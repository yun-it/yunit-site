import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "YUNIT | Structure First",
  description:
    "YUNIT은 시장을 이해하고 처방의 구조를 설계하며 전략을 실행으로 완성합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="YUNIT 홈">
             <Image
              src="/logo.png"
              alt="YUNIT"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "160px", height: "auto" }}
              priority
            />
            </Link>

            <nav className="nav">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/contact">CONTACT</Link>
              <Link href="/privacy">PRIVACY</Link>

              <Link href="/contact" className="cta">
                Consult
              </Link>
            </nav>
          </div>
        </header>

        <main className="container main">{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-left">
              <div className="footer-brand">YUNIT</div>
              <div className="footer-meta">
                Structure First. 시장을 이해하고 구조를 설계하며 실행으로 완성합니다.
              </div>
            </div>

            <div className="footer-right">
              <Link href="/privacy">개인정보처리방침</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}