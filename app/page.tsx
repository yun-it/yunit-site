import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <p className="eyebrow">YUNIT</p>

        <h1 className="headline">
          본질은 약이 아닙니다.<br />
          구조입니다.
        </h1>

        <p className="lead">
          제품이 좋아도 구조가 틀리면 성장하지 못합니다.<br />
          채널이 왜곡되면 전략은 힘을 잃습니다.
        </p>

        <p className="lead">
          YUNIT은 시장을 분석하고<br />
          채널을 재정의하며<br />
          수익 중심 구조로 재설계합니다.
        </p>

        <p className="subtext">
          제약 시장의 유통·처방·영업 구조를 설계하는
          전략 파트너 YUNIT
        </p>

        <Link className="btn" href="/contact">
          Consult with YUNIT
        </Link>
      </section>

      {/* CORE */}
      <section className="section">
        <h2 className="h2">Core Strategy</h2>

        <div className="grid3">
          <div className="card">
            <h3 className="h3">01.</h3>
            <p>선택과 집중</p>
          </div>

          <div className="card">
            <h3 className="h3">02.</h3>
            <p>수익성 중심 전략</p>
          </div>

          <div className="card">
            <h3 className="h3">03.</h3>
            <p>실행 가능한 설계</p>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section className="section">
        <h2 className="h2">3대 사업 영역</h2>

        <div className="grid3">
          <div className="card">
            <h3 className="h3">Marketing Architecture</h3>
            <p>처방이 만들어지는 이유를 설계합니다.</p>
          </div>

          <div className="card">
            <h3 className="h3">Strategic Consulting</h3>
            <p>채널과 수익 구조를 재정의합니다.</p>
          </div>

          <div className="card">
            <h3 className="h3">Sales Execution</h3>
            <p>전략을 현장에서 실행으로 완성합니다.</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote">
        <p className="quoteText">
          매출은 사람이 만듭니다.<br />
          성과는 구조가 만듭니다.
        </p>

        <p className="quoteBy">— CEO 엄윤식</p>
      </section>
    </main>
  );
}