export default function ServicesPage() {
  return (
    <>
      <h1 className="h1">서비스</h1>
      <p className="p">
        필요한 범위만 모듈형으로 구성합니다. (영업/학술/런칭/리포팅)
      </p>

      <div className="grid section">
        <div className="card">
          <h3>Field Sales (영업대행)</h3>
          <p>
            타깃 리스트/콜플랜 수립, 현장 실행, KPI 기반 운영.
          </p>
        </div>
        <div className="card">
          <h3>Medical/Academic Support (학술지원)</h3>
          <p>
            핵심 메시지 정리, 자료 구성 지원, 피드백 루프 운영.
          </p>
        </div>
        <div className="card">
          <h3>Launch & Growth (런칭/확장)</h3>
          <p>
            시장/경쟁 분석, 런칭 로드맵, 초기 실행 지표 설계.
          </p>
        </div>
        <div className="card">
          <h3>Reporting (리포팅)</h3>
          <p>
            주간/월간 리포트, 이슈/인사이트 정리, 다음 액션 제안.
          </p>
        </div>
        <div className="card">
          <h3>Compliance (컴플라이언스)</h3>
          <p>
            내부 가이드 준수 기반 운영. 기록/근거 중심 프로세스.
          </p>
        </div>
        <div className="card">
          <h3>Custom (맞춤형)</h3>
          <p>
            제품/팀 구조에 맞춘 실행 설계. 필요 시 단계별 확장.
          </p>
        </div>
      </div>
    </>
  );
}
