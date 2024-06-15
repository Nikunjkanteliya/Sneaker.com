"use client";
import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { teammembers_Images } from "../constants/team_Members_Img";
import Image from "next/image";

const TeamMembers = () => {
  const intervalRef = useRef(null);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000, // Slide transition duration in ms
    slides: {
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      "(max-width:900px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 767px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },

    // breakpoints: {
    //   "(min-width: 768px)": {
    //     slidesPerView: 2,
    //   },
    // },
  });

  useEffect(() => {
    if (!slider) return;

    const autoPlay = () => {
      if (slider.current) {
        slider.current.next();
      }
    };

    // Set the interval for autoplay
    intervalRef.current = setInterval(autoPlay, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [slider]);

  return (
    <div className="max-w-[1280px] mx-auto my-0 p-5">
      <h2 className="p-[15px] text-[30px] text-[#212a2f] font-[700] font-serif underline underline-offset-[10px] md:text-center">
        Meet Our Dynamic Team
      </h2>
      <div ref={sliderRef} className="keen-slider my-14">
        {teammembers_Images.map(({ img_src, name }, index) => (
          <div
            className="keen-slider__slide flex justify-center relative"
            key={index}
          >
            <Image
              src={img_src}
              alt={`Img${name}`}
              quality={100}
              width={350}
              height={350}
            />
            <span className="absolute bottom-5 text-[#fff] font-[700] text-[22px] font-serif drop-shadow-md">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
