"use client";

import { useMemo, useState } from "react";

export default function ContactPage() {
  return (
    <main className="container">
      <section className="section">
        <h1 className="headline">CONTACT</h1>
        <p className="lead">
          단순 문의가 아니라<br />
          전략 상담을 요청하십시오.
        </p>
        <ul className="bullets">
          <li>시장 구조 진단</li>
          <li>사업 리빌딩 상담</li>
          <li>판매 구조 설계 문의</li>
        </ul>
        <p className="muted">YUNIT은 실행을 전제로 상담합니다.</p>

        <div className="card">
          <p><b>Email</b>: ceo@yunitmed.com</p>
          {/* 필요하면 폼 추가 */}
        </div>
      </section>
    </main>
  );
}