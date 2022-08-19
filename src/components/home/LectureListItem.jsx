import React from "react";

const LectureListItem = ({ letureData }) => {
  return (
    <div className="w-1/3 text-sm md:w-1/4 md:text-base lg:w-1/5 h-full border-box p-1">
      <div className="w-full h-1/2">
        <img className="w-full h-full" src={letureData.thumnailImgSrc} alt="" />
      </div>
      <div className="w-full h-1/2 border-box">
        <div className="flex flex-col justify-start w-full h-1/2 whitespace-normal">
          {letureData.title}
        </div>
        <div className="flex flex-col justify-start w-full h-1/2">
          <div className="w-full h-1/3">{letureData.author}</div>
          <div className="w-full h-1/3 font-bold text-blue-700">
            {letureData.price}
          </div>
          <div className="w-full h-1/3">+{letureData.view}명</div>
        </div>
      </div>
    </div>
  );
};

export default LectureListItem;
