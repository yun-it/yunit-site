"use client";

import { useMemo, useState } from "react";

export default function ContactPage() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const to = "contact@yunit.co.kr"; // 여기만 본인 이메일로 바꿔
    const subject = encodeURIComponent(`[yunit 문의] ${company || "회사명 미기재"}`);
    const body = encodeURIComponent(
      `회사명: ${company}\n담당자: ${name}\n이메일: ${email}\n\n문의내용:\n${message}\n`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [company, name, email, message]);

  return (
    <>
      <h1 className="h1">문의하기</h1>
      <p className="p">
        아래 내용을 채우고 버튼을 누르면 메일 작성 화면이 열립니다.
      </p>

      <div className="card section">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label>회사명</label>
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="예) yunit" />
          </div>
          <div className="field">
            <label>담당자명</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="예) 홍길동" />
          </div>
          <div className="field">
            <label>이메일</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="예) name@company.com" />
          </div>
          <div className="field">
            <label>문의 내용</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="요청 범위, 일정, 지역, 제품/타깃 등" />
          </div>

          <a className="btn primary" href={mailto}>
            메일로 보내기
          </a>
        </form>
      </div>
    </>
  );
}
