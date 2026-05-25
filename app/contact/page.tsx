"use client";

import { useMemo, useState } from "react";

export default function ContactPage() {
  return (
    <main className="container">
      <section className="section">
        <h1 className="headline">Contact</h1>

        <p className="lead">
          구조를 바꾸는 전략 상담
        </p>

        <p className="muted">
          단순한 판매가 아닌<br />
          지속 가능한 성장 구조를 함께 설계합니다.
        </p>

        <ul className="bullets">
          <li>시장 구조 분석</li>
          <li>수익 구조 진단</li>
          <li>판매 전략 설계</li>
          <li>사업 리빌딩 컨설팅</li>
        </ul>

        <div className="card" style={{ marginTop: "32px" }}>
          <p><b>Email</b> : ceo@yunitmed.com</p>
        </div>
      </section>
    </main>
  );
}