// src/components/Header.jsx
import React, { useState } from 'react';
import { Sparkles, GraduationCap, Flame, Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'INTRO', href: '#intro' },
    { name: 'PROFILE', href: '#profile' },
    { name: 'PROJECT', href: '#project' },
    { name: 'HOBBY', href: '#hobby' },
    { name: 'SITEMAP', href: '#sitemap' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 & 슬로건 */}
        <a href="#intro" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#58CC02] text-white flex items-center justify-center font-black text-xl shadow-sm border-b-2 border-[#46A302] group-hover:scale-105 transition-transform">
            YJ
          </div>
          <div className="text-left">
            <span className="font-extrabold text-lg text-[#3C3C3C] group-hover:text-[#58CC02] transition-colors">
              윤진의 포트폴리오
            </span>
            <span className="hidden sm:block text-xs text-[#777777] font-medium">
              예비 교육 전문가 · 나윤진
            </span>
          </div>
        </a>

        {/* 데스크탑 네비게이션 (시안 상단 메뉴 스타일) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 rounded-xl font-bold text-sm text-[#777777] hover:text-[#1CB0F6] hover:bg-blue-50 transition-colors uppercase tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* 우측 듀오링고 스타일 상태 뱃지 (시안 상단 아이콘+숫자 UI 차용) */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 font-bold text-xs" title="열정 지수">
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
            <span>열정 100%</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 border border-blue-200 text-[#1CB0F6] font-bold text-xs" title="희망 직무">
            <GraduationCap className="w-4 h-4 text-[#1CB0F6]" />
            <span>교육 직무</span>
          </div>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-bold text-sm text-[#4B4B4B] hover:bg-gray-100"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
