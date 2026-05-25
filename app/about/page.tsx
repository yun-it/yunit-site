export default function AboutPage() {
  return (
    <main className="container">
      <section className="section">
        <h1 className="headline">About YUNIT</h1>
        <p className="lead">구조 설계형 전략 회사</p>

        <p className="lead">
          YUNIT은 제품을 판매하는 회사가 아닙니다.<br />
          우리는 시장의 흐름과 처방의 구조를 분석하고<br />
          성장을 가능하게 하는 구조를 설계합니다.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">CEO Message</h2>

        <p>
          안녕하십니까.<br />
          주식회사 유닛 대표 엄윤식입니다.<br /><br />
          30년 이상 제약 영업 현장에서 경험하며 깨달은 것은<br />
          매출은 사람이 만들지만, 성과는 구조가 만든다는 사실입니다.<br /><br />
          YUNIT은 판매를 대행하는 회사가 아닙니다.<br />
          우리는 구조를 설계합니다.<br /><br />
          단기 매출이 아닌<br />
          구조적 성장의 파트너가 되겠습니다.<br /><br />
          감사합니다.
        </p>

        <p className="muted">주식회사 유닛 / 대표 엄윤식</p>
      </section>

      <section className="section">
        <h2 className="h2">History</h2>
        <div className="card">
          <p>수십 년간의 경력 기반</p>
          <p>2026년 3월 1일 오픈</p>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Company</h2>

        <ul className="bullets">
          <li>시장 구조 진단</li>
          <li>채널 재설계</li>
          <li>선택과 집중 전략 수립</li>
          <li>실행 가능한 영업 구조 설계</li>
        </ul>
      </section>
    </main>
  );
}