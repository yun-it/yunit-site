import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        

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
          제약 시장의 유통·처방·영업 구조를 설계하는 전략 파트너
          <br />
          YUNIT
        </p>
      </section>

      <section className="section">
        <div className="grid3">
          <div className="card">
            <h3 className="h3">01</h3>
            <p>선택과 집중</p>
          </div>

          <div className="card">
            <h3 className="h3">02</h3>
            <p>수익성 중심 전략</p>
          </div>

          <div className="card">
            <h3 className="h3">03</h3>
            <p>실행 가능한 설계</p>
          </div>
        </div>
      </section>
    </main>
  );
}