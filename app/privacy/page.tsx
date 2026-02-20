export default function PrivacyPage() {
  return (
    <>
      <h1 className="h1">개인정보처리방침</h1>
      <p className="p">
        yunit은 문의 응대를 위해 최소한의 개인정보를 처리할 수 있습니다.
      </p>

      <div className="card section">
        <h3>1. 수집 항목</h3>
        <p>회사명, 담당자명, 이메일, 문의 내용(사용자가 입력한 정보)</p>

        <h3 style={{ marginTop: 14 }}>2. 이용 목적</h3>
        <p>문의 응대 및 견적/제안서 제공</p>

        <h3 style={{ marginTop: 14 }}>3. 보관 기간</h3>
        <p>문의 처리 완료 후 내부 기준에 따라 보관 또는 삭제</p>

        <h3 style={{ marginTop: 14 }}>4. 문의</h3>
        <p>ceo@yunitmed.com</p>
      </div>
    </>
  );
}
