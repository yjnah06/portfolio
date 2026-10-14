// src/components/ProjectSkeleton.jsx
import React from 'react';

export const ProjectSkeleton = () => {
  return (
    <div className="duo-card p-4 sm:p-5 animate-pulse bg-white border-2 border-gray-200">
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
        {/* 좌측 이미지 스켈레톤 (가로 배너의 좌측 40%) */}
        <div className="w-full md:w-[320px] lg:w-[360px] h-48 md:h-auto rounded-xl bg-gray-200 shrink-0" />
        
        {/* 우측 텍스트 스켈레톤 */}
        <div className="flex-1 space-y-3 py-1">
          <div className="flex items-center gap-2">
            <div className="w-20 h-5 bg-gray-200 rounded-md" />
            <div className="w-28 h-5 bg-gray-200 rounded-md" />
          </div>
          <div className="w-3/4 h-7 bg-gray-200 rounded-lg" />
          <div className="w-full h-12 bg-gray-100 rounded-lg" />
          <div className="flex gap-2 pt-2">
            <div className="w-16 h-6 bg-gray-200 rounded-md" />
            <div className="w-20 h-6 bg-gray-200 rounded-md" />
            <div className="w-16 h-6 bg-gray-200 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};
