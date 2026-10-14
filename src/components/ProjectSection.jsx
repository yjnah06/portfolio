// src/components/ProjectSection.jsx
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectSkeleton } from './ProjectSkeleton';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ChevronRight, 
  Calendar, 
  Layers, 
  Image as ImageIcon,
  Sparkles,
  Info
} from 'lucide-react';

export const ProjectSection = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  // 페이지 진입 시 스켈레톤 UI 시뮬레이션 (약 0.7초간 깜빡임 효과 후 렌더링)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="project" className="py-12 px-4 max-w-5xl mx-auto">
      {/* 섹션 헤더 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#FF9600] flex items-center justify-center font-bold">
            03
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3C3C3C]">
              PROJECTS
            </h2>
          </div>
          <span className="text-xs font-bold text-[#FF9600] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 ml-1">
            총 {projects.length}개 프로젝트
          </span>
        </div>

        {/* 이미지 교체 편의성 힌트 배지 */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white px-3 py-1.5 rounded-xl border border-gray-200 self-start sm:self-auto shadow-xs">
          <Info className="w-4 h-4 text-[#1CB0F6]" />
          <span>이미지는 <strong>public/images/projects/</strong>에 넣으면 자동 교체됩니다.</span>
        </div>
      </div>

      {/* 가로 배너 리스트의 세로(Vertical) 배치 */}
      <div className="space-y-4">
        {isLoading ? (
          // 스켈레톤 UI 렌더링 (동적 프로젝트 개수만큼 표시)
          Array.from({ length: projects.length }).map((_, idx) => (
            <ProjectSkeleton key={idx} />
          ))
        ) : (
          projects.map((project) => {
            const hasError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="duo-card-3d p-4 sm:p-5 cursor-pointer group flex flex-col md:flex-row gap-5 items-stretch transition-all"
              >
                {/* 1. 배너 좌측: 미리보기 이미지 플레이스홀더 영역 (가로 배너의 좌측 35~40%) */}
                <div className="w-full md:w-[320px] lg:w-[360px] h-48 md:h-auto min-h-[190px] rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 relative overflow-hidden flex flex-col items-center justify-center p-3 shrink-0 group-hover:border-[#1CB0F6] transition-colors">
                  
                  {/* 실제 이미지 파일이 폴더에 있는 경우 렌더링 */}
                  {!hasError ? (
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : null}

                  {/* 실제 이미지가 없거나 에러 시: 친절한 플레이스홀더 안내 UI */}
                  {hasError && (
                    <div className="text-center space-y-2 select-none px-2">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-white text-gray-400 flex items-center justify-center border border-gray-200 shadow-xs group-hover:scale-105 transition-transform">
                        <ImageIcon className="w-6 h-6 text-[#1CB0F6]" />
                      </div>
                      <div className="space-y-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-black bg-white text-gray-700 border border-gray-300 shadow-2xs">
                          {project.imageFileName}
                        </span>
                        <p className="text-[10px] text-gray-400 leading-tight">
                          클릭 시 상세 기획서 확인 가능
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 호버 시 오버레이 뱃지 */}
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {project.code}
                  </div>
                </div>

                {/* 2. 배너 우측: 텍스트 정보 영역 (가로 배너의 우측 60~65%) */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    {/* 상단 메타 (카테고리 & 기간) */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-black text-[#FF9600] tracking-wide uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.period}
                      </span>
                    </div>

                    {/* 프로젝트 제목 */}
                    <h3 className="text-lg sm:text-xl font-black text-[#3C3C3C] group-hover:text-[#1CB0F6] transition-colors line-clamp-1 mb-2">
                      {project.title}
                    </h3>

                    {/* 한 줄 요약 텍스트 */}
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed mb-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* 하단 태그 및 '자세히 보기' 버튼 */}
                  <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-gray-100 text-gray-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 클릭 유도 액션 버튼 */}
                    <div className="flex items-center gap-1 text-xs font-bold text-[#1CB0F6] group-hover:translate-x-1 transition-transform">
                      <span>상세 기획서 열기</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* 팝업 상세 모달 */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
