import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        {/* 움직이는 전체 배경 */}
        <div className="animated-bg"></div>

        {/* HEADER */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="YUNIT 홈">
              <img
                src="/logo.png"
                alt="YUNIT"
                style={{
                  width: "180px",
                  height: "auto",
                  display: "block",
                }}
              />
            </Link>

            <nav className="nav">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/contact">CONTACT</Link>
              <Link href="/privacy">PRIVACY</Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="container main">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-left">
              <div className="footer-brand">YUNIT</div>

              <div className="footer-meta">
                매출은 사람이 만듭니다. 성과는 구조가 만듭니다.

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