import earlysloth from "../assets/Company/earlyslothLogo.png";
import underpin from "../assets/Company/underpin.png";
import sunrin from "../assets/School/sunrin.png";
export const ResumeData = {
  career: [
    // 경력
    {
      company: "얼리슬로스 (earlysloth)",
      startAt: "2019년 11월", // 입사 월
      endAt: "",
      job: "프론트엔드 개발자", // 배정받은 일
      description:
        "React, Vue를 이용한 서비스 리펙토링, 리빌딩을 맡고 있습니다.",
      icon: earlysloth,
    },
    {
      company: "언더핀 (Underpin)",
      startAt: "2019년 1월",
      endAt: "2019년 6월",
      job: "웹 풀스택 개발자",
      description: "UI수정, 웹서비스 리펙토링을 맡았습니다",
      icon: underpin,
    },
  ],
  education: [
    {
      school: "선린인터넷고등학교",
      startAt: "2017년",
      endAt: "2020년",
      department: "소프트웨어과", // 학과
      icon: sunrin,
    },
  ],
  awards: [
    {
      title: "Smarteen App Challenge 2019 최우수상",
      host: "SK 플래닛", //주최
      date: "2019년 11월", // 수상 일
      description:
        "0과 함께하는 Smarteen App+ Challenge 2019 엔터테인먼트 부문에서 VR 리듬게임 Penlight Dancing로 최우수상을 수상했습니다.홍보용 웹, 게임과 상호작용하며 게임의 VR 프리뷰를 제공하는 오피셜 앱을 개발 및 출시하는 역할을 맡았습니다.", // 설명
    },
    {
      title: "Smarteen App Challenge 2018 장려상",
      host: "서울디지털재단", //주최
      date: "2018년 11월", // 수상 일
      description:
        "Vue.js를 사용한 모바일 웹 개발, Node.js를 사용한 서버 개발을 맡아, 만다라트 방식의 캘린더. 목공소를 출시해 수상을 했습니다.",
    },
    {
      title: "2018 불법스포츠도박 근절 해커톤 장려상",
      host: "서울올림픽기념 국민체육진흥공단", //주최
      date: "2018년 11월", // 수상 일
      description: "Vue.js를 사용한 웹 개발",
    },
  ],
  certificate: [
    {
      title: "정보처리기능사",
      date: "2017년 5월",
      host: "한국산업인력공단",
    },
  ],
};
