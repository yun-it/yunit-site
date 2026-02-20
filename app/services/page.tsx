export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <h1 className="headline">SERVICES</h1>
      </section>

      {/* 3 SERVICES (PPT 문구 반영) */}
      <section className="section">
        <div className="stack">
          <div className="card">
            <h2 className="h2">🔷 Marketing Architecture</h2>
            <p className="lead" style={{ marginTop: "6px" }}>
              처방이 만들어지는 구조 설계
            </p>

            <p className="muted" style={{ marginTop: "14px" }}>
              우리는 광고를 하지 않습니다.<br />
              처방이 발생하는 이유를 설계합니다.
            </p>

            <ul className="bullets" style={{ marginTop: "14px" }}>
              <li>시장 세분화 및 경쟁 환경 분석</li>
              <li>제품 포지셔닝 전략 수립</li>
              <li>1제품 1핵심 메시지 개발</li>
              <li>학술 기반 콘텐츠 기획</li>
              <li>Launch 전략 설계</li>
              <li>타깃 중심 메시지 구조 설계</li>
            </ul>

            <p className="muted" style={{ marginTop: "14px" }}>
              단순 홍보가 아닌,<br />
              처방 흐름을 만드는 전략 설계입니다.
            </p>
          </div>

          <div className="card">
            <h2 className="h2">🔷 Strategic Consulting</h2>
            <p className="lead" style={{ marginTop: "6px" }}>
              채널과 수익 구조 재설계
            </p>

            <p className="muted" style={{ marginTop: "14px" }}>
              매출은 숫자가 아니라 구조의 결과입니다.
            </p>

            <ul className="bullets" style={{ marginTop: "14px" }}>
              <li>매출 구조 진단</li>
              <li>유통·채널 재정의</li>
              <li>선택과 집중 전략 수립</li>
              <li>수익성 중심 모델 설계</li>
              <li>사업 리빌딩 컨설팅</li>
            </ul>

            <p className="muted" style={{ marginTop: "14px" }}>
              우리는 매출을 올리는 것이 아니라<br />
              지속 가능한 구조를 만듭니다.
            </p>
          </div>

          <div className="card">
            <h2 className="h2">🔷 Sales Execution</h2>
            <p className="lead" style={{ marginTop: "6px" }}>
              전략을 실행으로 완성
            </p>

            <p className="muted" style={{ marginTop: "14px" }}>
              전략은 실행되지 않으면 의미가 없습니다.
            </p>

            <ul className="bullets" style={{ marginTop: "14px" }}>
              <li>핵심 병·의원 타깃 집중 공략</li>
              <li>Key Doctor 확산 구조 설계</li>
              <li>메시지 일원화 전략</li>
              <li>월 단위 성과 관리</li>
              <li>CSO 구조 운영</li>
            </ul>

            <p className="muted" style={{ marginTop: "14px" }}>
              판매는 사람이 합니다.<br />
              성과는 구조가 만듭니다.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STRUCTURE */}
      <section className="section">
        <h2 className="h2">CASE STRUCTURE</h2>
        <div className="grid2">
          <div className="card">
            <h3 className="h3">Before</h3>
            <ul className="bullets">
              <li>분산된 채널</li>
              <li>불명확한 메시지</li>
              <li>낮은 수익성</li>
              <li>관리되지 않는 타깃</li>
              <li>단기 중심 영업</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3">After</h3>
            <ul className="bullets">
              <li>핵심 타깃 집중</li>
              <li>단일 메시지 구조</li>
              <li>수익성 중심 전략</li>
              <li>채널 재정의</li>
              <li>구조적 매출 개선</li>
            </ul>
            <p className="muted" style={{ marginTop: "12px" }}>
              YUNIT은 결과가 아닌 구조를 바꿉니다.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <h2 className="h2">Mission</h2>
        <p className="lead">
          시장의 본질을 이해하고 구조를 설계하며 실행으로 완성한다.
        </p>
      </section>

      {/* VISION */}
      <section className="section">
        <h2 className="h2">Vision</h2>
        <p className="lead">
          대한민국 제약 유통 및 판매 구조를 재설계하는 전략 파트너.
        </p>
      </section>
    </>
  );
}