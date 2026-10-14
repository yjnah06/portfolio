// src/components/HobbySection.jsx
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  BookOpen, 
  Layout, 
  MessageCircleHeart, 
  Sparkles, 
  Heart,
  Smile
} from 'lucide-react';

export const HobbySection = () => {
  const { hobbies } = portfolioData;

  const iconMap = {
    'book-open': BookOpen,
    'layout': Layout,
    'message-circle-heart': MessageCircleHeart,
    'sparkles': Sparkles,
  };

  return (
    <section id="hobby" className="py-12 px-4 max-w-5xl mx-auto">
      {/* 섹션 헤더 */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-xl bg-green-100 text-[#58CC02] flex items-center justify-center font-bold">
          04
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#3C3C3C]">
          HOBBY & INTERESTS
        </h2>
        <span className="text-sm font-bold text-gray-400 ml-2">교육적 감수성과 일상</span>
      </div>

      {/* 4개 취미 카드 그리드 (듀오링고 시안의 Friends / 미니 카드 스타일) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hobbies.map((hobby) => {
          const IconComponent = iconMap[hobby.icon] || Heart;

          return (
            <div
              key={hobby.id}
              className="duo-card p-5 flex flex-col justify-between hover:border-[#58CC02] hover:-translate-y-1 transition-all group"
            >
              <div>
                {/* 상단 아이콘 박스 */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${hobby.color} group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-black text-[#58CC02] uppercase tracking-wider block mb-1">
                  {hobby.category}
                </span>

                <h3 className="font-extrabold text-base text-[#3C3C3C] mb-2 group-hover:text-[#58CC02] transition-colors">
                  {hobby.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* 하단 귀여운 뱃지 */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-semibold">
                <span>일상 속 영감</span>
                <Smile className="w-4 h-4 text-[#FFC800]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
