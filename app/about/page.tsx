import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container">
      <section className="section">
        <h1 className="headline">About</h1>
        <p className="lead">YUNIT을 소개합니다.</p>

        <div className="grid3">
          <Link className="card" href="/about/ceo">
            <h2 className="h2">CEO</h2>
            <p>대표 인사말</p>
          </Link>

          <Link className="card" href="/about/history">
            <h2 className="h2">History</h2>
            <p>수십 년간의 경력 기반</p>
          </Link>

          <Link className="card" href="/about/company">
            <h2 className="h2">Company</h2>
            <p>구조 설계형 전략 회사</p>
          </Link>
        </div>
      </section>
    </main>
  );
}