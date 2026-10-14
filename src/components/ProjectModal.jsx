// src/components/ProjectModal.jsx
import React, { useEffect, useState } from 'react';
import { 
  X, 
  Calendar, 
  UserCheck, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  Image as ImageIcon,
  Presentation,
  FolderOpen
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  const [imageError, setImageError] = useState(false);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // 모달 오픈 시 배경 스크롤 방지
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* 바깥 배경 클릭 시 닫기 */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-label="모달 닫기"
      />

      {/* 모달 본체 (듀오링고 스타일의 라운드 팝업) */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl border-2 border-[#E5E5E5] border-b-6 shadow-2xl overflow-hidden flex flex-col z-10 animate-scaleUp">
        
        {/* 상단 헤더 바 */}
        <div className="px-6 py-4 border-b-2 border-[#E5E5E5] flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-blue-100 text-[#1CB0F6]">
              {project.code}
            </span>
            <span className="text-xs font-bold text-gray-500">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors border border-gray-300"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 모달 스크롤 본문 */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* 상단 대형 이미지 플레이스홀더 영역 */}
          <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            {!imageError ? (
              <img
                src={project.imagePath}
                alt={project.title}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : null}

            {imageError && (
              <div className="text-center space-y-2 select-none">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white text-gray-400 flex items-center justify-center border border-gray-200 shadow-sm">
                  <ImageIcon className="w-7 h-7 text-[#1CB0F6]" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white text-gray-700 border border-gray-200 shadow-sm">
                    📁 이미지 대체 파일명: <strong className="text-[#1CB0F6]">{project.imageFileName}</strong>
                  </span>
                  <p className="text-[11px] text-gray-400 mt-1">
                    추후 <code>public/images/projects/{project.imageFileName}</code> 경로에 이미지를 넣으시면 자동 표시됩니다.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 프로젝트 타이틀 및 기본 정보 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#3C3C3C] mb-2 leading-snug">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-orange-500" />
                {project.period}
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#58CC02]" />
                {project.role}
              </span>
            </div>
          </div>

          {/* 태그 리스트 */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-xl text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 기획 배경 & 타겟 학습자 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
              <span className="text-xs font-bold text-[#1CB0F6] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> 기획 의도 및 배경
              </span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {project.details.background}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1">
              <span className="text-xs font-bold text-[#FF9600] flex items-center gap-1.5">
                <Target className="w-4 h-4" /> 교육 대상 (Target)
              </span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {project.details.targetAudience}
              </p>
            </div>
          </div>

          {/* 파워포인트 슬라이드 핵심 특징 및 구성 */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-black text-[#3C3C3C] flex items-center gap-1.5">
              <Presentation className="w-4 h-4 text-[#58CC02]" />
              파워포인트(PPT) 교안 주요 구성 요소
            </h4>
            <div className="space-y-2">
              {project.details.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-200/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#58CC02] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 기대 효과 및 성과 */}
          <div className="p-4 rounded-2xl bg-green-50 border-2 border-green-200">
            <h4 className="text-xs font-black text-[#46A302] uppercase tracking-wider mb-1">
              🎉 교육적 성과 및 기대 효과
            </h4>
            <p className="text-xs sm:text-sm text-gray-800 font-semibold leading-relaxed">
              {project.details.results}
            </p>
          </div>

        </div>

        {/* 모달 하단 액션 바 */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="duo-btn-white px-6 py-2.5 text-sm"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
