import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1 className="h1">제약 CSO 운영을 “결과 중심”으로.</h1>
        <p className="p">
          yunit은 영업대행·학술지원·런칭 전략·리포팅까지, 컴플라이언스 기반으로
          실행합니다.
        </p>

        <div className="hero-actions">
          <Link className="btn primary" href="/contact">
            프로젝트 문의
          </Link>
          <Link className="btn" href="/services">
            서비스 보기
          </Link>
        </div>

        <div className="kpis">
          <div className="kpi">
            <div className="label">운영 원칙</div>
            <div className="value">Compliance-first</div>
          </div>
          <div className="kpi">
            <div className="label">리포팅</div>
            <div className="value">주간/월간 KPI</div>
          </div>
          <div className="kpi">
            <div className="label">실행 범위</div>
            <div className="value">영업·학술·런칭</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>영업대행</h3>
            <p>타깃 세그먼트 설계 → 실행 → 성과 리포트까지 표준화된 프로세스.</p>
          </div>
          <div className="card">
            <h3>학술지원</h3>
            <p>핵심 메시지/자료 구성, 현장 피드백 수집 및 반복 개선.</p>
          </div>
          <div className="card">
            <h3>런칭/확장 전략</h3>
            <p>시장/경쟁 분석 기반의 런칭 플랜과 초기 트랙션 확보 지원.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h3>프로세스</h3>
          <p>
            1) 사전 미팅 → 2) 제안서/범위 정의 → 3) 계약/세팅 → 4) 실행 →
            5) 정기 리포트/개선
          </p>
        </div>
      </section>
    </>
  );
}
