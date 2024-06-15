/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
const Aboutus = () => {
  return (
    <div className="about_us_view xl:*:overflow-auto">
      <div>
        {" "}
        <Image
          src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/v8XWwh4K3Mer3ysAIpcm7/12a38eac5b14202d281e84f3c6c6ec39/ezgif.com-optimize.gif"
          alt="shoes_img"
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      </div>
      <div className="grid grid-cols-3 mt-[50px] xl:grid-cols-2 xl:gap-y-[50px] xl:place-items-center  md:grid-cols-1">
        <div className="max-w-[300px] text-center font-sans text-[#212a2f]">
          <p className="text-[22px] font-bold "> SIMPLICITY IN DESIGN</p>
          <p className="text-[16px]">
            No flashy logos. No senseless details. Just the world's most
            comfortable shoes, made naturally and designed practically. It's
            that simple.
          </p>
        </div>
        <div className="max-w-[300px] text-center ont-sans text-[#212a2f]">
          <p className="text-[22px] font-bold ">CONFIDENCE IN COMFORT</p>
          <p className="text-[16px]">
            Trying is believing. Give our shoes a shot for 30 days, and if
            you're not walking on cloud nine, we'll take them back-no questions
            asked.
          </p>
        </div>
        <div className="max-w-[300px] text-center ont-sans text-[#212a2f]">
          <p className="text-[22px] font-bold ">MADE FROM NATURE</p>
          <p className="text-[16px]">
            The footwear industry often overlooks Mother Nature's materials in
            favor of cheaper, synthetic alternatives
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
