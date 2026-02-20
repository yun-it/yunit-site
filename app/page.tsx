import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <p className="eyebrow">Vision</p>
        <h1 className="headline">
          Structure First.<br />
          본질은 약의 문제가 아닙니다.<br />
          구조의 문제입니다.
        </h1>
        <p className="lead">
          YUNIT은 시장을 이해하고 처방의 구조를 설계하며 전략을 실행으로 완성합니다.<br />
          단순한 판매회사가 아닙니다. 우리는 구조를 설계하는 회사입니다.
        </p>
        <a className="btn" href="/contact">Consult with YUNIT</a>
      </section>

      {/* WHY YUNIT */}
      <section className="section">
        <h2 className="h2">WHY YUNIT</h2>
        <p className="lead">
          매출은 사람이 만듭니다.<br />
          성과는 구조가 만듭니다.
        </p>
        <ul className="bullets">
          <li>제품이 좋아도 구조가 틀리면 성장하지 못합니다.</li>
          <li>채널이 왜곡되면 전략은 힘을 잃습니다.</li>
          <li>YUNIT은 시장을 분석하고 채널을 재정의하며 수익 중심 구조로 재설계합니다.</li>
        </ul>
      </section>

      {/* 3대 사업영역 */}
      <section className="section">
        <h2 className="h2">3대 사업영역</h2>
        <div className="grid3">
          <div className="card">
            <h3 className="h3">01. Marketing Architecture</h3>
            <p>처방이 만들어지는 이유를 설계합니다.</p>
          </div>
          <div className="card">
            <h3 className="h3">02. Strategic Consulting</h3>
            <p>채널과 수익 구조를 재정의합니다.</p>
          </div>
          <div className="card">
            <h3 className="h3">03. Sales Execution</h3>
            <p>전략을 현장에서 실행으로 완성합니다.</p>
          </div>
        </div>
      </section>

      {/* CEO DIRECTION */}
      <section className="quote">
        <p className="quoteText">매출은 사람이 만듭니다. 성과는 구조가 만듭니다.</p>
        <p className="quoteBy">— CEO 엄윤식</p>
      </section>
    </main>
  );
}
