export default function AboutPage() {
  return (
    <>
      <h1 className="h1">회사소개</h1>
      <p className="p">
        yunit은 제약 영업·마케팅 실행을 “재현 가능하게” 만드는 것을 목표로 합니다.
      </p>

      <div className="grid section">
        <div className="card">
          <h3>미션</h3>
          <p>현장에서 통하는 실행과, 설명 가능한 리포팅을 동시에.</p>
        </div>
        <div className="card">
          <h3>운영 원칙</h3>
          <p>Compliance 준수, 기록 기반, KPI 중심 운영.</p>
        </div>
        <div className="card">
          <h3>협업 방식</h3>
          <p>범위 정의 → 실행 → 정기 공유 → 개선 반복.</p>
        </div>
      </div>

      <div className="card section">
        <h3>컴플라이언스 안내</h3>
        <p>
          yunit은 관련 법령 및 의뢰사 내부 규정을 준수하며, 부적절한 제공/약속을
          지양합니다. 운영 기록과 근거를 기반으로 투명하게 수행합니다.
        </p>
      </div>
    </>
  );
}
