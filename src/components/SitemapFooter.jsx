// src/components/SitemapFooter.jsx
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileDown, Mail, Phone, ExternalLink, ArrowUp, Sparkles, GraduationCap } from 'lucide-react';

export const SitemapFooter = () => {
  const { sitemap, profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="sitemap" className="bg-white border-t-2 border-[#E5E5E5] pt-14 pb-12 px-4 mt-12">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* 1. 최하단 Resume PDF 다운로드 CTA 배너 (시안의 볼드한 파란색 3D 버튼 강조) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-green-50 border-2 border-[#1CB0F6]/30 border-b-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1CB0F6] text-xs font-black">
              <GraduationCap className="w-4 h-4" />
              <span>채용 담당자 전용 원클릭 서류</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#3C3C3C]">
              나윤진 님의 이력서가 준비되어 있습니다
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-lg">
              상세한 학력, 보유 역량, 프로젝트 세부 성과가 담긴 PDF 이력서를 바로 다운로드하여 검토하실 수 있습니다.
            </p>
          </div>

          {/* 대형 다운로드 버튼 */}
          <a
            href={sitemap.resumeDownloadUrl}
            download={sitemap.resumeFileName}
            className="duo-btn-blue px-7 py-4 text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-md hover:scale-103 transition-transform shrink-0 w-full md:w-auto"
          >
            <FileDown className="w-6 h-6" />
            <span>이력서 (PDF) 다운로드</span>
          </a>
        </div>

        {/* 2. 사이트맵 네비게이션 & 연락처 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-gray-100">
          
          {/* 좌측: 포트폴리오 브랜드 요약 */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#58CC02] text-white flex items-center justify-center font-black text-sm">
                YJ
              </div>
              <span className="font-black text-lg text-[#3C3C3C]">윤진의 포트폴리오</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              아이들의 눈높이에서 소통하고 공감하는 교육 콘텐츠를 만듭니다. 
              성장하는 교육 전문가 나윤진의 웹 포트폴리오입니다.
            </p>
            <div className="text-xs text-gray-400 font-medium">
              생년월일: 2006.08.18 | 직무: 교육 관련
            </div>
          </div>

          {/* 중앙: 사이트맵 (Sitemap Links) */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
              SITEMAP
            </h4>
            <ul className="space-y-2">
              {sitemap.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-bold text-gray-600 hover:text-[#1CB0F6] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 우측: 연락처 및 상단 이동 버튼 */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                CONTACT
              </h4>
              <div className="space-y-2 text-xs text-gray-600 font-medium">
                <a
                  href={`mailto:${sitemap.contactInfo.email}`}
                  className="flex items-center justify-center md:justify-start gap-2 hover:text-[#1CB0F6]"
                >
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{sitemap.contactInfo.email}</span>
                </a>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{sitemap.contactInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* 맨 위로 스크롤 버튼 */}
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="duo-btn-white px-3.5 py-2 text-xs flex items-center justify-center gap-1.5 mx-auto md:mx-0 w-full md:w-auto"
                aria-label="최상단으로 이동"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>맨 위로 가기</span>
              </button>
            </div>
          </div>

        </div>

        {/* 3. 하단 카피라이트 */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <span>{sitemap.contactInfo.copyright}</span>
          <span>Designed with Duolingo-inspired EdTech UI</span>
        </div>

      </div>
    </footer>
  );
};
