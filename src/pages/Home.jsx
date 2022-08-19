import { Carousel } from "flowbite-react";
import React from "react";
import CarouselItem from "../components/CarouselItem";
import Layout from "../layouts/Layout";

const Home = () => {
  const carouselDatas = [
    {
      tagColor: "#1044ff",
      bgColor: "#d2d9dd",
      tag: "오늘 뭐 듣지?",
      mainContent1: "무슨 강의 들을지 고민이라면",
      mainContent2: "현직자 Top 50 먼저 보기👀",
      subContent1: "입문부터 실전까지!",
      subContent2: "믿고 보는 실무자 Pick",
      imgSrc:
        "https://cdn.inflearn.com/public/main_sliders/7f3b415a-7267-49fc-9c68-9926b8c5f600/%5B22%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5Db2b_top50_main_521.gif",
    },
    {
      bgColor: "#00d078",
      mainContent1: "뭘 들어야 하지? 🤔",
      mainContent2: "나에게 딱 맞는 입문 강의",
      subContent1: "어디서부터 시작해야 할지 모르는",
      subContent2: "당신을 위한 입문 강의",
      imgSrc:
        "https://cdn.inflearn.com/public/main_sliders/f57e3418-f145-43a4-89d6-f1c4f0293460/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_521.png",
    },
    {
      bgColor: "#38e5ff",
      tagColor: "#6344ec",
      tag: "추천 학습 로드맵",
      mainContent1: "왕초보를 위한",
      mainContent2: "Lv. 1 인프런 로드맵 📖",
      subContent1: "인프런이 처음이라면, 길라잡이가 되어드릴게요.",
      imgSrc:
        "https://cdn.inflearn.com/public/main_sliders/5207c5ee-e72f-4fc1-aad0-6122d2a55956/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%E1%84%86%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB_main_521.gif",
    },
    {
      bgColor: "#086398",
      tagColor: "#00de84",
      tag: "지식공유신청",
      mainContent1: "나누는 지식만큼",
      mainContent2: "커지는 보람과 보상",
      subContent1: "인프런 지식공유자로",
      subContent2: "높은 수익과 가치를 만들어보세요.",
      imgSrc:
        "https://cdn.inflearn.com/public/main_sliders/14394a9e-4b27-4a0f-bc87-c2cae10e2d62/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A1_521.gif",
    },
    {
      bgColor: "#ff7836",
      tagColor: "#007bf8",
      tag: "신규 강의",
      mainContent1: "나만 몰랐었던 이 강의~♬",
      subContent1: "매일 업데이트 되는",
      subContent2: "인프런 신규강의를 만나보세요!",
      imgSrc:
        "https://cdn.inflearn.com/public/main_sliders/7dc9730a-1a01-40a7-a509-4e8bceb73570/%5B%EB%A9%94%EC%9D%B8%ED%9E%88%EC%96%B4%EB%A1%9C%5D%EC%8B%A0%EA%B7%9C%EA%B0%95%EC%9D%98_main_521.gif",
    },
  ];
  return (
    <Layout>
      <div className="gap-4 h-96">
        <Carousel>
          {carouselDatas.map((carouselData, index) => (
            <CarouselItem carouselData={carouselData} />
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export default Home;
