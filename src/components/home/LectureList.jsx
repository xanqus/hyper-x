import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import LectureListItem from "./LectureListItem";

const LectureList = ({ lectureDatas }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start justify-center max-w-6xl w-full">
        <div className="flex items-center mt-12 text-2xl">
          {lectureDatas.title}
          <FaAngleDoubleRight />
        </div>
        <div className="text-gray-500 mt-4 text-sm font-semibold">
          {lectureDatas.description}
        </div>
        <div className="w-full h-80 truncate">
          <div className="flex flex-wrap justify-start w-full h-full">
            {lectureDatas.lectureDatas.map((lectureData, index) => (
              <LectureListItem lectureData={lectureData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureList;
