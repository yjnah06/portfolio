// src/App.jsx
import React from 'react';
import { Header } from './components/Header';
import { IntroSection } from './components/IntroSection';
import { ProfileSection } from './components/ProfileSection';
import { ProjectSection } from './components/ProjectSection';
import { HobbySection } from './components/HobbySection';
import { SitemapFooter } from './components/SitemapFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col selection:bg-[#58CC02] selection:text-white">
      {/* 상단 고정 네비게이션 헤더 */}
      <Header />

      {/* 메인 포트폴리오 섹션 (intro - profile - project - hobby - sitemap 순서) */}
      <main className="flex-1">
        {/* 1. INTRO (Spline 3D + 중앙 타이틀) */}
        <IntroSection />

        {/* 2. PROFILE (인적사항, 내 소개, 아동심리상담사 자격증, PPT 스킬) */}
        <ProfileSection />

        {/* 3. PROJECT (가로 배너 5개 세로 배치, 플레이스홀더, 파일명 표기, 모달 팝업, 스켈레톤 UI) */}
        <ProjectSection />

        {/* 4. HOBBY (교육적 감성의 취미 카드) */}
        <HobbySection />
      </main>

      {/* 5. SITEMAP & 이력서 PDF 다운로드 푸터 */}
      <SitemapFooter />
    </div>
  );
}
