// src/data/portfolioData.js
// 나윤진 님의 교육 직무 이력서 포트폴리오 데이터 소스

export const portfolioData = {
  // 1. INTRO 섹션 데이터
  intro: {
    title: "윤진의 포트폴리오",
    subtitle: "아이들의 마음을 읽고, 배움의 즐거움을 설계하는 예비 교육 전문가",
    description: "아동심리 이해와 시각화 역량을 결합하여 학습자 중심의 교육 콘텐츠를 만듭니다.",
    // Spline 3D 임베드 URL (원하시는 다른 Spline URL로 언제든 교체 가능합니다)
    splineUrl: "https://my.spline.design/interactivegeometricshapes-95662bbff3b01859bbcfdd174c8bc2dc/",
    fallbackText: "3D 씬을 불러오는 중입니다...",
  },

  // 2. PROFILE 섹션 데이터
  profile: {
    name: "나윤진",
    englishName: "Na Yun-jin",
    birthDate: "2006. 08. 18 (만 18세)",
    targetRole: "교육 기획 · 아동 교육 콘텐츠 기획 · 학습 지도",
    avatarImage: "/images/profile/profile_avatar.png",
    statusBadge: "🎓 교육 직무 준비생",
    location: "대한민국 서울",
    email: "yunjin.edu@example.com",
    phone: "010-1234-5678",
    bio: [
      "배움은 단순한 지식 전달이 아닌, 아이의 마음을 열고 호기심을 발견하는 여정이라고 믿습니다.",
      "아동심리상담 지식을 기반으로 학습자의 정서와 눈높이에 맞춘 교육 방식을 고민하며, 파워포인트(PPT)를 활용해 누구나 쉽게 이해하고 몰입할 수 있는 시각 교육 자료를 직접 기획·제작합니다.",
      "스스로 탐구하고 성장하는 기쁨을 선물하는 따뜻하고 유능한 교육 기획자로 도약하고자 합니다."
    ],
    // 자격증 (듀오링고 시안의 Statistics / Achievements 스타일 매핑)
    certifications: [
      {
        id: "cert_01",
        title: "아동심리상담사 1급",
        issuer: "한국자격검정평가진흥원",
        date: "취득 완료",
        status: "공식 인증",
        description: "아동의 정서 발달 단계 이해, 행동 관찰 및 심리 평가, 라포 형성을 통한 맞춤형 학습 상담 역량 보유",
        icon: "award"
      },
      {
        id: "cert_02",
        title: "컴퓨터활용 교육문서 실무",
        issuer: "실무 인증",
        date: "보유",
        status: "활용 능숙",
        description: "교육안, 표준 교재, 학부모 상담 리포트 등 교육 행정 및 멀티미디어 문서 작성 최적화",
        icon: "file-text"
      }
    ],
    // 핵심 스킬 (시안의 프로그레스 바 스타일 매핑)
    skills: [
      {
        id: "skill_01",
        name: "Microsoft PowerPoint (PPT)",
        level: 95,
        badge: "핵심 강점 (Master)",
        color: "bg-[#FFC800]",
        description: "시각적 전달력이 뛰어난 교안 템플릿 설계, 복잡한 교육 이론의 인포그래픽 도식화, 애니메이션 기반 인터랙티브 퀴즈 슬라이드 제작 능숙"
      },
      {
        id: "skill_02",
        name: "아동 심리 분석 및 라포 형성",
        level: 90,
        badge: "전문성",
        color: "bg-[#1CB0F6]",
        description: "학습 부진 및 수업 집중도 저하 원인 파악, 아동 눈높이 질문법, 정서적 안정감을 주는 교육 환경 디자인"
      },
      {
        id: "skill_03",
        name: "교육 콘텐츠 기획 및 교안 설계",
        level: 88,
        badge: "기획력",
        color: "bg-[#58CC02]",
        description: "발달 단계별 맞춤형 커리큘럼 구성, 활동지(Activity Sheet) 제작, 놀이 기반 학습 시나리오 기획"
      }
    ]
  },

  // 3. PROJECT 섹션 데이터 (5개 동적 프로젝트 배열)
  projects: [
    {
      id: 1,
      code: "PROJECT 01",
      title: "아동 정서 발달을 위한 '마음 신호등' 인터랙티브 PPT 교안",
      category: "감정 코칭 & 시각 교안",
      period: "2026.02 - 2026.03 (4주)",
      role: "단독 기획 및 파워포인트 슬라이드 100% 제작",
      summary: "아이들이 자신의 분노, 불안, 기쁨 등 복합적인 감정을 빨강·노랑·초록 색상과 직관적인 캐릭터로 표현하도록 돕는 유·초등용 시청각 교육 슬라이드 패키지입니다.",
      imageFileName: "project_01.png",
      imagePath: "/images/projects/project_01.png",
      tags: ["PowerPoint", "아동심리상담", "인터랙티브 슬라이드", "시각화"],
      details: {
        background: "아동기 정서 조절 어려움을 겪는 아이들이 자신의 마음 상태를 말로 설명하기 어려워한다는 점에 착안하여, 친근한 시각적 상징물인 '신호등'을 매개체로 기획했습니다.",
        targetAudience: "만 5세 ~ 초등 2학년 (정서 표현 및 또래 관계 형성이 필요한 아동)",
        keyFeatures: [
          "슬라이드 클릭 시 표정이 변하는 PPT 트리거 애니메이션 구현",
          "아동의 감정 상태를 4단계로 진단하는 인터랙티브 퀴즈 시스템",
          "가정 및 교실에서 출력하여 활용할 수 있는 연계 감정 기록지 디자인",
          "교사를 위한 상황별 감정 코칭 가이드 슬라이드 수록"
        ],
        results: "모의 수업 시연 결과 참여 아동의 감정 단어 표현 빈도 60% 증가 및 교안 가독성 만족도 4.9/5.0 달성"
      }
    },
    {
      id: 2,
      code: "PROJECT 02",
      title: "초등 저학년 몰입도 극대화를 위한 게임형(Gamification) 기초 연산 PPT",
      category: "기초 학력 & 놀이 학습",
      period: "2026.01 - 2026.02 (3주)",
      role: "교육 기획, 시각 픽토그램 디자인, PPT 제작",
      summary: "지루할 수 있는 기초 덧셈·뺄셈 연산을 모험 스토리텔링과 레벨업 시스템으로 재해석하여, 수학에 대한 거부감을 없애고 성취감을 주는 퀴즈 교안입니다.",
      imageFileName: "project_02.png",
      imagePath: "/images/projects/project_02.png",
      tags: ["게이미피케이션", "PowerPoint", "동기부여", "초등수학"],
      details: {
        background: "초등 저학년의 수학 포기(수포자) 현상을 예방하기 위해, 문제 풀이 자체가 하나의 퀘스트처럼 느껴지는 재미있는 시각 교재가 필요했습니다.",
        targetAudience: "초등학교 1~2학년 학습자",
        keyFeatures: [
          "듀오링고의 레벨업 구조를 차용한 스테이지별 몬스터 격파 연산 퀴즈",
          "정답 및 오답 시 피드백 사운드와 역동적인 슬라이드 전환 효과",
          "자기주도 학습이 가능하도록 난이도별 힌트 카드 레이아웃 구성"
        ],
        results: "반복 연산 학습 시 집중 유지 시간 평균 15분에서 30분으로 2배 연장 효과 입증"
      }
    },
    {
      id: 3,
      code: "PROJECT 03",
      title: "학습 부진 아동을 위한 핵심 개념 1장 인포그래픽 카드뉴스 시리즈",
      category: "특수/보충 교육 & 도식화",
      period: "2025.11 - 2025.12 (5주)",
      role: "내용 구조화, 파워포인트 기반 인포그래픽 디자인",
      summary: "줄글 형태의 교과서 텍스트를 읽기 힘들어하는 학습자를 위해, 1장 슬라이드에 핵심 개념만을 인포그래픽과 비유로 압축한 보충 학습 자료 10종입니다.",
      imageFileName: "project_03.png",
      imagePath: "/images/projects/project_03.png",
      tags: ["인포그래픽", "PowerPoint", "학습자료 디자인", "도식화"],
      details: {
        background: "난독 및 긴 문장 읽기 불안을 가진 아동들이 한눈에 직관적으로 핵심을 파악할 수 있도록 텍스트는 70% 줄이고 다이어그램 중심의 교안을 설계했습니다.",
        targetAudience: "읽기 집중력이 부족하거나 학습 결손이 있는 초등 중학년",
        keyFeatures: [
          "파워포인트 기본 도형만을 활용한 깔끔하고 세련된 벡터 일러스트레이션",
          "색각 이상 및 시각적 피로도를 고려한 듀오링고풍 고대비 컬러 팔레트 적용",
          "모바일 화면과 인쇄물(A4) 양쪽 모두 선명하게 호환되는 그리드 레이아웃"
        ],
        results: "보충 수업 참여 학생 대상 개념 이해도 퀴즈 통과율 35%p 상승"
      }
    },
    {
      id: 4,
      code: "PROJECT 04",
      title: "학부모-교사 신뢰 구축을 위한 '주간 아동 성장 관찰 리포트' 템플릿",
      category: "교육 행정 & 상담 소통",
      period: "2025.09 - 2025.10 (3주)",
      role: "상담 서식 기획, PPT 브리핑 템플릿 개발",
      summary: "학생의 일주일간 학업 성취뿐 아니라 교우 관계, 정서적 변화를 한 장으로 요약하여 학부모와 효과적으로 소통할 수 있는 1-Page 대시보드 템플릿입니다.",
      imageFileName: "project_04.png",
      imagePath: "/images/projects/project_04.png",
      tags: ["학부모상담", "PowerPoint", "대시보드 디자인", "아동관찰"],
      details: {
        background: "형식적인 성적표 대신 아동의 전인적 발달(정서, 사회성, 태도)을 따뜻하게 전달할 수 있는 체계적인 소통 도구를 기획했습니다.",
        targetAudience: "교육 기관 강사, 방과후 교사 및 학부모",
        keyFeatures: [
          "텍스트만 입력하면 차트와 레이아웃이 자동 정돈되는 마스터 슬라이드 구조",
          "아동심리 관찰 체크리스트 8개 지표 방사형 차트 시각화",
          "칭찬 포인트와 가정 연계 지도 팁을 분리한 따뜻한 카드 섹션"
        ],
        results: "시범 적용 기관 학부모 피드백 만족도 98% (자녀 상태를 투명하게 이해할 수 있다는 호평)"
      }
    },
    {
      id: 5,
      code: "PROJECT 05",
      title: "재미있고 안전한 학교생활을 위한 스토리 기반 어린이 안전교육 슬라이드",
      category: "생활 안전 & 스토리텔링",
      period: "2025.07 - 2025.08 (4주)",
      role: "안전 수칙 시나리오 작성, 캐릭터 PPT 교안 제작",
      summary: "딱딱하고 무서운 안전 교육에서 벗어나, 귀여운 동물 친구들의 등굣길 모험을 따라가며 스스로 위험 요소를 찾아내는 참여형 안전 교육 교안입니다.",
      imageFileName: "project_05.png",
      imagePath: "/images/projects/project_05.png",
      tags: ["안전교육", "PowerPoint", "스토리텔링", "참여형 수업"],
      details: {
        background: "어린이 교통안전 및 교실 내 안전사고 예방을 위해 주입식 암기가 아닌 '상황 판단형 참여 수업' 콘텐츠로 구성했습니다.",
        targetAudience: "유치원생 및 초등 1-3학년",
        keyFeatures: [
          "틀린 그림 찾기 및 OX 퀴즈를 통한 자발적 안전 수칙 도출",
          "아이들의 시선 이동 동선을 계산한 직관적인 슬라이드 비주얼 배치",
          "교실 빔프로젝터 환경에서도 선명하게 보이는 높은 시인성"
        ],
        results: "교육 후 모의 안전 테스트 정답률 95% 기록 및 수업 몰입도 최우수 평가"
      }
    }
  ],

  // 4. HOBBY 섹션 데이터 (교육 직무 친화적 취미 카드)
  hobbies: [
    {
      id: "hobby_01",
      title: "동화책 & 그림책 큐레이션",
      category: "스토리텔링 연구",
      icon: "book-open",
      color: "bg-blue-50 text-[#1CB0F6] border-[#1CB0F6]/30",
      description: "아이들의 눈높이에서 세상을 바라보는 감각을 유지하기 위해 국내외 수상 그림책의 서사와 색채 표현법을 꾸준히 탐구하고 정리합니다."
    },
    {
      id: "hobby_02",
      title: "인포그래픽 & 슬라이드 스케치",
      category: "시각화 습관",
      icon: "layout",
      color: "bg-amber-50 text-[#FF9600] border-[#FF9600]/30",
      description: "복잡한 글이나 일상의 아이디어를 발견하면 노트에 3분 만에 다이어그램과 마인드맵으로 단순화하여 스케치하는 습관이 있습니다."
    },
    {
      id: "hobby_03",
      title: "또래 고민 상담 & 멘토링 대화",
      category: "공감과 소통",
      icon: "message-circle-heart",
      color: "bg-green-50 text-[#58CC02] border-[#58CC02]/30",
      description: "아동심리상담사 과정을 공부하며 기른 적극적 경청(Active Listening) 자세로 주변 친구들과 동생들의 고민을 듣고 지지해 줍니다."
    },
    {
      id: "hobby_04",
      title: "교육용 스티커 및 활동지 DIY",
      category: "창작 활동",
      icon: "sparkles",
      color: "bg-purple-50 text-[#A855F7] border-[#A855F7]/30",
      description: "아이들이 성취감을 느낄 수 있는 귀여운 칭찬 스티커와 손으로 직접 오리고 붙이는 참여형 미니 활동지를 디자인합니다."
    }
  ],

  // 5. SITEMAP 및 이력서 다운로드
  sitemap: {
    resumeDownloadUrl: "/resume/나윤진_이력서.pdf",
    resumeFileName: "나윤진_이력서_교육직무.pdf",
    navLinks: [
      { name: "01. INTRO (홈)", href: "#intro" },
      { name: "02. PROFILE (소개·자격증·스킬)", href: "#profile" },
      { name: "03. PROJECT (대표 프로젝트 5종)", href: "#project" },
      { name: "04. HOBBY (취미 및 관심사)", href: "#hobby" },
      { name: "05. RESUME (이력서 다운로드)", href: "#sitemap" }
    ],
    contactInfo: {
      name: "나윤진",
      email: "yunjin.edu@example.com",
      phone: "010-1234-5678",
      github: "https://github.com",
      blog: "https://velog.io",
      copyright: "© 2026 Na Yun-jin. All rights reserved."
    }
  }
};
