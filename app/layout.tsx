import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "yunit | CSO (제약 영업·마케팅 대행)",
  description: "제약 CSO 영업대행, 학술지원, 런칭 전략, 리포팅까지. yunit.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              yunit
            </Link>
            <nav className="nav">
              <Link href="/services">서비스</Link>
              <Link href="/about">회사소개</Link>
              <Link href="/contact" className="cta">
                문의하기
              </Link>
            </nav>
          </div>
        </header>

        <main className="container main">{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-left">
              <div className="footer-brand">yunit</div>
              <div className="footer-meta">
                CSO (제약 영업·마케팅 대행) · Compliance 중심 운영
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
