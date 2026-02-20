export default function AboutPage() {
  return (
    <>
      <section className="section">
        <h1 className="headline">Who We Are</h1>
        <p className="lead">구조 설계형 전략 회사</p>

        <p className="lead">
          YUNIT은 제품을 판매하는 회사가 아닙니다.<br />
          우리는 시장의 흐름과 처방의 구조를 분석하고<br />
          성장을 가능하게 하는 구조를 설계합니다.
        </p>

        <p className="muted" style={{ marginTop: "18px" }}>
          많은 기업이 ‘제품’과 ‘영업 인력’에 집중합니다.<br />
          그러나 시장은 구조로 움직입니다.
        </p>

        <ul className="bullets" style={{ marginTop: "18px" }}>
          <li>잘못 설계된 채널</li>
          <li>분산된 타깃</li>
          <li>모호한 메시지</li>
          <li>수익성이 고려되지 않은 전략</li>
        </ul>

        <p className="muted" style={{ marginTop: "18px" }}>
          이 문제를 해결하지 않으면<br />
          매출은 일시적일 뿐, 성장은 지속되지 않습니다.
        </p>

        <p className="lead" style={{ marginTop: "24px" }}>
          YUNIT은<br />
          시장을 진단하고<br />
          채널을 재설계하며<br />
          선택과 집중 전략을 수립하고<br />
          실행 가능한 영업 구조를 만듭니다.
        </p>

        <p className="lead" style={{ marginTop: "24px" }}>
          우리는 단기 매출을 만드는 회사가 아니라<br />
          지속 가능한 구조를 설계하는 전략 파트너입니다.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">대표 인사말</h2>

        <p>
          안녕하십니까.<br />
          주식회사 유닛 대표 엄윤식입니다.<br /><br />

          30년 이상 제약 영업 현장에서 경험하며 깨달은 것은<br />
          매출은 사람이 만들지만, 성과는 구조가 만든다는 사실입니다.<br /><br />

          많은 회사들이 제품과 인력에 집중합니다.<br />
          그러나 시장은 구조로 움직입니다.<br /><br />

          제품이 아무리 좋아도 채널이 잘못 설계되어 있으면 성장은 제한됩니다.<br />
          전략이 명확하지 않으면 영업은 방향을 잃습니다.<br /><br />

          YUNIT은 판매를 대행하는 회사가 아닙니다.<br />
          우리는 구조를 설계합니다.<br /><br />

          시장 구조를 진단하고<br />
          채널을 재설계하며<br />
          선택과 집중 전략을 통해<br />
          지속 가능한 수익 모델을 만듭니다.<br /><br />

          단기 매출이 아닌<br />
          구조적 성장의 파트너가 되겠습니다.<br /><br />

          감사합니다.
        </p>

        <p className="muted">주식회사 유닛 / 대표 엄윤식</p>
      </section>

      <section className="section">
        <h2 className="h2">Company Overview</h2>
        <p>YUNIT은 제약 시장의 구조를 설계하는 전략 회사입니다.</p>

        <div className="grid3">
          <div className="card">
            <b>Marketing Architecture</b>
          </div>
          <div className="card">
            <b>Strategic Consulting</b>
          </div>
          <div className="card">
            <b>Sales Execution</b>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Our Philosophy</h2>
        <p className="lead">본질은 약이 아닙니다. 구조입니다.</p>

        <ul className="bullets">
          <li>선택과 집중</li>
          <li>수익성 중심 전략</li>
          <li>실행 가능한 설계</li>
        </ul>
      </section>
    </>
  );
}