import React from "react";

const MainInput = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center max-w-6xl w-full">
        <div className="mt-12 text-2xl">연봉을 올려보세요</div>
        <input
          type="text"
          placeholder="배우고 싶은 지식을 입력해보세요."
          class="input input-bordered input-accent w-full max-w-xl input-lg w-full rounded-md mt-5"
        />
      </div>
    </div>
  );
};

export default MainInput;
