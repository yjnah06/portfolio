// src/components/IntroSection.jsx
import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown, Sparkles, BookOpen } from 'lucide-react';

export const IntroSection = () => {
  const { intro } = portfolioData;
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <section id="intro" className="relative pt-6 pb-12 px-4 max-w-5xl mx-auto">
      {/* 3D 뷰어 컨테이너 (시안 느낌의 둥근 모서리 보더 카드) */}
      <div className="relative w-full h-[540px] md:h-[580px] bg-white rounded-3xl border-2 border-[#E5E5E5] border-b-6 shadow-sm overflow-hidden flex items-center justify-center">
        
        {/* Spline 3D iframe 임베드 */}
        <iframe
          src={intro.splineUrl}
          frameBorder="0"
          width="100%"
          height="100%"
          className={`w-full h-full transition-opacity duration-700 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsIframeLoaded(true)}
          title="Spline 3D Scene"
          allow="autoplay; fullscreen; vr"
        />

        {/* 로딩 인디케이터 (3D 에셋 로드 중일 때) */}
        {!isIframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50/50 to-white text-[#777777] gap-3">
            <div className="w-12 h-12 border-4 border-[#1CB0F6] border-t-transparent rounded-full animate-spin"></div>
            <p className="font-bold text-sm tracking-wide text-gray-500">
              {intro.fallbackText}
            </p>
          </div>
        )}

        {/* 중앙 타이틀 오버레이 레이어 (pointer-events-none을 주어 뒤의 3D 조작 가능) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none select-none">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E5E5] shadow-sm mb-4 pointer-events-auto">
            <Sparkles className="w-4 h-4 text-[#FFC800] fill-[#FFC800]" />
            <span className="text-xs font-bold text-[#4B4B4B] tracking-wide">
              EDUCATION & EMPATHY PORTFOLIO
            </span>
          </div>

          {/* 중앙 핵심 타이틀: '윤진의 포트폴리오' */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#3C3C3C] tracking-tight drop-shadow-sm mb-3">
            {intro.title}
          </h1>

          {/* 서브 슬로건 */}
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#58CC02] max-w-xl bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-xl border border-green-100 mb-2">
            "{intro.subtitle}"
          </p>
          <p className="text-xs sm:text-sm text-[#777777] max-w-md hidden sm:block">
            {intro.description}
          </p>

          {/* 프로필 바로가기 CTA 버튼 (포인터 이벤트 활성화) */}
          <div className="mt-6 pointer-events-auto flex items-center gap-3">
            <a
              href="#profile"
              className="duo-btn-green px-6 py-3 text-sm sm:text-base flex items-center gap-2 shadow-md hover:scale-102 transition-transform"
            >
              <BookOpen className="w-5 h-5" />
              <span>프로필 둘러보기</span>
            </a>
            <a
              href="#project"
              className="duo-btn-white px-5 py-3 text-sm sm:text-base hidden sm:inline-flex items-center gap-2"
            >
              <span>프로젝트 바로가기</span>
            </a>
          </div>
        </div>

        {/* 3D 인터랙션 안내 힌트 태그 */}
        <div className="absolute bottom-3 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-200 text-[11px] font-semibold text-gray-500 pointer-events-none">
          ✨ 3D 화면을 마우스로 드래그해보세요
        </div>
      </div>

      {/* 아래로 스크롤 유도 인디케이터 */}
      <div className="flex justify-center mt-6">
        <a
          href="#profile"
          className="flex flex-col items-center text-gray-400 hover:text-[#1CB0F6] transition-colors"
          aria-label="다음 섹션으로 스크롤"
        >
          <span className="text-xs font-bold tracking-widest uppercase mb-1">SCROLL</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
