import { Carousel } from "flowbite-react";
import React from "react";
import CarouselItem from "../../components/home/CarouselItem";
import LectureList from "../../components/home/LectureList";
import MainInput from "../../components/home/MainInput";
import Layout from "../../layouts/Layout";
import {
  carouselDatas,
  lectureDatas1,
  lectureDatas2,
} from "../../datas/home/datas";

const Home = () => {
  return (
    <Layout>
      <div className="gap-4 h-auto">
        <Carousel>
          {carouselDatas.map((carouselData, index) => (
            <CarouselItem carouselData={carouselData} />
          ))}
        </Carousel>
      </div>
      <MainInput />
      <LectureList lectureDatas={lectureDatas1} />
      <LectureList lectureDatas={lectureDatas2} />
      <div className="h-60"></div>
    </Layout>
  );
};

export default Home;
