// src/components/ProfileSection.jsx
import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  User, 
  Calendar, 
  GraduationCap, 
  Award, 
  Presentation, 
  Heart, 
  Sparkles, 
  FileDown, 
  ExternalLink,
  CheckCircle2,
  Brain,
  ShieldCheck
} from 'lucide-react';

export const ProfileSection = () => {
  const { profile } = portfolioData;
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section id="profile" className="py-12 px-4 max-w-5xl mx-auto">
      {/* 섹션 라벨 */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#1CB0F6] flex items-center justify-center font-bold">
          02
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#3C3C3C]">
          PROFILE & SKILLS
        </h2>
        <span className="text-sm font-bold text-gray-400 ml-2">지원자 역량 명세</span>
      </div>

      {/* 1. 상단 프로필 헤더 카드 (듀오링고 'John' 프로필 헤더 스타일) */}
      <div className="duo-card p-6 sm:p-8 mb-8 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
          
          {/* 아바타 (듀오링고 원형 블루 링 + 하트 뱃지) */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#1CB0F6] bg-blue-50/50 p-1 flex items-center justify-center shadow-inner overflow-hidden">
              {!avatarError ? (
                <img
                  src={profile.avatarImage}
                  alt={profile.name}
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 flex flex-col items-center justify-center text-[#1CB0F6]">
                  <span className="text-4xl sm:text-5xl font-black">윤진</span>
                  <span className="text-[10px] text-gray-500 font-semibold mt-1">예비 교육가</span>
                </div>
              )}
            </div>
            
            {/* 우측 하단 상태 뱃지 아이콘 */}
            <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-[#1CB0F6] text-white flex items-center justify-center border-2 border-white shadow-md" title="마음 따뜻한 교육 인재">
              <Heart className="w-5 h-5 fill-white" />
            </div>
          </div>

          {/* 인적사항 기본 정보 */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <h3 className="text-2xl sm:text-3xl font-black text-[#3C3C3C]">
                {profile.name}
              </h3>
              <span className="text-sm font-semibold text-gray-400">
                {profile.englishName}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-[#46A302] border border-green-200">
                {profile.statusBadge}
              </span>
            </div>

            {/* 생년월일 & 희망 직무 (아이콘 리스트) */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
                <Calendar className="w-4 h-4 text-[#FF9600]" />
                <span>{profile.birthDate}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 text-[#1CB0F6] font-bold">
                <GraduationCap className="w-4 h-4 text-[#1CB0F6]" />
                <span>희망 직무: {profile.targetRole}</span>
              </div>
            </div>

            {/* 자기소개 요약 블록 */}
            <div className="pt-2 text-sm text-gray-700 leading-relaxed space-y-1 bg-[#F9FAFB] p-4 rounded-xl border border-gray-200/80">
              {profile.bio.map((paragraph, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="text-[#58CC02] font-black shrink-0">•</span>
                  <span>{paragraph}</span>
                </p>
              ))}
            </div>
          </div>

          {/* 우측 상단 액션 버튼 (시안의 'EDIT PROFILE' 스타일) */}
          <div className="shrink-0 flex md:flex-col gap-2 w-full md:w-auto">
            <a
              href="#sitemap"
              className="duo-btn-blue px-4 py-2.5 text-xs sm:text-sm flex items-center justify-center gap-2 flex-1 md:flex-initial"
            >
              <FileDown className="w-4 h-4" />
              <span>이력서 (PDF) 받기</span>
            </a>
            <a
              href="mailto:yunjin.edu@example.com"
              className="duo-btn-white px-4 py-2 text-xs sm:text-sm flex items-center justify-center gap-2 flex-1 md:flex-initial"
            >
              <span>이메일 문의</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2단 그리드: 좌측 자격증(Statistics 카드) + 우측 Skill(Achievements 프로그레스 카드) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 좌측: 보유 자격증 (듀오링고 시안의 'Statistics' 2x2 카드 스타일) - 5컬럼 */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-black text-[#3C3C3C] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FFC800]" />
              <span>보유 자격증 (Certificates)</span>
            </h4>
            <span className="text-xs font-bold text-[#58CC02] bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
              공식 취득
            </span>
          </div>

          {/* 자격증 카드 리스트 */}
          <div className="space-y-3">
            {profile.certifications.map((cert) => (
              <div 
                key={cert.id}
                className="duo-card p-4 hover:border-amber-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/70 border-2 border-amber-300 text-amber-600 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-[#FF9600]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h5 className="font-extrabold text-base text-[#3C3C3C] truncate">
                        {cert.title}
                      </h5>
                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      {cert.issuer} · {cert.date}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 아동심리상담 특화 강조 팁 박스 */}
            <div className="p-3.5 rounded-2xl bg-blue-50/70 border-2 border-blue-200/80 text-xs text-blue-900 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#1CB0F6] shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block mb-0.5">교육 현장 적용 가치:</strong>
                아동 발달 단계에 적합한 심리적 안정감을 제공하며, 학습 장벽을 느끼는 학생과의 1:1 라포 형성 및 소통에 즉각 기여할 수 있습니다.
              </div>
            </div>
          </div>
        </div>

        {/* 우측: 핵심 보유 역량 / Skill (듀오링고 시안의 'Achievements' 스타일) - 7컬럼 */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-black text-[#3C3C3C] flex items-center gap-2">
              <Presentation className="w-5 h-5 text-[#1CB0F6]" />
              <span>전문 스킬 역량 (Skills & Tools)</span>
            </h4>
            <span className="text-xs font-bold text-gray-500">실무 중심 활용도</span>
          </div>

          <div className="space-y-3.5">
            {profile.skills.map((skill) => (
              <div 
                key={skill.id}
                className="duo-card p-4 hover:border-[#1CB0F6] transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* 스킬 대표 아이콘 박스 */}
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/80 border-2 border-orange-300 text-orange-600 flex items-center justify-center shrink-0">
                    <Presentation className="w-6 h-6 text-orange-500" />
                  </div>

                  {/* 스킬 설명 및 프로그레스 바 */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm sm:text-base text-[#3C3C3C]">
                        {skill.name}
                      </span>
                      <span className="text-xs font-black text-[#FF9600]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* 듀오링고 스타일 프로그레스 바 (노란색/오렌지 바) */}
                    <div className="w-full bg-[#E5E5E5] h-3.5 rounded-full overflow-hidden p-0.5 mb-2.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
